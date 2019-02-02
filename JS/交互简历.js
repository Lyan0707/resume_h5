var btn = document.getElementById('btn'); 
var audio = document.getElementById('audio');

btn.onclick=function(){
    if(btn.className=='btn rotate'){
        btn.className='btn rotate on';
        audio.pause();
    }else{
        btn.className='btn rotate';
        audio.play();
    }  
}

// 音乐播放

document.addEventListener('WeixinJSBridgeReady', function () {
    audio.play()
})


let section = document.querySelectorAll(".main-page");

document.ontouchstart = function (e) {

    this.startY = e.touches[0].pageY;
}
document.ontouchmove = function(e){
    
    this.moveY = e.touches[0].pageY - this.startY;
    console.log(this.moveY)
}
function fn1(){
    for(let i=0;i<section.length;i++){
        section[i].className='main-page';
    }
}
var i=0;
document.ontouchend=function(e){
        fn1();
        if(this.moveY>50){
            i--;
            if(i<0){
                i=0;
            }

        
        }else if(this.moveY<-50){
            i++;
            if(i>=section.length){
                i=0;
            }
        }
    
        section[i].className='main-page current';
    
}

 
 

