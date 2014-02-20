
$(document).ready(function() {

//Particle

    $("#snowfall").Snowfall({
        amount: 15 //Amount of particles
    });


//News Ticker

//$(function () {
//    $('#js-news').ticker();
//    });


//Carusel Slider

    $('#slidorion').slidorion({
        speed: 1000,
        interval: 4000,
        effect: 'slideLeft'
    });



//image effects

    $('.timg').mouseover(function(){
        $(this).fadeTo(300,1);
    });
    $('.timg').mouseout(function(){
        $(this).fadeTo(300,.3);
    });



//subContent



    $('.WHMsubC  , .BKMsubC , .WARsubC , .MNKsubC , .PALsubC , .DRGsubC').hide();

    $('#WHMbtn').click(function(){
        $('.WHMsubC').toggle(

            function(){
                $('.WHMsubC').slideDown(500)
            });

    });

    $('#BKMbtn').click(function(){
        $('.BKMsubC').toggle(

            function(){
                $('.BKMsubC').slideDown(500)
            });

    });

    $('#WARbtn').click(function(){
        $('.WARsubC').toggle(

            function(){
                $('.WARsubC').slideDown(500)
            });

    });

    $('#MNKbtn').click(function(){
        $('.MNKsubC').toggle(

            function(){
                $('.MNKsubC').slideDown(500)
            });

    });

    $('#DRGbtn').click(function(){
        $('.DRGsubC').toggle(

            function(){
                $('.DRGsubC').slideUp(500)
            });

    });

    $('#PALbtn').click(function(){
        $('.PALsubC').toggle(

            function(){
                $('.PALsubC').slideDown(500)
            });

    });



//login/Registration


    $('.login,.reg').hide();


    $('#login').click(function(){
       $('.login').toggle(

           function(){
               $('.reg').slideUp(500)
               $('.login').slideDown(500)
           });

    });

    $('#registration').click(function(){

        $('.reg').toggle(function(){
            $('.login').slideUp(500)
            $('.reg').slideDown(500)

        });

    });




//Login function:

    $("#logB").click(function(e){
        e.preventDefault();

        var user= $('#user').val();
        var pass= $('#pass').val();

        console.log(user);
        $.ajax({
            url:'xhr/login.php',
            data:{
                    username:user ,
                    password:pass
                 },
            type: 'post',
            dataType:'json',
            success: function(response){

               window.location.assign("admin.html")

                console.log(response);
            }

        });
    });


});//End Fuction
