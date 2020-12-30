// در این فایل مشخص می شود کدام یک از پیج های دروس توسعه دهنده بارگیری شود
// نکته مهم پارمترها از فایل گت یو آر ال دریافت می شوند
// get the param from getUrlParam.js


switch (page) {
    case 'lessonLaravelApi':lessonPage=[...lessonLaravelApi];break;
    case 'lessonLaravelStart':lessonPage=[...lessonLaravelStart];break;
    case 'lessonLaravelModel':lessonPage=[...lessonLaravelModel];break;
    case 'lessonLaravelMigration':lessonPage=[...lessonLaravelMigration];break;
    case 'lessonLaravelFactory':lessonPage=[...lessonLaravelFactory];break;
    case 'lessonLaravelSeeder':lessonPage=[...lessonLaravelSeeder];break;
   
    default:lessonPage=[];
    
  }
