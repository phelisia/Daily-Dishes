$(document).ready(function(){
   $('button#order').click(function(){
    $('form#form').show();
   })



    });
  function total(){
    var a =parseInt($("#breakfast").val());
    var b=parseInt($("#lunch").val());
    var c=parseInt($("#dinner").val());
    var d=parseInt($("#drink").val());
    var e =(a+b+c+d);
    document.getElementById('submit-order').addEventListener('click',function(){
    alert("Hello we have received your order and we are working on it. Thank You");
    });return 0;
}total();
