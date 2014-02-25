
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



//admin forms

    $('#playerForm, #groupForm').hide();

    $('#player').click(function(){
        $('#playerForm').toggle(

            function(){
                $('#playerForm').slideDown(500)
            });

    })

    $('#group').click(function(){
        $('#groupForm').toggle(

            function(){
                $('#groupForm').slideDown(500)
            });

    })

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
                $('.DRGsubC').slideDown(500)
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
                if(response.error){
                    console.log("ERROR"+response.error);
                }else{
                    window.location.assign("admin.html")
                }
            }

        });
    });

//Logout function:

    $("#logout").click(function(){
        console.log("IT LIVES")
            $.get("xhr/logout.php",function(){
                window.location.assign("index.html");
            });
    });

//Registration function

    $("#regB").click(function(e){
        e.preventDefault();

        var user= $('#regUser').val();
        var pass= $('#regPass').val();
        var email= $('#email').val();

        console.log(user);
        $.ajax({
            url:'xhr/register.php',
            data:{
                username: user ,
                password: pass ,
                email: email
            },
            type: 'post',
            dataType:'json',
            success: function(response){
                if(responce.error){
                    console.log("ERROR"+response.error);
                }else{
                    window.location.assign("wiki.html")
                }
            }

        });
    });

    $('#serch-list').hide()





});//End Fuctions
