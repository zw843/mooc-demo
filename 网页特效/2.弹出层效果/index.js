window.onload = function(){
    //显示登录框和遮盖层
var login = document.getElementById("login");
var cover = document.getElementById("cover");
//点击按钮 弹出
var link = document.getElementById("link");
link.onclick = function(){
    login.style.display = 'block';
    cover.style.display = 'block';
    return false;
}
//点击关闭
var closeBtn = document.getElementById("closeBtn")
closeBtn.onclick = function(){
        login.style.display = 'none';
        cover.display = 'none'
}
//拖拽
var title =document.getElementById("title");
title.onmousedown = function(e){
    //按下鼠标后 鼠标在盒子位置
    var x = e.pageX - login.offsetLeft;
    var y = e.pageY - login.offsetTop;

    document.onmousemove = function(e){
        //鼠标移动时 盒子坐标
        var loginX = e.pageX - x;
        var loginY = e.pageY - y;

        login.style.left = loginX + 300 + 'px';
        login.style.top = loginY - 150 + 'px';
    }
}
document.onmouseup = function(){
    //移除事件
    document.onmousemove = null;
}
}