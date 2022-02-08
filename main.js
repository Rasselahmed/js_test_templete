$(document).ready(function () {
    $('#btn1').click(function () {
        $('.displayarea h1:eq(0)').css('background', 'red');
        $('.displayarea h1:gt(0)').css('background', '');


    });
    $('#btn2').click(function () {
        $('.displayarea h1:eq(1)').css('background', 'green');
        $('.displayarea h1:gt(1),.displayarea h1:lt(1) ').css('background', '');
    });
    $('#btn3').click(function () {
        $('.displayarea h1:eq(2)').css('background', 'yellow');
        $('.displayarea h1:gt(2),.displayarea h1:lt(2) ').css('background', '');
    });
    $('#btn4').click(function () {
        $('.displayarea h1:eq(3)').css('background', 'salmon');
        $('.displayarea h1:gt(3),.displayarea h1:lt(3) ').css('background', '');
    });

});