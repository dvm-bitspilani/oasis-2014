//DETECT BROWSER

var browserName;
var browserVersion;

detectBrowser();

function detectBrowser() {
  //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
  if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browserName = "firefox";
    var ffversion=new Number(RegExp.$1) 
    browserVersion = Math.floor(ffversion);
  }
  //test for MSIE x.x; 
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
    browserName = "internet explorer";
    var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    browserVersion = Math.floor(ieversion);
  }
  //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
  if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))  {
    browserName = "opera";
    var oprversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    browserVersion = Math.floor(oprversion);
  }
  if((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('safari') !=-1)) {
    browserName = "chrome";
    browserVersion = "";
  }
  if((navigator.userAgent.toLowerCase().indexOf('chrome') == -1) && (navigator.userAgent.toLowerCase().indexOf('safari') !=-1)) {
    browserName = "safari";
    browserVersion = "";
  }
}

//DETECT DEVICE

var deviceName;

detectDevice();

function detectDevice() {
  if
  ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)))
    deviceName = "iosdevice";
  else if (navigator.userAgent.match(/Android/i))
    deviceName = "android";
  else if (navigator.userAgent.match(/BlackBerry/i)) 
    deviceName = "blackberry";
  else if (navigator.userAgent.match(/IEMobile/i)) 
    deviceName = "iemobile";
  else if (navigator.userAgent.match(/Silk/i)) 
    deviceName = "kindle";
  else
    deviceName = "computer";
}