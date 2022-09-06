/* eslint-disable */

/**
 * Copy specified template to project.
 */

const path = require('path');
const fs = require('fs-extra');

module.exports = (type) => {
  //The template directory
  const templatePath = path.resolve(__dirname, '..', `templates/${type}`); 
  //The directory in which the process is currently working
  const CWD = process.cwd(); 
  return new Promise((resolve, reject) => {
    fs.copy(templatePath, `${CWD}`, { overwrite: true }, (err) => {
      if (err) {
        reject(err);
        process.exit(1);
      }

      // Rename gitignore after the fact to prevent npm from renaming it to .gitignore
      // See: https://github.com/npm/npm/issues/1862
      try {
        fs.moveSync(
          path.join(CWD, 'gitignore'),
          path.join(CWD, '.gitignore'),
          []
        );
      } catch (error) {
        // Append if there's already a `.gitignore` file there
        if (error.code === 'EEXIST') {
          const data = fs.readFileSync(path.join(CWD, 'gitignore'));
          fs.appendFileSync(path.join(CWD, '.gitignore'), data);
          fs.unlinkSync(path.join(CWD, 'gitignore'));
        } else {
          throw error;
        }
      }

      console.log('\nInit template success! ✨\n');
      resolve();
    });
  });
};
