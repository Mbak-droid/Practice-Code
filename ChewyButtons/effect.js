$("document").ready(function(){
$("#btnA").click(function(){
    $("#img1").animate({
        left:'150px',
        opacity:'1',
        height:'600px',
        width:'500px',
    },2000);
})
$("#btn1").click(function(){
    $("#img1").hide(2000);
})
$("#btn2").click(function(){
    $("#img1").show(500);
})
$("#btn3").click(function(){
    $("#img1").toggle();
})
$("#btn4").click(function(){
    $("#img1").fadeIn();
})
$("#btn5").click(function(){
    $("#img1").fadeOut();
})
$("#btn6").click(function(){
    $("#img1").fadeToggle();
})
$("#btn7").click(function(){
    $("#img1").slideUp(3000);
})
$("#btn8").click(function(){
    $("#img1").slideDown(3000);
})
$("#btn9").click(function(){
    $("#img1").slideToggle(3000);
})
$("#btn10").click(function(){
    $("#img1").stop();
})
$("div").click(function(){
    alert('Hi there!');
 });
});