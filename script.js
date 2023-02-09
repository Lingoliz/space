let links = document.querySelectorAll('.destination .content ul li');
let img = document.querySelector('.destination .content img');
let description = document.querySelectorAll('.destination .description');


links.forEach((e,i)=> {
    
    e.addEventListener('click',()=> {
        
        img.src=`${e.dataset.src}`;
        
       links.forEach((ele)=> {
        ele.classList.remove('active')
       })
       description.forEach((ele)=> {
        ele.classList.remove('active');
       })
       description[i].classList.add('active');
       e.classList.add('active');
     
    })
})


let dots = document.querySelectorAll('.crew .dots span');
let show = document.querySelectorAll('.crew .show');
let crwImage = document.querySelector('.crew .content img') ;

dots.forEach((e,i)=> {
    e.addEventListener('click',()=> {

        show.forEach((ele)=> {
            ele.classList.remove('active')
        })

        dots.forEach((ele)=> {
            ele.classList.remove('active')
        })
        e.classList.add('active')

        show[i].classList.add('active');
        e.classList.add('active');
        crwImage.src = `${e.dataset.src}`

    })
})

let teckdots = document.querySelectorAll('.technology .slider span');
let techitems = document.querySelectorAll('.technology .text');
let techImage = document.querySelector('.technology .content img') ;

teckdots.forEach((e,i)=> {
    e.addEventListener('click',()=> {
        techitems.forEach((ele)=> {
            ele.classList.remove('active')
        })

        teckdots.forEach((ele)=> {
            ele.classList.remove('active')
        })

        e.classList.add('active')

        techitems[i].classList.add('active');
        e.classList.add('active');
        techImage.src = `${e.dataset.src}`
    })
})

let burger = document.querySelector('.burger');
let nav = document.querySelector('nav ul');

document.addEventListener('click',(target)=> {
    console.log(target.target.className);
    if (target.target.className == 'burger')
    {
        nav.classList.add('active');
        
    }
    else {
        nav.classList.remove('active');

    }
})