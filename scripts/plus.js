

function Plus(x_pos, y_pos, speed){
       this.x_pos = x_pos;
       this.y_pos = y_pos;
       this.speed = speed;
       this.opts = {
        w: 5.8*vw,
        h: 1.4*vw,
        balance: ()=>{ return this.opts.w/2 - this.opts.h/2; },
        opacity: 0
    }
this.draw = function(){
ctx.fillStyle = `rgba(137, 255, 74, ${this.opts.opacity})`;
ctx.beginPath();
ctx.fillRect(this.x_pos, this.y_pos, this.opts.w, this.opts.h);
ctx.fillRect(this.x_pos + this.opts.balance(), this.y_pos - this.opts.balance(), this.opts.h, this.opts.w);
ctx.closePath();

return this;

}
    
    this.anim=()=>{
        this.y_pos-=this.speed||0.5;
        this.opts.opacity < 1 ? this.opts.opacity+=0.01: this.opts.opacity = 1;
        this.y_pos <= 40 ? this.opts.opacity-=0.02: false;
    }
};


function randSeconds(){
    return Math.random()*(6000 - 1000) + 1000;
};

function randY(){ return Math.round(Math.random() * ( 300 - 80)) + 80;};
function randX(){ return Math.round(Math.random() * ( cnv.width - 800)) + 500;};
function randSpeed(){ return ((Math.random() * ( 1.5 - 0.4)) + 0.4).toFixed(1)};


let plus1 = new Plus(randX(), randY());

let arr = {};
let count = 0;
arr[0] = new Plus(randX(), randY(), randSpeed());

setCount();
function setCount(){

    let seconds = randSeconds();
    if(count >= 5){ count=0 };
        ++count;
        arr[count] = new Plus(randX(), randY(), randSpeed());
        // console.log( randSpeed() );
        // console.log(arr[count].x_pos + "-----" + count);
        
    setTimeout(setCount, seconds);
};



cnvDraw();
function cnvDraw(){
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    
    for(key in arr){
        arr[key].draw().anim();
    }

    
    // let i = count;
    // arr[i].draw().anim();
    
    
  
    requestAnimationFrame(cnvDraw);
};
