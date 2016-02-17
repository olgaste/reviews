$(document).ready(function() {
	tinymce.init({ selector:'textarea.editor' });
	$('.add-review').on('click', function() {
	$('.simple-review-form').show();	
	});
	$('.review_form').submit(function() {
		
		var now = new Date();
		var review_data = {
			username:"",
			content:"",
			date: now.getDate() + "." + (now.getMonth()+1) + "." + now.getFullYear(),
			email:"",
		};

		review_data.username = $("input[name='name']").val(); 
		review_data.email = $("input[name='email']").val(); 
		review_data.content = $.trim(tinymce.get('editor-content').getContent());
		
		var review_clone = $('.review-template').clone();
		review_clone.find('.review-date').html(review_data.date);
		review_clone.find('.review-username').html('Добавил:' + ' ' + review_data.username);
		review_clone.find('.review-email').html(review_data.email);
		review_clone.find('.review-content').html(review_data.content);
		review_clone.removeClass('review_clone');

		$('.review-container').append(review_clone);
		$('.review_form').trigger('reset');
		$('.simple-review-form').hide();

		return false;
	});
});
