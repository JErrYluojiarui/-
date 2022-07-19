window.addEventListener('mousemove',(e)=>{
    let p = (100-e.clientX/window.innerWidth*100);
    document.querySelector('.sun').style.clipPath = `inset(0px ${p}% 0px 0px)`
    console.log(p);
});