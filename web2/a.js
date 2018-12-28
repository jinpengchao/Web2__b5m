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
	scrollTop();
}
function getMoney(){
	var jine = document.getElementById('right_chongzhi_ipt3');
	var new_ = document.createElement('div');
	var d = document.getElementById("right_chongzhi_xuanjine");
	var old = d.childNodes[3];
	d.replaceChild(new_,old);
	new_.innerHTML =
	"<div id="+"right_chongzhi_jine>"+"￥"+jine.value+"</div>";
}
var box1 = document.getElementById('b');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left_');
var right = document.getElementById('right_');
var index = 1;
var timer;
var isMoving = false;
box1.onmouseover = function(){
	animate(left,{opacity:100})
	animate(right,{opacity:100})
	clearInterval(timer)
}
box1.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

function scrollTop(){
	var speed = 20;
	var tab = document.getElementById('demoin');
	var tab1 = document.getElementById('demo1');
	var tab2 = document.getElementById('demo2');
	tab2.innerHTML = tab1.innerHTML;
	function Marquee(){
		if(tab2.offsetHeight - tab.scrollTop <=0) {        
			tab.scrollTop = 0;
		}else{
			tab.scrollTop ++;
		}

	}
	var timer = setInterval(Marquee,speed);
	tab.onmouseover = function(){
		clearInterval(timer);
	};
	tab.onmouseout = function(){
		timer = setInterval(Marquee,speed);
	}
}
var box111 = document.getElementById('right_fixed1');
box111.onmouseover = moveout1;
function moveout1(){
	animate(box111,{right:0},function(){
	});
}
box111.onmouseout= moveback1;
function moveback1(){
	animate(box111,{right:-80},function(){
	});
}
var box222 = document.getElementById('right_fixed2');
box222.onmouseover = moveout2;
function moveout2(){
	animate(box222,{right:0},function(){
	});
}
box222.onmouseout= moveback2;
function moveback2(){
	animate(box222,{right:-80},function(){
	});
}
var box333 = document.getElementById('right_fixed3');
box333.onmouseover = moveout3;
function moveout3(){
	box333.style.background = "url(img/erwei.png) no-repeat 20px 50px #fd9a6e";
	animate(box333,{right:0},function(){
	});
}
box333.onmouseout= moveback3;
function moveback3(){
	box333.style.background = "url(img/serwei.png) no-repeat 12px 80px #fd9a6e";
	animate(box333,{right:-80},function(){
	});
}
var box444 = document.getElementById('right_fixed4');
box444.onmouseover = moveout4;
function moveout4(){
	animate(box444,{right:0},function(){
	});
}
box444.onmouseout= moveback4;
function moveback4(){
	animate(box444,{right:-80},function(){
	});
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}