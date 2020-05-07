// logo
function logoOver(thisE){
    setTimeout(function(){
        thisE.textContent = "YoWS"
    },30);
    setTimeout(function(){
        thisE.textContent = "YouWS"
    },60);
    setTimeout(function(){
        thisE.textContent = "YourWS"
    },90);
    setTimeout(function(){
        thisE.textContent = "YourWeS"
    },120);
    setTimeout(function(){
        thisE.textContent = "YourWebS"
    },150);
    setTimeout(function(){
        thisE.textContent = "YourWebSi"
    },180);
    setTimeout(function(){
        thisE.textContent = "YourWebSit"
    },210);
    setTimeout(function(){
        thisE.textContent = "YourWebSite"
    },240);
}

function logoOut(thisE){
    setTimeout(function(){
        thisE.textContent = "YWS"
    },270)
    setTimeout(function(){
        thisE.textContent = "YoWS"
    },240);
    setTimeout(function(){
        thisE.textContent = "YouWS"
    },210);
    setTimeout(function(){
        thisE.textContent = "YourWS"
    },180);
    setTimeout(function(){
        thisE.textContent = "YourWeS"
    },150);
    setTimeout(function(){
        thisE.textContent = "YourWebS"
    },120);
    setTimeout(function(){
        thisE.textContent = "YourWebSi"
    },90);
    setTimeout(function(){
        thisE.textContent = "YourWebSit"
    },60);
    setTimeout(function(){
        thisE.textContent = "YourWebSite"
    },30);
}

// center text

let centerText = document.querySelector('.center-text');
let textContent = ["we are here for you       "] , k = 0;

setInterval(function(){

    if(k < textContent[0].length)
    centerText.textContent += textContent[0][k];
    else{
        centerText.textContent = "";
        k = -1;
    }
    k++;
},100)

// header
let menuA = document.querySelectorAll('.menu li a');
let header = document.querySelector('.header');

window.addEventListener('scroll', function(){
     console.log(this.scrollY)
    let scroll = this.scrollY;
    if(scroll < 100){
        header.style.background = "transparent";
        header.style.boxShadow = "none";
        for(let j = 0;j < menuA.length;j++)
            menuA[j].style.color = "#fff";  
    }
    else {
        header.style.background = "var(--c4)"
        header.style.boxShadow = '5px 2px 5px 1px #aeaeae';
        for(let j = 0;j < menuA.length;j++)
            menuA[j].style.color = "var(--c2)";  
    }

    let pageBody = document.querySelector('body');

    if(scroll >= 900){
        pageBody.style.backgroundImage = "url(img/bg-2.jpg)";
    }
    else{ 
        pageBody.style.backgroundImage = "url(img/bg-6.jpeg)";
    }
})


//  portfolio

function zoomPortfolio(){
    let portfolioPopup = document.querySelector('.portfolio-popup');

    portfolioPopup.classList.toggle('popup-active');
}

// load more -- loading
function closeLoadMoreButton(closeLoad){
    closeLoad.style.display = "none";
    closeLoad.parentElement.children[1].style.display = "block";
}

// show burger menu

function showBurger(thisBurger){
    let burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active-burger')
    thisBurger.children[0].classList.toggle('burger-0');
    thisBurger.children[1].classList.toggle('burger-1');
    thisBurger.children[2].classList.toggle('burger-2');
}