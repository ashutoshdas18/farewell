window.onload = function(){
    document.querySelector('.rocket-img').style.transform="translateX(10px)";
    if(window.innerHeight<750){
        document.querySelector('.bottom-para').style.display="none";
    }
    if(window.innerHeight<670){
        document.querySelector('.explore').style.display ="none";
        document.querySelector('.arr').style.top= "38%";
    }
        card();
        myFunction();
};
var num=1,i=30;

const tags={

    imageLeft:document.querySelector('.imageContainer-Left'),
    centerImage:document.querySelector('.imageContainer-img'),
    imageRight:document.querySelector('.imageContainer-Right'),
    indicator0:document.querySelector('.indicator-0'),
    indicator1:document.querySelector('.indicator-1'),
    indicator2:document.querySelector('.indicator-2'),
    indicator3:document.querySelector('.indicator-3'),
    indicator4:document.querySelector('.indicator-4'),
    arr:document.querySelector('.arr'),
    explore:document.querySelector('.explore'),
    card:document.querySelector('.card-container'),
    cardHolder:document.querySelector('.cardHolder'),
    close:document.querySelector('.close'),
    timer:document.querySelector('.timer')

}


function card(){
    setTimeout(function(){
        document.querySelector('body').style.overflow ="hidden";
        tags.card.style.right ="0";
        (function(){
            setTimeout(function(){
                tags.close.style.display="flex";
                tags.close.style.justifyContent="center";
            },3000)
        })();
    },7000)
}
tags.close.addEventListener('click',e=>{
    tags.card.style.right ="-150%";
    document.querySelector('body').style.overflowY ="scroll";
    tags.close.style.display="none"
})

tags[`indicator${num}`].style.backgroundColor = 'red';

tags.imageLeft.addEventListener("click",e=>{
    tags[`indicator${num}`].style.backgroundColor="white";
    if(num<=0){
        num =4;
    }
    num--;
    tags.centerImage.src=`img-${num}.jpg`;
    tags[`indicator${num}`].style.backgroundColor = 'red';
})

tags.imageRight.addEventListener("click",e=>{
    tags[`indicator${num}`].style.backgroundColor="white";
    if(num>=4)
    {
        num=-1;
    }
    num++;
    tags[`indicator${num}`].style.backgroundColor = 'red';
    tags.centerImage.src=`img-${num}.jpg`;
})

function myFunction() {
  setInterval(function(){
    tags[`indicator${num}`].style.backgroundColor="white";
     num++
     if(num>4){
         num=0;
     }
     tags[`indicator${num}`].style.backgroundColor = 'red';
     tags.centerImage.src=`img-${num}.jpg`;
    }, 10000);
}