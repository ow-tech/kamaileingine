// index.html User InterFace


// nav dropdown
$(function(){
    $('.navis li').hover(
        function(){
            $('ul.child', this).slideDown(500);
        },
        // function (){
        //     $('ul.child', this).fadeOut(300);
        // },
    )
});

// slider
// set interval
    // animate margin-left
    // if it's last slide, got to position 1 (0px);
// listen for mouserover and pause
// rsume on mouserelease
// syntax
// let slideInterval = setInterval(function(){

// }, 1000)
// $(selector).animate(obj, time, callback)
$(function(){
    let slideWidth = 500;
    let animationSpeed = 3000;
    let pause = 5000;
    let currentSlide = 1;
    


    // cache DOM
    let $slider = $('#slider');
    let $sliderContainer = $slider.find('.slides');
    let $slides = $sliderContainer.find('.slide');

    let slideInterval;
    function startSlider(){
        slideInterval = setInterval(function(){
            $sliderContainer.animate({'margin-left': '-='+slideWidth}, animationSpeed, function(){
                currentSlide ++;
                if (currentSlide == $slides.length){
                    currentSlide = 1;
                    $sliderContainer.css('margin-left', 0)
                }
            });

    }, pause);
    }
    function pauseSlider(){
        clearInterval(interval);

    }

    // listen for mouseengter and pause
    // resume on mouserelease
    $slider.on('mousenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();
});

//  slogan toggle

$(function(){
    $('.introSlogan p').slideDown(10000);
});




// about us user interface
$(function(){
    $('.pus').fadeIn(5000)
})

// mission vision core
$(function(){
    $('.rus div h6', this).click( function(){

        $('.rus div p').slideDown(4000)
        $('.rus div p').toggle(6500);

    })

});
