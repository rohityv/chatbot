// jQuery 

$(document).ready(function(){
    $('.li-1').click(function(){
        $('.li1-text').toggle(1000)
    })
    $('.li-2').click(function(){
        $('.li2-text').toggle(1000)
    })
    $('.li-3').click(function(){
        $('.li3-text').toggle(1000)
    })
    $('.li-4').click(function(){
        $('.li4-text').toggle(1000)
    })
})

const popupContainer = document.querySelector('.popup-container')
const logo = document.querySelector('.logo')
const times = document.querySelector('.times')
logo.addEventListener('click', function(){
    popupContainer.style = 'display:inline-block; position:absolute;left:85px; z-index:1;'
})
times.addEventListener('click', function(){
    popupContainer.style.display = 'none'
})