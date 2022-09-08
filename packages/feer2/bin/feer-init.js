#!/usr/bin/env node

/* eslint-disable */

const path = require('path');
const fs = require('fs-extra');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const program = require('commander');
const inquirer = require('inquirer');
const packageJson = require('../package.json');

const log = console.log;
const error = console.error;

let projectName;

program
  .version(packageJson.version, '-v, --version')
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .option('--overwrite', 'overwrite the exist path')
  .option('--verbose', 'output verbose info')
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

if (!projectName) {
  error('\nPlease enter the project name: \n');
  log(
    `Such as: ${chalk.cyan(program.name())} ${chalk.green('feer-app')}\n`
  );
  process.exit(1);
}

// project init path
const root = path.resolve(projectName);
const rootExist = fs.pathExistsSync(root);

if (rootExist && !program.overwrite) {
  inquirer.prompt({
    type: 'list',
    name: 'overwrite',
    message: `Path ${chalk.hex('#FFB310')(root)} is exist, do you want to overwrite it?`,
    choices: [
      'Exit and Check',
      'OverWrite'
    ]
  }).then(answers => {
    const overwrite = answers.overwrite === 'OverWrite';
    if (overwrite) {
      selectAppType();
    } else {
      process.exit(1);
    }
  });
} else if (!rootExist) {
  selectAppType();
}

function selectAppType() {
  fs.emptyDirSync(root);
  log();
  inquirer.prompt({
    type: 'list',
    name: 'type',
    message: 'Which type do you want to create?',
    choices: [
      {
        name: `${chalk.hex('#DF7782')('PC')} - (build the pc page)`,
        value: 'feer-pc'
      },
      {
        name: `${chalk.hex('#8bc24c')('H5')} - (build the h5 page)`,
        value: 'feer-h5'
      },
      {
        name: `${chalk.hex('#f29c2b')('PC-multi')} - (build the pc multi-page)`,
        value: 'feer-pc-multipage'
      }
    ]
  }).then(a => {
    createApp(a.type);
  });
}

function install() {
  log('Installing packages, This might take a couple of minutes...\n');

  return new Promise((resolve, reject) => {
    const commond = 'npm';
    const args = [
      'install'
    ];

    if (program.verbose) {
      args.push('--verbose');
    }

    spawn(commond, args, { stdio: 'inherit' }).on('close', code => {
      if (code !== 0) {
        reject();
        process.exit(1);
      }
      resolve();
    });
  });
}

function createApp(type) {
  fs.ensureDirSync(root);
  process.chdir(root);

  const initScriptPath = path.resolve(
    __dirname,
    '..',
    'scripts',
    'init.js'
  );

  const afterInstallScriptPath = path.resolve(
    __dirname,
    '..',
    'feedback',
    // type, //可针对不同的模板，安装后作不同的回调处理
    'afterinstall.js'
  );

  require(initScriptPath)(type).then(() => {
    fs.readJson('./package.json').then(obj => {
      obj.name = projectName;
      fs.writeJson('./package.json', obj, { spaces: 2 }).then(() => {
        log('\nInit package.json success!\n');
        install().then(() => {
          require(afterInstallScriptPath)(projectName);
        });
      }).catch(err => {
        error(err);
        process.exit(1);
      });
    });
  });
}
