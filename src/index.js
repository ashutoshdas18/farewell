window.onload = function(){
    document.querySelector('.rocket-img').style.transform="translateX(10px)";
    console.log("Hello");
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
                tags.close.style.display="inline";
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
        num =3;
    }
    num--;
    tags.centerImage.src=`img-${num}.jpg`;
    tags[`indicator${num}`].style.backgroundColor = 'red';
})

tags.imageRight.addEventListener("click",e=>{
    tags[`indicator${num}`].style.backgroundColor="white";
    if(num>=2)
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
     if(num>2){
         num=0;
     }
     tags[`indicator${num}`].style.backgroundColor = 'red';
     tags.centerImage.src=`img-${num}.jpg`;
    }, 10000);
}