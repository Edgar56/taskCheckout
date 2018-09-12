var validator = new FormValidator('checkout-form', [
 {
    name: 'checkout[email]',
    rules: 'required|valid_email'
}, 

{
    name: 'checkout[shipping_address][first_name]',
    rules: 'required'
},
{
    name: 'checkout[shipping_address][last_name]',
    rules: 'required'
},
{
    name: 'checkout[shipping_address][address1]',
    rules: 'required'
}, 
{
    name: 'checkout[shipping_address][city]',
    rules: 'required'
},  
{
    name: 'checkout[shipping_address][zip]',
    rules: 'required'
},  
{
    name: 'cc_number',
    rules: 'required|numeric'
},  
{
    name: 'cc_name',
    rules: 'required'
},  
{
    name: 'cc_expiry',
    rules: 'required'
},  
{
    name: 'cc_verification_value',
    rules: 'required|numeric'
}

], function(errors, event) {
	$('.error').removeClass('error');
    if (errors.length > 0) {
        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
            var element_id = errors[i].id;
            
            if (element_id == 'cc_number' || element_id == 'cc_name' || element_id == 'cc_expiry' || element_id == 'cc_verification_value') {
	            console.log($('#'+element_id).attr('value'));
	            $('#'+element_id).parents('.field__input--iframe-container').addClass('error');
	            
            }
            else {
	            
           	 	$('#'+element_id).addClass('error');
	            
            }
            
            
        } 
    }  
});



/*

var validator = new FormValidator('checkout-form', [
 {
    name: 'email',
    rules: 'required|valid_email'
}, 
{
    name: 'name',
    rules: 'required'
}, 
{
    name: 'message',
    rules: 'required'
}
], function(errors, event) {
	$('.error').removeClass('error');
    if (errors.length > 0) {
        for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
            var element_id = errors[i].id;
            $('#'+element_id).addClass('error');
        }
        
    }  else {
	    var serializedData = $('#contact-us').serialize();
		$.post('sendmail.php', serializedData, function(data) {
			if (data == 'true') {
			
				$('input.form').val('');
				$('textarea.form').val('');
				$('#good-message').removeClass('not-visible-message').addClass('visible-message').hide().fadeIn(1500);
			}
 			else {
				$('#bad-message').removeClass('not-visible-message').addClass('visible-message');
			}
		});
		event.preventDefault();
     }
});
*/