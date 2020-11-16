$(function () {
  function slider(element, auto = false, pause = 7000) {
    // var auto = true;
    // var pause = 7000;
    // var $this = $(".hero-section-main-container");
    var $this = $(element);
    var slidesCont = $this.children(".slide-main-container");
    var slides = slidesCont.children(".slide");
    var dotsDiv = $this.children(".dots-container");
    var prevSlide = $this.children(".previous-slide-bttn");
    var nextSlide = $this.children(".next-slide-bttn");

    var slidesCount = slides.length;
    console.log(slidesCount);

    var currentSlide = slides.first();
    var currentSlideIndex = 1;

    var autoPlay = null;

    slides.not(":first").css("display", "none");
    currentSlide.addClass("active");

    function fadeNext() {
      currentSlide.removeClass("active").fadeOut(700);

      if (currentSlideIndex == slidesCount) {
        currentSlide = slides.first();
        currentSlide.delay(500).addClass("active").fadeIn(700);
        currentSlideIndex = 1;
      } else {
        currentSlideIndex++;
        currentSlide = currentSlide.next();
        currentSlide.delay(500).addClass("active").fadeIn(700);
      }

      // funkcija za tockite pod slikite
    }

    function fadePrev() {
      currentSlide.removeClass("active").fadeOut(700);

      if (currentSlideIndex == 1) {
        currentSlide = slides.last();
        currentSlide.delay(500).addClass("active").fadeIn(700);
        currentSlideIndex = slidesCount;
      } else {
        currentSlideIndex--;
        currentSlide = currentSlide.prev();
        currentSlide.delay(500).addClass("active").fadeIn(700);
      }
      // funkcija za tockite pod slikite
    }

    function AutoPlay() {
      clearInterval(autoPlay);

      if (auto == true) {
        autoPlay = setInterval(function () {
          fadeNext();
        }, pause);
      }
    }

    $(nextSlide).click(function (e) {
      e.preventDefault();
      fadeNext();
      AutoPlay();
      // console.log("clicked")
    });

    $(prevSlide).click(function (e) {
      e.preventDefault();
      fadePrev();
      AutoPlay();
    });

    AutoPlay();
  };

  slider(".hero-section-main-container", true, 7000);
  
  $(".about-bttn").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-text-container").offset().top},
        'slow');
});

$(".service-bttn").click(function() {
  $('html,body').animate({
      scrollTop: $(".services-section-main-container").offset().top},
      'slow');
});

$(".team-bttn").click(function() {
  $('html,body').animate({
      scrollTop: $(".team-section-main-container").offset().top},
      'slow');
});

$(".mission-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".mission-section-main-container").offset().top},
      'slow');
});

$(".contact-bttn").click(function() {
  $('html,body').animate({
      scrollTop: $(".contact-section-main-container").offset().top},
      'slow');
});

$(".burger-menu i").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").hide();
    $(".close-menu").show();
  });
});

$(".close-menu i").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").show();
    $(".close-menu").hide();
  });
});


$(".about-res").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").show();
    $(".close-menu").hide();
  });
  $('html,body').animate({
    scrollTop: $(".about-text-container").offset().top},
    'slow');
});


$(".service-res").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").show();
    $(".close-menu").hide();
  });
  $('html,body').animate({
    scrollTop: $(".services-section-main-container").offset().top},
    'slow');
});

$(".team-res").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").show();
    $(".close-menu").hide();
  });
  $('html,body').animate({
    scrollTop: $(".team-section-main-container").offset().top},
    'slow');
});

$(".mission-res").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").show();
    $(".close-menu").hide();
  });
  $('html,body').animate({
    scrollTop: $(".mission-section-main-container").offset().top},
    'slow');
});

$(".contact-res").click(function(){
  $(".responsive-menu-container").slideToggle("slow", function(){
    $(".burger-menu").show();
    $(".close-menu").hide();
  });
  $('html,body').animate({
    scrollTop: $(".contact-section-main-container").offset().top},
    'slow');
});



});
