
let text1 = document.querySelector('.circle-1');
let text2 = document.querySelector('.circle-2');
let text3 = document.querySelector('.circle-3');


function DrawArc(color){
    
    this.color = color;
    
this.draw = function(x_pos, y_pos, rad, startAngle, endAngle){
        ctx2.strokeStyle = this.color || "grey";
        ctx2.lineWidth = 0.9*vw;
        
        ctx2.beginPath();
        ctx2.arc(x_pos, y_pos, rad, (Math.PI/180) * startAngle, (Math.PI/180) * endAngle);
        ctx2.stroke();
        ctx2.closePath();
        
return this;
}



};
DrawArc.prototype.getRadians=(degrees)=>{ return (Math.PI/180)*degrees; };

let arc1 = new DrawArc(),
    arc1_load = new DrawArc('rgb(0, 238, 255)'); //rgb(0, 255, 128) -- 'rgb(0, 238, 255)'

let arc2 = new DrawArc(),
    arc2_load = new DrawArc('rgb(0, 238, 255)');

let arc3 = new DrawArc(),
    arc3_load = new DrawArc('rgb(0, 238, 255)');





let angle = -90,
   angle2 = -90,
   angle3 = -90,
    flag1 = false,
    flag2 = false,
    flag3 = false;




    

    function angleAnim(){ 
        if(flag1){ if(angle<275){ angle+=10; }else{ angle=275; css_anim_text.anim(); }};
        if(flag2){ if(angle2<275){ angle2+=10; }else{ angle2=275; js_anim_text.anim(); }}; 
        if(flag3){ if(angle3<275){ angle3+=10; }else{ angle3=275; textanim(); }}; 

    };


text1.onmouseover = function(){ flag1 = true };
text2.onmouseover = function(){ flag2 = true };
text3.onmouseover = function(){ flag3 = true };





drawExp();
function drawExp(){
    ctx2.clearRect(0, 0, cnv2.width, cnv2.height);
    
    
    // ctx2.strokeStyle = "grey";
    // ctx2.lineWidth = 10;
    // ctx2.beginPath();
    // ctx2.arc(10*vw, 10*vw, 10*vw, 0,  Math.PI*2);
    // ctx2.stroke();
    // ctx2.closePath();
    
        
    
    arc1.draw(20*vw, 10*vw, 8*vw, 0, 360);
    arc1_load.draw(20*vw, 10*vw, 8*vw, -90, angle);

    arc2.draw(20*vw, 35*vw, 8*vw, 0, 360);
    arc2_load.draw(20*vw, 35*vw, 8*vw, -90, angle2);

    arc3.draw(20*vw, 60*vw, 8*vw, 0, 360);
    arc3_load.draw(20*vw, 60*vw, 8*vw, -90, angle3);


    
    angleAnim();


    requestAnimationFrame(drawExp)
}


const css_anim = document.getElementById('css_anim');
const js_anim = document.getElementById('js_anim');
const php_anim = document.getElementById('php_anim');
let num = 0,
    time;
function textanim(){
    if(num > 79){
        clearTimeout(time);
        return;
    }
    num++;
    php_anim.innerHTML = num + "%";
   time = setTimeout(textanim, 60);
}

function TextAnim(DOM_element){
    let text = DOM_element;

    let num = 0,
    time;

    this.anim = function(){
        if(num > 99){
            clearTimeout(time);
            return;
        }
    num++;
    text.innerHTML = num + "%";
    time = setTimeout(this.anim , 60);
    }
    
}


let css_anim_text = new TextAnim(css_anim);
let js_anim_text = new TextAnim(js_anim);
let php_anim_text = new TextAnim(php_anim);



window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
    
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight/2;

    cnv2.width = window.innerWidth/2;
    cnv2.height = page_content.offsetHeight; 

    

    vw = window.innerWidth/100;
    vh = window.innerHeight/100;

    

};