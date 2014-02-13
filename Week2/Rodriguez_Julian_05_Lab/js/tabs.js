
$(document).ready(function(){
    $('.module').hide({height:100},1000);
    $('#blog').before('<ul class="tabing"></ul>');
    $('.module').each(function(){
        $('.tabing').append('<li class="listing"><h2>'+$(this).attr('id')+'</h2></li>');
    });
    $('.listing').click(function(){
        if($(this).find('h2').html()=='listing active'){
            $(this).removeClass('active');
        }
        else{

            $(this).addClass('active');
            if($(this).find('h2').html()==='blog'){
                $('#blog').show();
                $('#specials').hide();
            }

            else if($(this).find('h2').html()=='specials'){
                $('#specials').show();
                $('#blog').hide();
            }
        };
    });

});