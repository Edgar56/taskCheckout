$(document).ready(function() {
	
	$('#checkout_shipping_address_country').html(function(){
		
		var cntrs = '';
		for (var cnt in window.Countries) {
		  
		  cntrs = cntrs + '<option value="'+window.Countries[cnt]['name']+'" country_id="'+cnt+'" >'+window.Countries[cnt]['name']+'</option>';
		  
		}

		return cntrs;
		
	});
	
	$('#checkout_shipping_address_country option[country_id=231]').prop('selected', true);
	
	$('#checkout_shipping_address_province').html(function(){
		
		var stts = '';
		for (var stt in window.Countries[231]['states']) {
		  
		  stts = stts + '<option value="'+window.Countries[231]['states'][stt]+'">'+window.Countries[231]['states'][stt]+'</option>';
		  
		}

		return stts;
		
	});
	
	$(document).on('change', '#checkout_shipping_address_country', function() {
		
		var c_id = $('#checkout_shipping_address_country option:selected').attr('country_id');
	
		var stts = '';
	
		for (var stt in window.Countries[c_id]['states']) {
		  
		  stts = stts + '<option value="'+window.Countries[c_id]['states'][stt]+'" >'+window.Countries[c_id]['states'][stt]+'</option>';
		  
		}
		
		$('#checkout_shipping_address_province').html(stts);
		
		
	});

	
	var cleave = new Cleave('.input-cc-date', {
	    date: true,
		datePattern: ['m', 'y']
	});
	
	var cleave2 = new Cleave('.input-cc-number', {
	    creditCard: true
	});
	
	var cleave2 = new Cleave('.input-cc-cvv', {
	    numericOnly: true,
	    blocks: [3]
	});
	
	$(document).on('click', '#pay-creditcard', function(){
		
	    if ($(this).is(':checked'))
	    {
	      $('#pay-paypal').prop('checked', false);
	      $('.content-box__row--secondary.creditcard').removeClass('hidden');
	      $('.content-box__row--secondary.paypal').addClass('hidden');
	      
	    }
		
	});
	
	$(document).on('click', '#pay-paypal', function(){
		
	    if ($(this).is(':checked'))
	    {
	      
	      $('#pay-creditcard').prop('checked', false);
	      $('.content-box__row--secondary.paypal').removeClass('hidden');
	      $('.content-box__row--secondary.creditcard').addClass('hidden');
	      
	    }
		
	});
	
});