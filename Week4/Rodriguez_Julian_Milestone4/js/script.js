
$(document).ready(function() {

//sudo .live function
    jQuery.fn.live = function( types, data, fn ) {
        jQuery( this.context ).on( types, this.selector, data, fn ); return this;
    };


//Particle

    $("#snowfall").Snowfall({
        amount: 15 //Amount of particles
    });


//News Ticker

$(function () {
    $('#js-news').ticker();
    });


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
        $('.WHMsubC').toggle(500)

    });

    $('#BKMbtn').click(function(){
        $('.BKMsubC').toggle(500)

    });

    $('#WARbtn').click(function(){
        $('.WARsubC').toggle(500)

    });

    $('#MNKbtn').click(function(){
        $('.MNKsubC').toggle(500)

    });

    $('#DRGbtn').click(function(){
        $('.DRGsubC').toggle(500)

    });

    $('#PALbtn').click(function(){
        $('.PALsubC').toggle(500)

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

//search-list

    $('#search-list').hide()

    $('#simple-search').on('keyup', function(e){
        console.log(this.value.length);

        if(this.value.length > 0){

            $('#search-list').show();

            $('#search-list li').hide().filter(function(){
                console.log('run');
                return $(this).text().toLowerCase().indexOf($('#simple-search').val().toLowerCase()) !=-1;
            }).show();
        }
        else{
            $('#search-list').hide();
        }

    });



});//End Fuctions
