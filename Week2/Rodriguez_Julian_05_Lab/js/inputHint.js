
$(document).ready(function(){
   $('.input_text').attr('value',$('label').text());
   var textHold=$('label').text();
   $('.input_text').addClass('hint');
   $('.input_text').addClass('hint');
   $('label').remove();
   $('.input_text').focusin(function(){
       $(this).val('');
   });

   $('.input_text').blur(function(){
      if($(this).val()==''){
       $(this).val(textHold);
      }
   });

});