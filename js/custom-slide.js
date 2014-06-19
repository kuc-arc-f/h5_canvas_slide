
var mCanvas01;
var mContext;

var mPosition_Slide=0;
var mItems_Slide=new Array();
var mWidthSlide=0;
var mHeightSlide=0;
var mDuration = 20;
var mNUM_WAIT_AFT = 2000;
var mNUM_TIMER    = 1000 * 30;

  var CustomSlide = (function () {
    function CustomSlide(msec ,items, iw, ih) {
        this.name   = 'CustomSlide';
        mItems_Slide=items;
        mNUM_TIMER = msec;
	    mWidthSlide     = iw;
		mHeightSlide    = ih;
		mCanvas01 = document.getElementById('id_canvas');
		mContext  = mCanvas01.getContext('2d');
    }
    CustomSlide.display_anim = function(ipos) {
    	var ict= mItems_Slide.length;
    	if(ict <= ipos ){
    		ipos=0;
    	}
		mPosition_Slide= ipos;
console.log('#anim.ipos= ' + mPosition_Slide);
		var itm = mItems_Slide[mPosition_Slide];
		
		CustomSlide.load_image( itm , ipos);
		var h4_tit= $('#id-h4-title');
		    h4_tit.text( itm.title );
		    h4_tit.hide();
		    h4_tit.fadeIn( 4000, function(){ });
		    
	    var iTop = mHeightSlide - 40;
		var divFoot = $('div#id_div_foot');
		    divFoot.css({"top": iTop +'px' ,"width": mWidthSlide +'px' ,'visibility' : 'visible'});
    };
    
    CustomSlide.load_image = function ( item, ipos) {
// console.log('#load_image=' + item.url_b);
		var image = new Image();
	    image.src = item.url + '?' + new Date().getTime();
	    image.onload = function() {
	    	CustomSlide.start_anim( image, mNUM_TIMER );
	    }
    };

    CustomSlide.start_anim = function (image, msec ) {
    	var ixSt = mWidthSlide;
    	var ix   = 0;
    	var imx  = msec / mDuration;
    	var ixDf = ixSt / imx;
console.log('imx='+ imx + ',ixDf=' +ixDf +',ipos='+ mPosition_Slide );
    	setTimeout(function(){
    		function gravity() {
		    	mContext.clearRect(0, 0, mWidthSlide, mHeightSlide);
    			var iposX= ixSt - (ix * ixDf);
// console.log('iposX =' + iposX );
				var iposY= CustomSlide.get_positinY(image);
    			mContext.drawImage(image, iposX, iposY, image.width, image.height);
	    		if(iposX < 0){
	    			clearInterval(g);
				  	$(this).delay( mNUM_WAIT_AFT ).queue(function() {
		    			CustomSlide.display_anim( mPosition_Slide +1 );
						$(this).dequeue();
					});	    			
	    		}
	    		ix++;
    		};
			var g = setInterval(gravity, mDuration);
		}, 100 );
    };
    
    CustomSlide.get_positinY = function (image  ) {
    	var ret=0;
    	if(mHeightSlide > image.height ){
    		ret= (mHeightSlide -image.height) / 2;
    	}
    		
    	return ret;
    };
    
    CustomSlide.testDraw = function (image, msec ) {
    	mContext.drawImage(image, 0, 0, image.width, image.height);
    };
    
    CustomSlide.prototype.start = function () {
    	CustomSlide.display_anim(0);
    };
    CustomSlide.prototype.test = function () {
    };
    
    return CustomSlide;
})();
  

//
// function
//


	