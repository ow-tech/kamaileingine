
// console.log('Alex compuetr')
// function onSiteAppear(){
//     var introSlogan = document.querySelector('.introSlogan');
//     var introPostion = introSlogan.get;
//     console.log(introSlogan);

// }
// onSiteAppear()

$(function(){
    $('.navis li').hover(
        function(){
            $('ul.child', this).slideDown(500);
        },
        function(){
            $('ul.child', this).fadeOut(200)
            // $('div.section',this).fadeIn(500)
        },
    );
});
