function onSiteAppear(){
    var introSlogan = document.querySelector('.introSlogan')
    let introPosition = introSlogan.getBoundingClientRect().top;
    console.log(introPosition);
}

onSiteAppear();
console.log('Alex compuetr')