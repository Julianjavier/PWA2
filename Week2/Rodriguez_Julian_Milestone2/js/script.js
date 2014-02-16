//Particle
$(document).ready(function() {
    $("#snowfall").Snowfall({
        amount: 15 //Amount of particles
    });
});


//image effects
$(document).ready(function(){
    $('.timg').mouseover(function(){
        $(this).fadeTo(300,1);
    });
    $('.timg').mouseout(function(){
        $(this).fadeTo(300,.3);
    });

});

//subContent

$(document).ready(function(){

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

});

//login/Registration

$(document).ready(function(){

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


});