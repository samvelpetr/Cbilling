const howToGet__chrome2=document.querySelectorAll('.howToGet__chrome2');

const HowToGetAccess__chrome=document.querySelectorAll('.HowToGetAccess__chrome')

const howToGetAccess_name=document.querySelectorAll('.howToGetAccess_name');

const burger__menu = document.querySelector('.burger__menu');

const burger = document.querySelector('.burger');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const last = document.querySelector('.last');

burger.onclick = () =>{
    burger__menu.classList.toggle('burger__add');
    first.classList.toggle('first-item')
    second.classList.toggle('second-item')
    last.classList.toggle('last-item')
}


howToGetAccess_name.forEach((e,i)=>{
    e.addEventListener('click',function(){
        howToGetAccess_name.forEach((el,index)=>{
            el.classList.remove('howToGetAccess_name-active')
            HowToGetAccess__chrome[index].classList.remove('HowToGetAccess-active')
            howToGet__chrome2[index].classList.remove('howToGet__chrome2-active')
        })  
        e.classList.add('howToGetAccess_name-active')
        HowToGetAccess__chrome[i].classList.add('HowToGetAccess-active')
        howToGet__chrome2[i].classList.add('howToGet__chrome2-active')


    })
})