const detectOS = (ua: string) => {
  const android = ua.match(/(Android);?[\s/]+([\d.]+)?/);
  const iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/);
  const ipad = ua.match(/(iPhone\sOS)\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  let isAndroid = false;
  let isIpad = false;
  let isIpod = false;
  let isIphone = false;
  let isIos = false;
  let version = '';

  if (android) {
    isAndroid = true;
    [, , version] = android;
  } else if (iphone) {
    isIos = true;
    isIphone = true;
    [, , version] = iphone;
  } else if (ipad) {
    isIos = true;
    isIpad = true;
    [, , version] = ipad;
  } else if (ipod) {
    isIos = true;
    isIpod = true;
    [, , version] = ipod;
  }

  return {
    isAndroid,
    isIpad,
    isIpod,
    isIphone,
    isIos,
    version,
  };
};

const detectEnv = (ua: string) => {
  const isQZ = /qzone/gi.test(ua);
  const isWX = /micromessenger/gi.test(ua);
  const isKB = /qnreading/gi.test(ua);
  const isQQ = !isQZ
    && /mobile.*qq/gi.test(ua)
    && !/mobile.*mqqbrowser/gi.test(ua)
    && !/mobile.*qqlivebrowser/gi.test(ua);
  const isQB = !isQZ && !isQQ && !isWX && /mqq/gi.test(ua);
  const isTbs = /TBS\//gi.test(ua);
  // 沉浸式
  const isImmersive = /isimmersive\/1/gi.test(ua);

  const { isAndroid, isIos, version, isIphone, isIpad, isIpod } = detectOS(ua);
  return {
    isQZ,
    isWX,
    isKB,
    isQQ,
    isQB,
    isTbs,
    isImmersive,
    isAndroid,
    isIos,
    version,
    isIphone,
    isIpad,
    isIpod,
  };
};

export default detectEnv(navigator.userAgent);
