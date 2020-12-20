// در این صفحه مشخص می شود کدام پیج از دروس کلمه ها بارگیری شود
// نکته مهم پارمترها از فایل گت یو آر ال دریافت می شوند
// get the param from getUrlParam.js
switch (page) {
    case 'laravelApi1':allText=[...laravelApi1];break;
    case 'laravelWord1':allText=[...laravelWord1];break;
    case 'laravelWord2':allText=[...laravelWord2];break;
    case 'laravelWord3':allText=[...laravelWord3];break;
    case 'laravelWord4':allText=[...laravelWord4];break;
    case 'laravelWord5':allText=[...laravelWord5];break;
    case 'laravelMigration':allText=[...laravelMigration];break;
    case 'laravelModel':allText=[...laravelModel];break;
    case 'laravelPublic1':allText=[...laravelPublic1];break;
    case 'laravelFaker1':allText=[...laravelFaker1];break;
    default:allText=[];
  }