$(document).ready(function (){
    $('.accordeon__item_triger').click(function(){
    $(this).next('.accordeon__item_content').slideToggle();
    });
      });