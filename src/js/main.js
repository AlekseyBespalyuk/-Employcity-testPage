// раскрывает/закрывает инпут и очищает его
$(document).ready(function() {
	$('.search__btn').click(function(){
		if ($(this).hasClass('active-btn')) {
			$('.search__input').removeClass('active').addClass('re-active').val('');
		} else {
			$('.search__input').removeClass('re-active').addClass('active').focus();
		}
		$(this).toggleClass('active-btn')
	});
});