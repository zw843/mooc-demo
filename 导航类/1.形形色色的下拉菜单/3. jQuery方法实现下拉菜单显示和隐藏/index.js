$(function(){
    $(".menu").mouseover(function(){
        $(this).children("ul").show()
    })
    $(".menu").mouseout(function(){
        $(this).children("ul").hide()
    })
}) 