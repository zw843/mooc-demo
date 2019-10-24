window.onload = function(){
    var btn = document.getElementById("btn");
    //获取可视区域高度
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    //滚动条滚动时触发
    window.onscroll = function(){
        var tops = document.documentElement.scrollTop || document.body.scrollTop;
        if(tops >= clientHeight){
            btn.style.display = 'block'
        }else{
            btn.style.display = 'none'
        }
       if(!isTop){
        clearInterval(timer);
       }
       isTop = false;
    }
    btn.onclick = function(){
        timer = setInterval(function(){
            var tops = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-tops / 5);
            document.documentElement.scrollTop = document.body.scrollTop = tops + speed;
            isTop = true;
            if(tops == 0){
                clearInterval(timer);
            }
        },30)
      
    }
}