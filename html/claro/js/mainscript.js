function utilidadesJS() { }

utilidadesJS.orietacionImagenes = function (selector, classHorizontal, classVertical, classCuadrada) {
	// ↓↓ Valores por defecto
	if (classHorizontal == undefined) { classHorizontal = 'imagen_horizontal' }
	if (classVertical == undefined) { classVertical = 'imagen_vertical' }
	if (classCuadrada == undefined) { classCuadrada = 'imagen_cuadrada' }
	// ↑↑ Valores por defecto

	var imagenes = document.querySelectorAll(selector);
	if (imagenes[0].tagName == 'IMG') {
		for (var i = 0; i < imagenes.length; i++) {
			var anchoNatural = imagenes[i].naturalWidth;
			var altoNatural = imagenes[i].naturalHeight;
			if (anchoNatural > altoNatural) {
				imagenes[i].classList.add(classHorizontal);
			} else if (altoNatural > anchoNatural) {
				imagenes[i].classList.add(classVertical);
			}
			else {
				imagenes[i].classList.add(classCuadrada);
			}
		}
	}
	else {
		console.log('Ingresa un selector de imagen valido');
	}
}
$(document).ready(function () {

});

$(window).on("load", function () {
	$(".loader").addClass("hide");
});

$(document).ready(function () {

	// Nav
	$(".nav__list__link").on("click", function (e) {
		var targetLink = $(this).attr("href"),
			valTarget = targetLink.search(".html");
		if (valTarget > 0) {

		} else {
			e.preventDefault();

			$(".nav__list__link").removeClass("active");
			$(this).addClass("active");

			var targetLink = $(this).attr("href");
			$('body,html').animate({
				scrollTop: ($(targetLink).offset().top) - 143 + "px"
			}, 1000);
		}
	});

	$(".modal__close").on("click", function (e) {
		e.preventDefault();
		$(".modal").addClass("hide");
	});

	$(".btnNav").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggleClass("active");
	});

	// Carousel
	if ($(".owl-carousel").length > 0) {
		$(".owl-carousel").owlCarousel({
			loop: true,
			nav: true,
			dots: true,
			nestedItemSelector: 'carousel__item',
			responsive: {
				1: {
					items: 1,
					autoWidth: false,
					margin: 10
				},
				767: {
					items: 4,
					autoWidth: false,
					margin: 0
				}
			}
		});
	}

	$(".carousel__prev").on("click", function (e) {
		e.preventDefault();
		$(".owl-prev").trigger("click");
	});

	$(".carousel__next").on("click", function (e) {
		e.preventDefault();
		$(".owl-next").trigger("click");
	});

	// Select
	$("#phone3").click(function () {
		$("#select-dep").show();
		$("#select-dep").attr("required", "true");
	})
	$("#phone4").click(function () {
		$("#select-dep").hide();
		$("#select-dep").removeAttr("required");
	})

	$("#phone6").click(function () {
		$("#select-dep_modal").show();
		$("#select-dep_modal").attr("required", "true");
	})
	$("#phone5").click(function () {
		$("#select-dep_modal").hide();
		$("#select-dep_modal").removeAttr("required");
	})
	$("#phone1").click(function () {
		$("#select-dep_footer").show();
		$("#select-dep_footer").attr("required", "true");
	})
	$("#phone2").click(function () {
		$("#select-dep_footer").hide();
		$("#select-dep_footer").removeAttr("required");
	})

	$("#form_footer").submit(function (e) {
		e.preventDefault();
		e.preventDefault();
		var nombreF = $("#form_nombre_footer").val();
		var numeroTel = $("#form_telefono_footer").val();
		var correo = $("#form_correo_footer").val();


		if ($("#phone1:checked").length > 0) {
			var numDepa = $("#select-dep_footer").val();
			numeroTel = numDepa + numeroTel;
		}
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "/llamar",
			"method": "POST",
			"headers": {
				"authorization": "AAAA-SO",
				"content-type": "application/json"
			},
			"processData": false,
			"data": '{"api_key":"AAAA-SO", "numero": "' + numeroTel + '", "nombre": "' + nombreF + '", "correo": "' + correo + '"}'
		}
		console.log('correo', correo);	
		var cliente = {
			idCliente: 'GNP_Moviles',
			fechaCreacion: new Date().getTime(),
			nombre: nombreF,
			movil: numeroTel,
			telefono: numeroTel,
			correo: correo,
			direccion: "",
		}
		var settingsinsert = {
			url: "/guardar",
			method: 'POST',
			headers: {
				"authorization": "AAAA-SO",
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				db: "4sales",
				table: new String("contacto"),
				api_key: "AAAA-BBBV-SO",
				object: cliente
			})
		}



		$.ajax(settings).done(function (response) {
			$(".modal_footer").removeClass("hide");
			$("#form_footer").hide();

			$.ajax(settingsinsert).done(function (response) {
				console.log("Mande info personal");

			}).fail(function (error) {
				$(".modal_footer").removeClass("hide");
				$("#form_footer").hide();

			});


		}).fail(function () {
			$(".modal_footer").removeClass("hide");
			$("#form_footer").hide();

		});



	})

	function gtag_report_conversion(url) {
		console.log('La URL: ' + url);
		// var callback =	function () {
		// 	console.log('creo variable');
		// 	if (typeof(url) !=	'undefined') {
		// 		window.location = url;
		// 	}
		// };
		function callback() {
			if (url != 'undefined') {
				window.location = url;
			}
		}
		gtag('event', 'conversion', {
			'send_to': 'AW-942195477/jY0fCIPn7I8BEJWGo8ED', 'event_callback': callback()
		});
		return false;
	}


	$("#form_contacto").submit(function (e) {
		e.preventDefault();
		var numeroTel = $("#num_tel").val();
		var url = "/gracias";
		if ($("#phone3:checked").length > 0) {
			var numDepa = $("#select-dep").val();
			numeroTel = numDepa + numeroTel;
		}

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "/llamar",
			"method": "POST",
			"headers": {
				"authorization": "AAAA-SO",
				"content-type": "application/json",
				"cache-control": "no-cache",
				"postman-token": "1c2ffa54-855f-7bd3-25b2-e70344a321a7"
			},
			"processData": false,
			"data": '{"api_key":"AAAA-SO","numero": "' + numeroTel + '"}'
		}

		$.ajax(settings).done(function (response) {
			gtag_report_conversion(url);
			$(".gracias_principal").removeClass("hide");

		}).fail(function () {
			$(".gracias_principal").removeClass("hide");

		});

	})

	$(".carousel__item").click(function () {
		$(".modal").removeClass("hide");
	});
	$("#btn_click_modal").click(function (e) {
		e.preventDefault();
		$(".modal").removeClass("hide");
	});
	$("#contrata_btn_modal").click(function (e) {
		e.preventDefault();
		$(".modal").removeClass("hide");
	});
	$("#form_contacto_modal").submit(function (e) {
		e.preventDefault();
		var numeroTel = $("#num_tel_modal").val();
		if ($("#phone6:checked").length > 0) {
			var numDepa = $("#select-dep_modal").val();
			numeroTel = numDepa + numeroTel;
		}
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "/llamar",
			"method": "POST",
			"headers": {
				"authorization": "AAAA-SO",
				"content-type": "application/json",
				"cache-control": "no-cache",
				"postman-token": "1c2ffa54-855f-7bd3-25b2-e70344a321a7"
			},
			"processData": false,
			"data": '{"api_key":"AAAA-SO","numero": "' + numeroTel + '"}'
		}

		$.ajax(settings).done(function (response) {
			$(".modal_gracias").removeClass("hide");

		}).fail(function () {
			$(".modal_gracias").removeClass("hide");

		});

	})


	checkUrlParam();

	//funcion para validar la url y mostar los numeros telefonicos 
	function checkUrlParam() {
		var urlActual = window.location.pathname;
		//Por defecto global
		$("#global_tel").show();

		if (urlActual == "/cartagena") {
			$(".telefonos").hide();
			$("#cartagena_tel").show();
		}
		if (urlActual == "/bucaramanga") {
			$(".telefonos").hide();
			$("#bucaramanga_tel").show();
		}
		if (urlActual == "/cucuta") {
			$(".telefonos").hide();
			$("#cucuta_tel").show();
		}
		if (urlActual == "/tunja") {
			$(".telefonos").hide();
			$("#tunja_tel").show();
		}
		if (urlActual == "/ibague") {
			$(".telefonos").hide();
			$("#ibague_tel").show();
		}
		if (urlActual == "/armenia") {
			$(".telefonos").hide();
			$("#armenia_tel").show();
		}
		if (urlActual == "/pereira") {
			$(".telefonos").hide();
			$("#pereira_tel").show();
		}
		if (urlActual == "/manizales") {
			$(".telefonos").hide();
			$("#manizales_tel").show();
		}
		if (urlActual == "/santamarta") {
			$(".telefonos").hide();
			$("#santamarta_tel").show();
		}
		if (urlActual == "/pasto") {
			$(".telefonos").hide();
			$("#pasto_tel").show();
		}
		if (urlActual == "/villavicencio") {
			$(".telefonos").hide();
			$("#villavicencio_tel").show();
		}
		if (urlActual == "/popayan") {
			$(".telefonos").hide();
			$("#popayan_tel").show();
		}
		if (urlActual == "/neiva") {
			$(".telefonos").hide();
			$("#neiva_tel").show();
		}
	}

});

//Prevenir el jump del anchor
if (location.hash) {               // execute it straight away
	setTimeout(function () {
		console.log(location.hash);

		if (location.hash) {
			$('body,html').animate({
				scrollTop: ($(location.hash).offset().top) - 143 + "px"
			}, 1000);
		}


	}, 200);
}