// خواندن مقادیر و پارامتر ها از آدرس بار صفحه
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}
const showPage=($.urlParam('show'))?$.urlParam('show'):'indexPage';
const page=($.urlParam('page'))?$.urlParam('page'):'page';
let title=($.urlParam('title'))?$.urlParam('title'):'home';
title=title.replace(/%20/g, " ");
// مشخص می کند کدام از تگهای صفحه اصلی نمایش داده شود
$(`#${showPage}`).removeClass('notShow');

// مقدار دهی تایتل مربوط به مرورگر
$('title').html(title);
// مقدار دهی هدر هر صفحه از درس
$('#headerPage h4').html(title);