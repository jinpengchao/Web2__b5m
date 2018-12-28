window.onload = function() {
	var topfloat = document.getElementsByClassName('topfloat')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>130){
			topfloat.style.position = 'fixed';
		}else{
			topfloat.style.position = 'static';
		}
	}
	var box = document.getElementsByClassName("_box")[0];

	var small = box.children[0];
	var big = box.children[1];
	var bigImg1 = big.children[0];
	var bigImg2 = big.children[1];
	var mask = small.children[2];//big和mask在鼠标移入small时显示，移出时隐藏
	small.onmouseover = function(){
		big.style.display = "block";
		mask.style.display = "block";
	};
	small.onmouseout = function(){
		big.style.display = "none";
		mask.style.display = "none";
	};

	small.onmousemove = function(event){
		event = event || window.event;
		//mask跟随鼠标移动，且不会超出small范围
		//x作为mask的left值，y作mask的top值。
		var pagex = event.pageX || scroll().left + event.clientX;
		var pagey = event.pageY || scroll().top + event.clientY;
		
		//减去mask宽高的一半，让鼠标在mask的中间
		var x = pagex - box.offsetLeft - mask.offsetWidth/2;
		var y = pagey - box.offsetTop - mask.offsetHeight/2;
		
		//不让mask超出small
		if(x < 0){
			x=0;
		}
		if(x > small.offsetWidth - mask.offsetWidth){
			x = small.offsetWidth - mask.offsetWidth;
		}
		if(y < 0){
			y=0;
		}
		if(y > small.offsetHeight - mask.offsetHeight){
			y = small.offsetHeight - mask.offsetHeight;
		}
		
		mask.style.left = x + "px";
		mask.style.top = y + "px";
		
		//bigImg随着mask的移动移动
		//比例 = 大图移动的距离/mask移动的距离 = 大图/小图
		var scale = bigImg1.offsetWidth / small.offsetWidth;
		
		bigImg1.style.marginLeft = -scale * x +"px";
		bigImg1.style.marginTop = -scale * y +"px";
		var scale = bigImg2.offsetWidth / small.offsetWidth;
		
		bigImg2.style.marginLeft = -scale * x +"px";
		bigImg2.style.marginTop = -scale * y +"px";

	}
}
function div1(){
	var _200ml = document.getElementById('_200ml');
	var _150ml = document.getElementById('_150ml');
	var new_ = document.createElement('div');
	var d = document.getElementById("ccc");
	_200ml.style.border = '1px solid white';
	_150ml.style.border = '1px solid red';
	_200ml.style.background='none';
	_150ml.style.background='url(img/duigou.png) no-repeat 48px 16px';
		//替换节点
		var old = d.childNodes[0];
		d.replaceChild(new_,old);
		new_.innerHTML =
		"<div id="+"ccc_>"+"''150ml''"+"</div>";
	}
	function div2(){
		var _200ml = document.getElementById('_200ml');
		var _150ml = document.getElementById('_150ml');
		var new_ = document.createElement('div');
		var d = document.getElementById("ccc");
		_150ml.style.border = '1px solid white';
		_200ml.style.border = '1px solid red';
		_200ml.style.background='url(img/duigou.png) no-repeat 48px 16px';
		_150ml.style.background='none';
	//替换节点
	var old = d.childNodes[0];
	d.replaceChild(new_,old);
	new_.innerHTML =
	"<div id="+"ccc_>"+"''200ml''"+"</div>";
}
function up(){
	var up = document.getElementById('up');
	var low = document.getElementById('low');
	var p = document.getElementById('jian_shu');
	low.style.cursor = 'pointer';
	if(p.value<5){
		up.style.cursor = 'pointer';
		p.value++;
	}
	if(p.value == 5) {
		up.style.cursor = 'not-allowed';
	}

}
function low(){
	var low = document.getElementById('low');
	var up = document.getElementById('up');
	var p = document.getElementById('jian_shu');
	up.style.cursor = 'pointer';
	if(p.value>1){
		low.style.cursor = 'pointer';
		p.value--;
	}
	if(p.value == 1) {
		low.style.cursor = 'not-allowed';
	}
}
function openNew(){
	//获取页面body！内容！的高度和宽度
	var sHeight=document.documentElement.scrollHeight;
	var bbb = document.getElementById('mask')
	var bg=document.createElement("div");
	bg.id="mask";
	bg.style.height=sHeight+"px";
	//宽度直接用100%在样式里
	document.body.appendChild(bg);
	//创建登录层div并插入body
	var gouwuche=document.createElement("div");
	gouwuche.id="he_big";
	gouwuche.innerHTML=
	"<div class='he_mid'>"+
	"<img src='img/rr11_02.jpg' style='margin-top:50px;margin-left:3px;'>"+
	"<div>"+
	"<div id='close'>X</div>"+
	"<div id='continue'>继续购物</div>"+
	"<div id='settlement'>去购物车结算</div>"+
	"</div>"
	document.body.appendChild(gouwuche);
	//获取login的宽度和高度并设置偏移值
	gouwuche.style.left=37+'%';
	gouwuche.style.top=50+'%';
	//获取关闭按钮
	var close1=document.getElementById("close");
	var close2=document.getElementById("continue");
	close2.onclick=close1.onclick=function(){
		document.body.removeChild(bg);
		document.body.removeChild(gouwuche);
	}
}

function xiaotupian1(){
	var a = document.getElementById('aaa');
	var b = document.getElementById('bbb');
	var q = document.getElementById('qqq');
	var w = document.getElementById('www');
	var xiao1 = document.getElementById('xiao1');
	var xiao2 = document.getElementById('xiao2');
	xiao1.style.border = '2px solid #fe6c00';
	xiao2.style.border = '2px solid white';
	q.style.width= '409px';
	q.style.height= '409px';
	a.style.width= '1000px';
	a.style.height= '1000px';
	w.style.width= '0px';
	w.style.height= '0px';
	b.style.width='0px';
	b.style.height='0px';

}
function xiaotupian2(){
	var a = document.getElementById('aaa');
	var b = document.getElementById('bbb');
	var q = document.getElementById('qqq');
	var w = document.getElementById('www');
	var xiao1 = document.getElementById('xiao1');
	var xiao2 = document.getElementById('xiao2');
	xiao2.style.border = '2px solid #fe6c00';
	xiao1.style.border = '2px solid white';
	q.style.width= '0px';
	q.style.height= '0px';
	a.style.width= '0px';
	a.style.height= '0px';
	w.style.width= '409px';
	w.style.height= '409px';
	b.style.width='1000px';
	b.style.height='1000px';
}
function xiaotupian11(){
	var xiao1 = document.getElementById('xiao1');
	var xiao2 = document.getElementById('xiao2');
	var a = document.getElementById('aaa');
	var b = document.getElementById('bbb');
	var q = document.getElementById('qqq');
	var w = document.getElementById('www');
	if (xiao1.style.border == '2px solid white') {
		xiao1.style.border = '2px solid #fe6c00';
		xiao2.style.border = '2px solid white';
		q.style.width= '409px';
		q.style.height= '409px';
		a.style.width= '1000px';
		a.style.height= '1000px';
		w.style.width= '0px';
		w.style.height= '0px';
		b.style.width='0px';
		b.style.height='0px';
	}else{
		xiao2.style.border = '2px solid #fe6c00';
		xiao1.style.border = '2px solid white';
		q.style.width= '0px';
		q.style.height= '0px';
		a.style.width= '0px';
		a.style.height= '0px';
		w.style.width= '409px';
		w.style.height= '409px';
		b.style.width='1000px';
		b.style.height='1000px';
	}
}



