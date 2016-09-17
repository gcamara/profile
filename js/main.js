(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
	    var scrolled = $(window).scrollTop();
	    $('.jumbo-bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
	    parallax();
	});
	
	var trabalhoSO = $('#trabalho-so');
	var trabalhoOWL = $('#trabalho-owl');

	trabalhoSO.on('click', function() {
		window.open('/so');
	})

	trabalhoOWL.on('click', function() {
		window.open('https://play.google.com/store/apps/details?id=br.owl.activity&hl=pt_BR');
	});

	var botoes = ['sobre', 'projetos', 'certificacoes'];
	botoes.forEach(function(botao) {
		$('#'+botao+'-menu').click(function () {
			$('html, body').animate({
				scrollTop: $('#'+botao).offset().top
			}, 2000);
		});
	});

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.7&appId=547203648709165";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


})();