const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active')

    })
}

if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active')

    })
}

if (window.innerWidth < 799) {
    document.classSelector('hero-example').classList.add('hero');
  } else {
    document.classSelector('hero-example').classList.remove('hero');
  }
  