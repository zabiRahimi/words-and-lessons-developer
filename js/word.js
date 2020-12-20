
let p='';//کلمه ها
let mean=[];//معنی ها
let accentEn=[];//تلفظ انگلیسی
let accentPr=[];//تلفط فارسی
allText.map((item)=>{
  p += `${item[0]} `;
  mean.push(item[1]);
  accentEn.push(item[2]);
  accentPr.push(item[3]);
});
$('#textTest').html(p);
document.getElementById('textarea').focus();
const textTest = document.getElementById("textTest").textContent.trim();
let arr = textTest.split("");
let text = "";
let i;
for (i = 0; i < arr.length; i++) {
  text +=`<span id='g${i}' class='line'>${arr[i]}</span>`
}

document.getElementById("textTest").innerHTML = text;
document.getElementById("textarea").setAttribute("maxlength", textTest.length);
var hg=0;


let num=0;
var di;
var dt

const myTimer=()=>{

  if(hg==0){
    hg=1;
$(`#${dt}`).addClass('off');
    $( `#${dt}` ).removeClass( "on");
  }else{
    hg=0;
      $( `#${dt}` ).removeClass( "off");
    $(`#${dt}`).addClass('on');


  }
}
var myVar = setInterval(myTimer, 400);
const myTextarea=()=>{
  var textareaVal = document.getElementById("textarea").value;
  if(textTest.charAt(num)==textareaVal.charAt(num)){
    $('#textType').html(textareaVal);
    $( `#g${num}` ).removeClass( "off on");
    document.getElementById(`g${num}`).style.color='blue';

    num++;
    $( `#g${num}` ).addClass( "off");
    di=`g${num - 1}`;
    dt=`g${num}`;
    if(num==textTest.length){alert('ok');againTest() }
  } else {
    let numred=num +1;
    document.getElementById(`g${num}`).style.color='red';
    let textType = document.getElementById("textType").textContent;
    document.getElementById("textarea").value=textType;
  }
}

//شروع تمرین دوباره
const againTest=()=>{
  document.getElementById("textarea").value='';
  document.getElementById('textarea').focus();
  num=0;
  for (c= 0; c < arr.length; c++) {
    document.getElementById(`g${c}`).style.color='#000';
  }
}

// create input with spelling
let arrayText = textTest.split(" ");//create array of value text element
let input="";
arrayText.map((item , index)=>{
  input +=`<div class='spelling'><div class='divInput'><input id='inputSpelling${index}' oninput="checkSpelling(${index})"></input><span id='check${index}'></span></div> <div>${accentEn[index]}</div> <div id='word${index}'>${item}</div> <div>${accentPr[index]}</div> <div class='divmean'>${mean[index]}</div> </div>`;
})
  document.getElementById("spellingBody").innerHTML = input;
  const checkSpelling=(index)=>{
    $(`.divInput input`).css('border-color','#afafaf');
    $(`#check${index}`).css('color','#858585');
    let word=$(`#word${index}`).html();
    let valInput=$(`#inputSpelling${index}`).val();
    $(`#check${index}`).html(valInput);
    if(word.length==valInput.length){
      $(`#inputSpelling${index}`).val('');
      if(word===valInput){
        $(`#check${index}`).css('color','green');
        $(`#inputSpelling${index}`).css('border-color','green');

      }else{
        $(`#check${index}`).css('color','red');
        $(`#inputSpelling${index}`).css('border-color','red');
      }
    }
  }
