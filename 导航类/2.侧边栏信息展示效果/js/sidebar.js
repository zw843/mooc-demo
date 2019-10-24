void function(){

    var Menubar = function(){
        this.el = document.querySelector('#sidebar ul');
        this.state = 'allClosed';//hasOpened
        this.el.addEventListener('click',function(e){
            //阻止向上传播
            e.stopPropagation();
        });
        var that = this;
        this.nowOpenedMenu =  null;
        this.menuList = document.querySelectorAll('#sidebar ul>li')
        for(var i = 0; i < this.menuList.length;i++){
            this.menuList[i].addEventListener('click',function(e){
                //获得内容区域元素
                var menuContent = document.getElementById(e.currentTarget.id + '_content');
                console.log(menuContent);
                if(that.state === 'allClosed'){
                    console.log('打开' + menuContent.id)
                    that.state = 'hasOpened';
                    that.nowOpenedMenu = menuContent;
                }else{
                    console.log('关闭' + that.nowOpenedMenu.id);
                    that.nowOpenedMenu = menuContent;
                } 
            })
        }
    }

var Sidebar = function(eId,closeBarId){
    console.log(this)
    this.state = 'opened';
    this.el = document.getElementById(eId|| 'sidebar');
    this.closeBarEl = document.getElementById(closeBarId||'closeBar')
    var that = this;
    this.menubar = new Menubar();
    this.el.addEventListener('click',function(event){
        if(event.target !==  that.el){
            console.log( that)
             that.triggerSwich();
        }
    })
};
Sidebar.prototype.close =  function(){
    console.log('关闭')
    this.el.className = 'sidebar-move-lfet';
    this.closeBarEl.className = 'closeBar-move-right';
    this.state = 'closed'
};
Sidebar.prototype.open = function(){
    console.log('打开')
    this.state = 'opened'
};
Sidebar.prototype.triggerSwich = function(){
    if(this.state === 'opened'){
        this.close();
    }else{
        this.open();
    }
};
var sidebar = new Sidebar();

}();