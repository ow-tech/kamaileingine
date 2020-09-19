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
                    currentSlide = 0;
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

        $('.rus div p').slideDown(9000)
        $('div.footerus').css('margin-top','4.4%'),
        $('.rus div p').toggle(100000);

    })

});
//  nav testing jquery
$.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
// active tab
$('.navis').on('click', 'li', function(){
    $('.navis li.active').removeClass('active');
    $(this).addClass('active');
});

// contact paje script

function sendEmail(){
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let phone =document.getElementById("phone").value;
    let body = document.getElementById('message').value;
    let inputs = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea')
    
    if (email ==="" && name ===""){
        alert('You need to fill your Phone No. and atleast name or Email. Ensure Your Message Is filled Too and Send Again.')
    }
    else if(phone ==='' && body ===""){
        alert('You need to fill your Phone No. and atleast name or Email. Ensure Your Message Is filled Too and Send Again.')
    }
    else{
        Email.send({
            SecureToken: "917c472f-5491-4dbe-b9ad-8aaeea64b2bc",
            To : 'wasaabitechdesign@gmail.com',
            From : "wasaabitechdesign@gmail.com",
            Subject : "pontential Client's/Partner's Name : "+ name +" phone : "+phone +" email : "+ email,
            Body : body,
            }).then(
                message => 
                alert('Message Sent'),
                inputs.forEach((input, textarea) => input.value ='', textarea.value='')
                )
    }
};
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus");}
}

inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
}); 