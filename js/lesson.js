// با کلیک بر روی یکی از گزینه های سر فصل به فصل مربوطه هدایت می شویم
const scrollToElement= (id)=>{
    console.log(id);
        const offsetElement = $("#"+id).offset();
        console.log(offsetElement);
        $('html,body').animate({ scrollTop: offsetElement.top - 10 }, 'slow');
}

let idTitlePage='';//آی دی فصلهای درس
let TitlePage='';
let nameTitlePage=[];//نام فهرست فصلهای درس
let badyPage='';//بدنه و محتوای درس
lessonPage.map((item)=>{
    TitlePage += `<a onclick="scrollToElement('${item[0]}')">${item[1]}</a> `;
    badyPage += `<div class='chunkLesson'>
                    <div class="titleLesson fa" id="${item[0]}"># ${item[1]} </div>
                    <div class="articleLesson">${item[2]}</div>
                </div>`;
//   mean.push(item[1]);
//   accentEn.push(item[2]);
//   accentPr.push(item[3]);
});
$('#listTitleLesson').html(TitlePage);
$('#bodyLesson').html(badyPage);