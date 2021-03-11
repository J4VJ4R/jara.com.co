let menu = document.querySelector('.js-menu-on');
let headerMenuMobile = $('.js-header-nav');
let i = 0;
let foo = document.querySelectorAll('.js-editable');
let testarr = [];

// show
let foo2 = localStorage.getItem('key951');
foo2 = JSON.parse(foo2);
if (foo2) {
  Array.from(foo).forEach(function (test) {
    test.innerHTML = foo2[i];
    i++;
  });
}
//event click change to x the menu hamburguer
menu.addEventListener('click', () => {
  menu.classList.toggle('active')
});

//show menu header white with tab
$(document).ready(function () {
  $('.js-brand-menu-on').click(function () {
    headerMenuMobile.toggleClass('header__section--light');
  });
});

//slider one
let slider = document.querySelector(".js-slider-content")
let sliderIndividual = document.querySelectorAll(".js-content-slider-one")
let counter = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
})
setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + (-width * counter) + "px)";
  slider.style.transition = "transform .7s";
  counter++;

  if (counter == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform .7s";
      counter = 1;
    }, 1500)
  }
}

//slider two with jquery
$(document).ready(function () {
  let imgItems = $('.js-slider section').length;
  let imgPos = 1;

  for (i = 1; i <= imgItems; i++) {
    $('.js-pagination').append('<li class="pagination__item"><span class="icon-circle"></span></li>');
  }
  $('.js-slider .js-content-slider').hide();
  $('.js-slider .js-content-slider:first').show();
  $('.js-pagination li:first').css({
    'color': '#2ec5ce'
  });

  //FUNCTIONS ********************************************

  $('.js-pagination li').click(pagination);
  setInterval(function () {
    nextSlider();
  }, 3000);

  function pagination() {
    let = paginationPosition = $(this).index() + 1;
    $('.js-slider .js-content-slider').hide();
    $('.js-slider .js-content-slider:nth-child(' + paginationPosition + ')').fadeIn();

    $('.js-pagination li').css({
      'color': '#2ec5ce'
    });
    $(this).css({
      'color': 'white'
    });
  }

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    $('.js-slider .js-content-slider').hide();
    $('.js-slider .js-content-slider:nth-child(' + imgPos + ')').fadeIn();
    $('.js-pagination li').css({
      'color': '#2ec5ce'
    });
    $('.js-pagination li:nth-child(' + imgPos + ')').css({
      'color': 'white'
    });
  }
});

getLocalStorage();

function getLocalStorage() {
  if (localStorage.getItem("inputBox1")) {

  } else {
    console.log("not found")
  }
}

hotkeys('ctrl+k', function (event, handler) {
  switch (handler.key) {
    case 'ctrl+k':
      buttonSave();
      break;
    default:
      alert(event);
  }
});
//function to create array of data
function buttonSave() {
  document.getElementById("js-button").style.display = "block";
  Array.from(foo).forEach(function (test) {
    test.contentEditable = true;
    $('.js-editable').addClass('border-box')
  });

}
$('#js-button').on("click", function () {

  Array.from(foo).forEach(function (test) {
    testarr.push(test.textContent)
  });
  testarr.forEach(function () {
    localStorage.setItem('key951', JSON.stringify(testarr));
  })
  document.getElementById("js-button").style.display = "none";
  location.reload();

})