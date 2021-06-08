$(document).ready(function (){
    $('.accordeon__item_triger').click(function(){
    $(this).next('.accordeon__item_content').slideToggle();
    });
      });


 const slidePage = document.querySelector('.slidepage');
 const firstNextBtn = document.querySelector('.nextBtn');
 const prevBtnSec = document.querySelector('.back-2');
 const nextBtnSec = document.querySelector('.next-2');
 const prevBtnThir = document.querySelector('.back-3');
 const nextBtnThir = document.querySelector('.next-3');
 const prevBtnFour = document.querySelector('.back-4');
 const nextBtnFour = document.querySelector('.next-4');
 const prevBtnFif = document.querySelector('.back-5');
 const progressCheck = document.querySelectorAll('.step .step_check');
 const progressBar = document.querySelectorAll('.step');

//  const submit = document.querySelectorAll('.submit');
//  const submit = document.querySelectorAll('.submit');
let max = 5;
let current = 1;

 firstNextBtn.addEventListener('click', function(){
    slidePage.style.marginLeft = '-17%';
    progressCheck[current - 1].style.display = 'block';

    current += 1;
 });
 nextBtnSec.addEventListener('click', function(){
    slidePage.style.marginLeft = '-34%';
    progressCheck[current - 1].style.display = 'block';
    progressBar[current - 1].classList.add('.active');
    current += 1;
 });
 nextBtnThir.addEventListener('click', function(){
    slidePage.style.marginLeft = '-51%';
    progressCheck[current - 1].style.display = 'block';
    current += 1;
 });
 nextBtnFour.addEventListener('click', function(){
    slidePage.style.marginLeft = '-68%';
    progressCheck[current - 1].style.display = 'block';
    current += 1;
 });
 prevBtnSec.addEventListener('click', function(){
    slidePage.style.marginLeft = '0';
 });
 prevBtnThir.addEventListener('click', function(){
    slidePage.style.marginLeft = '-17%';
 });
 prevBtnFour.addEventListener('click', function(){
    slidePage.style.marginLeft = '-34%';
 });
 prevBtnFif.addEventListener('click', function(){
    slidePage.style.marginLeft = '-51%';
 });
