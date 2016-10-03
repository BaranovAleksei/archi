$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	//all my function)))
	

	// slider index sliderTop
	$('.slider-pro').sliderPro({
		width: "100%",
		height: 400,
		imageScaleMode: 'exact',
		arrows: true,
		shuffle: true,
		slideDistance: 5,
	});



	// выпадающие меню фильтра товароыв на стр
	$('.filterSortGoodsChoose').click(function() {
		$('#GoodsChooseValue').slideToggle('fast');
	});

	// изменяем значение фильтра товаров (сортировка по)
	$('.filterSortGoodsChoodseValue ul li').click(function() {
		var sod = $(this).html();
		$('.titleGoodsChooseValue span').html(sod);
	});

	// скрывает- показывает фильтры и поворачиваем стрелку

	var arrowUpDown = ['img/downArrow.png', 'img/upArrow.png'];
	
	$('.nameFilter').click(function() {
		$(this).parent().children('ul').slideToggle(400);
		$(this).parent().children('.priceValue').slideToggle(400);

		var flagFilter= $(this).children().children('img').attr('src');
		if (flagFilter === arrowUpDown[0]){
			$(this).children().children('img').attr('src', arrowUpDown[1]);
		} else
			$(this).children().children('img').attr('src', arrowUpDown[0]);
	});


// ----------------------ноуты-------------------------------------
	// range для фильтра цены ноутов
	$("#filterPriceNote")
		.slider({
			min: 100,
			max: 3000,
			range: true,
			values: [500, 2500]
		})
		.on("slidechange", function(e,ui) {
			$('#minPriceNote').val( ui.values[0]);
			$('#maxPriceNote').val( ui.values[1]);
	});
// -------------------------планшеты-------------------------------
// -------------------------компы----------------------------------

	// range для фильтра цены компов
	$("#filterPriceComp")
		.slider({
			min: 1000,
			max: 9000,
			range: true,
			values: [3000, 5000]
		})
		.on("slidechange", function(e,ui) {
			$('#minPriceComp').val( ui.values[0]);
			$('#maxPriceComp').val( ui.values[1]);
	});

	// range для фильтра частоты проца
	$("#filterCompCPUCh")
		.slider({
			min: 1,
			max: 5,
			range: true,
			values: [2, 3]
		})
		.on("slidechange", function(e,ui) {
			$('#minCompCPUCh').val( ui.values[0]);
			$('#maxCompCPUCh').val( ui.values[1]);
	});

	// range ddr comp
	$("#filterCompDDRRange")
		.slider({
			min: 1,
			max: 64,
			range: true,
			values: [8, 32]
		})
		.on("slidechange", function(e,ui) {
			$('#minCompDDR').val( ui.values[0]);
			$('#maxCompDDR').val( ui.values[1]);
	});

	// range hdd comp
	$("#filterCompHDDRange")
		.slider({
			min: 1,
			max: 5000,
			range: true,
			values: [320, 1000]
		})
		.on("slidechange", function(e,ui) {
			$('#minCompHDD').val( ui.values[0]);
			$('#maxCompHDD').val( ui.values[1]);
	});

	// range video comp
	$("#filterCompVideoRange")
		.slider({
			min: 1,
			max: 3000,
			range: true,
			values: [128, 1000]
		})
		.on("slidechange", function(e,ui) {
			$('#minCompVideo').val( ui.values[0]);
			$('#maxCompVideo').val( ui.values[1]);
	});
// -------------------------мониторы---------------------------
	$("#filterPriceMon")
		.slider({
			min: 100,
			max: 10000,
			range: true,
			values: [1000, 8500]
		})
		.on("slidechange", function(e,ui) {
			$('#minPriceMon').val( ui.values[0]);
			$('#maxPriceMon').val( ui.values[1]);
	});
// ------------------------принтеры------------------------------
	$("#filterPricePrint")
		.slider({
			min: 100,
			max: 1000,
			range: true,
			values: [200, 800]
		})
		.on("slidechange", function(e,ui) {
			$('#minPricePrint').val( ui.values[0]);
			$('#maxPricePrint').val( ui.values[1]);
	});
// ------------------------материнки------------------------------
	$("#filterPriceMather")
		.slider({
			min: 50,
			max: 1000,
			range: true,
			values: [200, 800]
		})
		.on("slidechange", function(e,ui) {
			$('#minPriceMather').val( ui.values[0]);
			$('#maxPriceMather').val( ui.values[1]);
	});





});
