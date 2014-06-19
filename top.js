//top.js

onload = function() {
	var canvas =document.getElementById('id_canvas');	
	var iW = canvas.width;
	var iH = canvas.height;

console.log( 'iW='+ iW +',iH=' + iH)
	var items= get_slideData();
	
	var slide = new CustomSlide(1000 * 10 ,items, iW, iH  );
	    slide.start();
}

//
//function
//

function get_slideData(){
	var items= new Array();

	items[0]={ title:'p11.JPG' , url: 'http://kuc-arc-f.github.io/h5_t0604_page/img/p11.JPG' };
	items[1]={ title:'p12.JPG' , url: 'http://kuc-arc-f.github.io/h5_t0604_page/img/p12.JPG' };
	items[2]={ title:'p13.JPG' , url: 'http://kuc-arc-f.github.io/h5_t0604_page/img/p13.JPG' };
	items[3]={ title:'p14.JPG' , url: 'http://kuc-arc-f.github.io/h5_t0604_page/img/p14.JPG' };
	
	return items;
}

