

const page_content = document.querySelector('.page_content');


// measure
let vw = window.innerWidth/100;
let vh = window.innerHeight/100;

// Canvas plus
const cnv = document.getElementById('plus'),
      ctx = cnv.getContext('2d');
cnv.width = window.innerWidth;
cnv.height = window.innerHeight/2;
cnv.style.background = 'transparent';

// Canvas explain
const cnv2 = document.getElementById('about_section'),
      ctx2 = cnv2.getContext('2d');
cnv2.width = window.innerWidth/2;
cnv2.height = page_content.offsetHeight; 
cnv2.style.background = 'transparent';



// random bacground

let bg_arr = ['kora', 'les', 'tree', 'wasteland'];
let bg_random = ()=>{ return Math.floor(Math.random() * (4 - 0)) + 0; }
console.log(bg_arr[bg_random()]);
document.body.style.backgroundImage = "url(C:/Users/thepo/Desktop/resume/img/"+bg_arr[bg_random()]+".jpg)";
// document.body.style.backgroundImage = `url(C:/Users/thepo/Desktop/resume/img/${bg_arr[bg_random()]}.jpg)`;

