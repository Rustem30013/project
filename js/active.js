window.addEventListener('DOMContentLoaded', function() {
	'use strict';

  let introContent = document.querySelector('#introContent'),
      introDescription = document.querySelectorAll('.intro__description'),
      introSocial = document.querySelectorAll('.intro__social'),
      introItem = document.querySelectorAll('.intro__item');


// Скрытие всех элементов с социалками
    function hideSocial(a){
      for(let i = a; i < introSocial.length; i++){
      introSocial[i].classList.add('intro__social-fade');
      }
    }
    hideSocial(0);
//скрытие элемента с именем 
    function showDescr(b) {
      introDescription[b].classList.add('intro__description-up');
      introSocial[b].classList.remove('intro__social-fade');
      introSocial[b].classList.add('intro__social-hide');
      introDescription[b].classList.remove('intro__description-down');

  }
//проаверка на каком элементе сработало событие
  introContent.addEventListener('mouseover', function(event){
    let target = event.target;
    if(target && target.classList.contains('intro__item')) {
        for(let i =0; i < introDescription.length; i++ ) {
            if (target == introItem[i]) {
                hideSocial(0);
                showDescr(i);
                break;
            }
        }
    }
});


//выход элемента
function hideDescr(b){
  introDescription[b].classList.remove('intro__description-up');
  introDescription[b].classList.add('intro__description-down');
  introSocial[b].classList.add('intro__social-fade');
  introSocial[b].classList.remove('intro__social-hide');
}
introContent.addEventListener('mouseout', function(event){
  let target = event.target;
  if(target && target.classList.contains('intro__item')) {
    for(let i =0; i < introDescription.length; i++ ) {
        if (target == introItem[i]) {
            hideSocial(0);
            hideDescr(i);
            break;
        }
    }
}
});



  // let introContent = document.querySelector('#introContent');
  // let introSocial = document.querySelector('#introSocial') ;

  // introContent.addEventListener('mouseover', function(event) {
  //   let target = event.target;
  //   console.log(target);
  //   while (target != this) {
  //     if (target.tagName == 'DIV') {
  //       show(target);
  //       return;
  //     }
  //     target = target.parentNode;
  //   }
  // });

  // introContent.addEventListener('mouseout', function(event) {
  //   let target = event.target;
  //   console.log(target);
  //   while (target != this) {
  //     if (target.contains == '.intro__social') {
  //       fade(target);
  //       return;
  //     }
  //     target = target.parentNode;
  //   }
  // });

  // function show(node) {
  //   if (introSocial) {
  //     introSocial.classList.remove('fade');
  //   }
  //   introSocial = node;
  //   introSocial.classList.add('show');
  // }
  // function fade(node) {
  //   if (introSocial) {
  //     introSocial.classList.remove('show');
  //   }
  //   introSocial = node;
  //   introSocial.classList.add('fade');
  // }

  // introContent.addEventListener('mouseover', function (event){
  //   let target = event.target;
  //   console.log(target);
  //   if(target && target.classList.contains('intro__img-item')){
  //     let intro__description = document.querySelectorAll('.intro__description');
  //     intro__description.forEach(function(item){
  //       item.classList.add('show');
  //     });

  //   };
  // });
  // intro__content.addEventListener('mouseout', function(event){
  //   let target = event.target;
  //   if(target && target.classList.contains('intro__description')){
  //     let intro__social = document.querySelectorAll('.intro__social');
  //     intro__social.forEach(function(item){
  //       item.classList.add('fade');
  //       item.classList.remove('show');
  //     });
  //   };
  // });

});