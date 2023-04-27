$(document).ready(function () {
  //PROGRESS BAR A
  let containerA = document.getElementById("circleA");
  let circleA = new ProgressBar.Circle(containerA, {
    color: "#64DAf9",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 60);

      circle.setText(value);
    },
  });

  //B
  let containerB = document.getElementById("circleB");
  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64DAf9",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 72);

      circle.setText(value);
    },
  });

  //C
  let containerC = document.getElementById("circleC");
  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64DAf9",
    strokeWidth: 8,
    duration: 1800,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 12);

      circle.setText(value);
    },
  });

  //D
  let containerD = document.getElementById("circleD");
  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64DAf9",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#AAA" },
    to: { color: "#65DAF9" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() * 5);

      circle.setText(value);
    },
  });
  //INICIO DE ANIMAÇAO DO CIRCULO
  let dataOffset = $("#data-area").offset();
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();

    if (scroll > dataOffset.top - 800 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  //PARALLAX
  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "/assets/img/cidadeparallax.png" });
    $('#pattern-img').parallax({imageSrc: "/assets/img/pattern.png"});
  }, 200);

  //FILTRO PORTFOLIO
  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn'){
        eachBoxes('dsg',boxes);
    }else if(type== 'dev-btn'){
        eachBoxes('dev',boxes);
    }else if(type=='seo-btn'){
        eachBoxes('seo',boxes);
    } else{
        eachBoxes('all',boxes);
    }
  });

  function eachBoxes(type, boxes){
    if(type= 'all'){
        $(boxes).fadeIn();
    } else{
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('speed');
            }else{
                $(this).fadeIn();
            }
        })
    }
  }

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  //SCROLL

  let navBtn = $('.nav-item');

  let sliderSection = $('#carouselExampleIndicators');
  let especialidadesSection = $('.services-area');
  let timeSection = $('#team-area');
  let conhecaSection = $('#portfolio-area');
  let contatoSection = $('#contact-area');
  let sobreSection = $('#about-area');

  let scrollTo = '';

  $(navBtn).click(function(){
    let btnId = $(this).attr('id');
    

    if(btnId == 'home-agencia') {
      scrollTo = sobreSection;
    } else if(btnId == 'home-servicos') {
      scrollTo = especialidadesSection;
    } else if(btnId == 'home-time') {
      scrollTo = timeSection;
    } else if(btnId == 'home-projetos') {
      scrollTo = conhecaSection;
    } else if(btnId == 'home-contato') {
      scrollTo = contatoSection;
    } else {
      scrollTo = sliderSection;
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
  }, 1500);
  
  })

});
