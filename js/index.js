// JavaScript Document
ready(function(){

/*download*/
(function(){
	var oDown=document.getElementById('download');
	oDown.onclick=function(){
		
		var t=window.confirm('确认下载该简历吗？');
		if(!t)
		{
			oDown.href='javascript:;';	
		}
	};	
})();

//welcome
var oWel=document.getElementById('wel');
(function(){
	var str='welcome to my home page !';
	var aSpan=[];
	
	for (var i=0; i<str.length; i++)
	{
		var oSpan=document.createElement('span');
		oSpan.innerHTML=str.charAt(i);
		oWel.appendChild(oSpan);
		aSpan.push(oSpan);
	}
	
	var n=0;
	var timer=setInterval(function (){
		move(aSpan[n], {opacity:1},{
			duration:150
		});
		n++;
		
		if (n == aSpan.length)
		{
			clearInterval(timer);
		}
	}, 100);	
})();

//frame
(function(){
	var arr=['meituan','hao360', 'xiaomi', '360kan', 'oppo', 'jd', 'meilishuo', 'youku'];
	var oPar=document.getElementById('close_down_box');
	var oClose=document.getElementById('close_down');
	var oImg=oClose.getElementsByTagName('img')[0];	
	var oButton=document.getElementById('btn1');
	var oUl=document.getElementById('pre_box');
	var aLi=oUl.children;
	for(var i=0;i<aLi.length; i++)
	{
		(function(index){
			aLi[i].onclick=function(){
				oImg.src='images/web/'+arr[index]+'.jpg';
				var clientW=document.documentElement.clientWidth;
				var clientH=document.documentElement.clientHeight;
				oPar.style.display='block';
				oClose.style.left=50+'%';
				oClose.style.top=50+'%';
				oClose.style.marginLeft=-clientW*3/10+'px';
				oClose.style.marginTop=-clientH*3/10+'px';
				oClose.style.height=clientH*3/5+'px';
				move(oClose,{width:clientW*3/5});
				oImg.style.width=clientW*3/5+'px';
				oImg.style.height=clientH*3/5+'px';
				
			};	
		})(i);	
	}
	
	oButton.onclick=function(){
		oImg.src='images/tips/loding.gif';
		move(oClose,{width:0},{duration:50});	
		move(oImg,{width:0},{duration:50});
		oPar.style.display='none';
	};
})();

// 移入特效
(function(){
	var aLi=document.getElementById('pre_box').getElementsByTagName('li');
	for(var i=0;i<aLi.length; i++)
	{
		enter(aLi[i]);	
		leave(aLi[i]);		}
	
	function enter(obj){
		var oDiv=obj.getElementsByTagName('div')[0];
		obj.onmouseenter=function(ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			switch (n)
			{
				case 0:
				oDiv.style.left='200px';
				oDiv.style.top=0;	
				break;
				
				case 1:
				oDiv.style.top='160px';
				oDiv.style.left=0;	
				break;
				
				case 2:
				oDiv.style.left='-200px';
				oDiv.style.top=0;	
				break;
				
				case 3:
				oDiv.style.top='-160px';
				oDiv.style.left=0;	
				break;
			}	
			move(oDiv,{left:0, top:0},{duration: 300});
		}
	}	
	
	function leave(obj){
		var oDiv=obj.getElementsByTagName('div')[0];
		obj.onmouseleave=function(ev){
			var oEvent=ev || event;
			var n=getN(obj, oEvent);
			switch (n)
			{
				case 0:
				var left='200px';
				var top=0;	
				break;
				
				case 1:
				var left=0;
				var top='160px';
				break;
				
				case 2:
				var left='-200px';
				var top=0;	
				break;
				
				case 3:
				var left=0;
				var top='-160px';
				break;
			}	
			move(oDiv,{left:left, top:top},{duration: 300});
		}
	}
	
	function getN(obj, ev)
	{
		var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
		var y=obj.offsetTop+obj.offsetHeight/2-ev.clientY;	
		
		return Math.round((d2a(Math.atan2(y, x))+180)/90)%4; 
	}
	
	function d2a(d)
	{
		return d*180/Math.PI;	
	}	
})();


//home page
(function(){
	var oUl1=document.getElementById('pre_box');
	var aLi=oUl1.getElementsByTagName('li');
	color();
	
	var n=0;
	var timer=setInterval(function (){
		move(aLi[n], {opacity:1});
		n++;
		if (n == aLi.length)
		{
			clearInterval(timer);
		}
	}, 200);
	
	
	function color(){
		for(var i=0;i<aLi.length; i++)
		{
			aLi[i].style.borderColor='rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';	
		}	
	}
	
	for(var i=0; i<aLi.length; i++)
	{
		var left=aLi[i].offsetLeft;
		var top=aLi[i].offsetTop;
		
		aLi[i].style.left=left+'px';
		aLi[i].style.top=top+'px';	
	}	
	
	for(var i=0;i<aLi.length; i++)
	{
		aLi[i].style.position='absolute';
		aLi[i].style.margin=0;
	}
})();

//fullscroll
(function(){
	var oUl=document.getElementById('web');
	var aLi=oUl.children;
	var nLiH=document.documentElement.clientHeight;
	var now=0;
	var bFlag=false;
	var bRoll=false;
	var oPage=document.getElementById('page_btn');
	var aA1=oPage.children;
	
	var oExh=document.getElementById('exhi');
	
	var oDown1=document.getElementById('down1');
	var oDown2=document.getElementById('down2');
	
	var oP1=document.getElementById('p1');
	var h1=document.documentElement.clientHeight;
	oP1.onclick=function(){
		oDown1.innerHTML='向下';
		oDown2.innerHTML='划一划吧';
		oUl.style.top=0;
		now=0;
		color.call(aA1[now]);
	};
	
	var oP2=document.getElementById('p2');
	oP2.onclick=function(){
		oDown1.innerHTML='向下';
		oDown2.innerHTML='划一划吧';
		oUl.style.top=-h1+'px';
		now=1;	
		color.call(aA1[now]);
		move(oExh,{width:980},{duration:2000});
		move(oUl,{top:-now*nLiH},{
			duration:600,
			complete:function(){
				color.call(aA1[now]);
				show();
				bFlag=false;						
			}
		});
	};
	
	var oP3=document.getElementById('p3');
	oP3.onclick=function(){
		oDown1.innerHTML='向下';
		oDown2.innerHTML='划一划吧';
		oUl.style.top=-2*h1+'px';
		now=2;
		color.call(aA1[now]);
		if(bRoll)
		{
			return;
		}
		roll();
		bRoll=true;
	};
	
	var oP4=document.getElementById('p4');
	oP4.onclick=function(){
		oDown1.innerHTML='continue';
		oDown2.innerHTML='to Top';
		oUl.style.top=-3*h1+'px';
		now=3;
		color.call(aA1[now]);
	};
	
	addWheel(oUl,function(down){
		if(bFlag)
		{
			return ;
				
		}
		bFlag=true;
		
		if(down)
		{
			now++;
			change();
		}
		else	
		{
			now--;	
			if(now<0)
			{
				now=aLi.length-1;
			}
			change();
		}
		
		function change(){
			if(now>=aLi.length)
			{
				now=0;
			}
			nLiH=document.documentElement.clientHeight;
			
			switch (now){
				case 0:
					oDown1.innerHTML='向下';
					oDown2.innerHTML='划一划吧';
					move(oExh,{width:300},{duration:500});
					move(oUl,{top:-now*nLiH},{
						duration:600,
						complete:function(){
							color.call(aA1[now]);
							bFlag=false;						
						}
					});
					break;
				case 1:
					move(oExh,{width:980},{duration:2000});
					move(oUl,{top:-now*nLiH},{
						duration:600,
						complete:function(){
							color.call(aA1[now]);
							show();
							bFlag=false;						
						}
					});
					break;	
				case 2:
					oDown1.innerHTML='向下';
					oDown2.innerHTML='划一划吧';
					move(oExh,{width:300},{duration:500});
					move(oUl,{top:-now*nLiH},{
					duration:600,
					complete:function(){
						color.call(aA1[now]);
						bFlag=false;
						if(bRoll)
						{
							return;
						}
						roll();
						bRoll=true;
												
					}
				});
				break;
				
				case 3:
					oDown1.innerHTML='continue';
					oDown2.innerHTML='to Top';
					move(oUl,{top:-now*nLiH},{
					duration:600,
					complete:function(){
						color.call(aA1[now]);
						bFlag=false;						
					}
				});
				break;
				
				
			}	
		}
	
	});	
	
	function color(){
		for(var i=0;i<aA1.length; i++)
		{
			aA1[i].className='';
		}
		this.className='f40';
	}	
	
	function show(){
		var oTab1=document.getElementById('tab_box_1');
		var oWrap=document.getElementById('time_wrap');
		
		move(oTab1,{opacity:1},{ duration:1000});
		bFlag=false;	
	}
	
})();

/*左右选项卡*/
(function(){
	
	var oTab=document.getElementById('tab_box');
	var aLi=oTab.children;
	var oTan=document.getElementById('tab_btn');
	var aSpan=oTan.getElementsByTagName('span');
	var oPr=document.getElementById('prev');
	var oNe=document.getElementById('next');
	var now=0;
	
	var nLiWidth=aLi[0].offsetWidth;
	oTab.style.width=nLiWidth*aLi.length+'px';
	
	var timer=setInterval(next,5500);
	oNe.onclick=next;
	
	oNe.onmouseover=oPr.onmouseover=oTab.onmouseover=oTan.onmouseover=function(){
		
		clearInterval(timer);	
	};
	oNe.onmouseout=oPr.onmouseout=oTab.onmouseout=oTan.onmouseout=function(){
		timer=setInterval(next,5500);	
	};
	
	for(var i=0;i<aSpan.length; i++)
	{
		(function(index){
			aSpan[i].onclick=function(){
				now=index;
				tab();
				move(oTab,{left:-nLiWidth*now},{
					complete:function(){
					dis();
				}});	
			};	
		})(i);	
	}
	
	function tab(){
		for(var i=0;i<aSpan.length; i++)
		{
			aSpan[i].className='';
		}
		aSpan[now].className='active';
	}
	
	function next(){
		now++;
		if(now>=aLi.length)
		{
			now=0;
		}
		
		tab();
		move(oTab,{left:-nLiWidth*now},{
			complete:function(){
				dis();
		}});
	}
	
	oPr.onclick=function(){
		now--;
		if(now<0)
		{
			now=aLi.length-1;
		}
		tab();
		move(oTab,{left:-nLiWidth*now},{
			complete:function(){
				dis();
			}
		});
	};
	
	function dis(){
		var oSfq=document.getElementById('sfq');
		move(oSfq,{width:632},{
			duration:200,
			complete:function(){
				move(oSfq,{height:320},{duration:300})				
		}});	
	}
	
})();

//时钟canvas
(function(){
	int_canvas();
	setInterval(function(){
			draw_watch()
		},1000);
	function int_canvas(){
		canvas=document.getElementById("sample");//获取画布
		cxt=canvas.getContext("2d");//获取画布上下文,很重要的一点是不用var定义，使得cxt、cw、ch为全局变量
		cw=parseInt(canvas.width);//获取画布宽
		ch=parseInt(canvas.height);//获取画布长
		cxt.translate(cw/2,ch/2);
		draw_watch();
	}
	
	function draw_watch(){
		cxt.clearRect(-cw/2,-ch/2,cw,ch);//清空画布
		var len=Math.min(cw,ch)/2;//计算针的最大长度
		//绘制刻度盘
		var tlen=len*0.85;//——》刻度盘半径
		cxt.font="14px 'Arial'";
		cxt.fillStyle="black";
		cxt.textAlign="center";
		cxt.textBaseLine="middle";
		for (var i=0;i<12 ;i++ )
		{
			var tag1=Math.PI*2*(3-i)/12;//记住公式
			var tx=tlen*Math.cos(tag1);
			var ty=-tlen*Math.sin(tag1);
			cxt.fillText(i,tx,ty);//0点时，tx为0，ty为负值，原因同样是画布以浏览器左上角为原点向右、向下为增
		}
		var d=new Date();//获取当前日期
		var h=d.getHours();
		var m=d.getMinutes();
		var s=d.getSeconds();
		if( h>12){h=h-12;}
		//绘制时针；
		var angle1=Math.PI*2*(3-(h+m/60))/12;//12个刻度
		var length1=len*0.5;
		var width1=5;
		var color1="#000";
		drawHand(angle1,length1,width1,color1);
		//绘制分针；
		var angle2=Math.PI*2*(15-(m+s/60))/60;//不再是以3为基，原因是分钟为60个刻度，同理，秒针也是
		var length2=len*0.7;
		var width2=3;
		var color2="#555555";
		drawHand(angle2,length2,width2,color2);
		var angle3=Math.PI*2*(15-s)/60;
		var length3=len*0.8;
		var width3=1;
		var color3="#aa0000";
		drawHand(angle3,length3,width3,color3);
		//绘制指针函数
		function drawHand(angle,length,width,color){
			//计算针端位置
			var x=length*Math.cos(angle);
			var y=-length*Math.sin(angle);
			cxt.strokeStyle=color;
			cxt.lineWidth=width;
			cxt.lineCap="round";//设置针尖为圆形
			cxt.beginPath();
			cxt.moveTo(0,0);
			cxt.lineTo(x,y);
			cxt.stroke();
		}
	}
		
})();

//日历
(function(){
	var oDiv=document.getElementById('calendar');
	var oSpan=oDiv.getElementsByTagName('span')[0];
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var oPrev=document.getElementById('prev_img');
	var oNext=document.getElementById('next_img');
	var now=0;
	
	oPrev.onmouseover=function(){
		this.src='images/tip/left_on.png';	
	};
	
	oPrev.onmouseout=function(){
		this.src='images/tip/left.png';	
	};
	
	oNext.onmouseover=function(){
		this.src='images/tip/right_on.png';	
	};
	
	oNext.onmouseout=function(){
		this.src='images/tip/right.png';	
	};
	
	// 本月
	create();
	
	// 下个月
	var oNext=oDiv.getElementsByClassName('next1')[0];
	oNext.onclick=function (){
		now++;
		create();
	};
	
	// 上个月
	var oPrev=oDiv.getElementsByClassName('prev1')[0];
	oPrev.onclick=function (){
		now--;
		create();
	};
	
	function create()
	{
		oUl.innerHTML='';
		
		var oDate=new Date(); // ?
		oDate.setMonth(oDate.getMonth()+now);
		
		var y=oDate.getFullYear();
		var m=oDate.getMonth();
		oSpan.innerHTML=y+'年'+toDub(m+1)+'月';
		
		// 空格
		var oDate=new Date(); // ?
		oDate.setMonth(oDate.getMonth()+now);
		oDate.setDate(1);
		var week=oDate.getDay();
		(week==0) && (week=7);
		for (var i=0; i<week-1; i++)
		{
			var oLi=document.createElement('li');
			
			oUl.appendChild(oLi);
		}
		
		// 真实日期
		var oDate=new Date(); // ?
		oDate.setMonth(oDate.getMonth()+now);
		oDate.setMonth(oDate.getMonth()+1, 1);
		oDate.setDate(0);
		var total=oDate.getDate();
		for (var i=0; i<total; i++)
		{
			var oLi=document.createElement('li');
			oLi.innerHTML=i+1;
			oUl.appendChild(oLi);
		}
		
		// 周末
		var aLi=oUl.children;
		for (var i=0; i<aLi.length; i++)
		{
			if (i%7==5 || i%7==6)
			{
				aLi[i].className='week';
			}
		}
		
		// 今天
		if (now == 0)
		{
			var oDate=new Date();
			var today=oDate.getDate();
			for (var i=0; i<aLi.length; i++)
			{
				if (aLi[i].innerHTML == today)
				{
					aLi[i].className='today';
					aLi[i].innerHTML='今天';
				}
				else if (aLi[i].innerHTML < today)
				{
					aLi[i].className='past';
				}
			}
		}
		else if (now < 0)
		{
			for (var i=0; i<aLi.length; i++)
			{
				aLi[i].className='past';
			}
		}
	};	
})();

/*sfq*/
(function(){
	$(function(){
		var aLi=$('#sfq li');
		var aSpan=$('#sfq span');
		var nLiW=aLi.eq(0).outerWidth();
		var nSpanW=20;
		
		aLi.each(function(index){
			if(index != 0)
			{
				var left=nLiW+(index-1)*nSpanW;
				$(this).css('left', left+'px');	
			}	
		});	
		
		aSpan.mouseenter(function(){
			var index=$(this).index('#sfq span');
			
			aLi.each(function(i){
				if(i <= index)
				{
					$(this).animate({
						left: i*nSpanW	
					});	
				}
				else
				{
					$(this).animate({
						left:nLiW+nSpanW*(i-1) 	
					});	
				}	
			});	
		});
	});	
})();

/*无数ball*/
(function(){
	var timer=null;
	var oTar=document.getElementById('tar');
	oTar.onmousedown=function(ev){
		var n=0;
		var oEvent=ev || event;
		timer=setInterval(function(){
			n=rnd(1,30);
			var oDiv=document.createElement('div');
			oDiv.style.width=n+'px';
			oDiv.style.height=n+'px';
			oDiv.style.left=oEvent.clientX-getPos(oTar).left+'px';
			oDiv.style.top=oEvent.clientY-getPos(oTar).top+'px';
			oDiv.style.marginLeft=-n/2+'px';
			oDiv.style.marginTop=-n/2+'px';
			oDiv.style.background='rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
			oTar.appendChild(oDiv);
			
			setTimeout(function(){
				oDiv.parentNode.removeChild(oDiv);	
			},1000);
			
			
			move(oDiv, { left:rnd(0,300), top:rnd(0,300)});	
				
		},30);
		
		oTar.onmouseup=function(){
			clearInterval(timer);
		};
		
		return false;	
	};		
})();

/*coll*/
(function(){
	
	var iSpeedX=1;
	var iSpeedY=0.5;
	var oColl=document.getElementById('coll');
	var now=0;;
	setInterval(function(){
		now++;
		var oImg=document.createElement('img');
		oImg.className='ad';
		oImg.src='images/tip/gold/gold'+(now%5+1)+'.png';
		oImg.style.left=rnd(0,620)+'px';
		oImg.style.top=rnd(0,240)+'px';
		oColl.appendChild(oImg);
		coll(oImg);

		setTimeout(function(){
			oColl.removeChild(oImg);
		},5000)

	},2000);



	function coll(obj){
		setInterval(function(){
			var l=obj.offsetLeft+iSpeedX;
			var t=obj.offsetTop+iSpeedY;
			
			if(t>=240){
				t=240;
				iSpeedY*=-1;	
			}
			if(t<=0){
				t=0;
				iSpeedY*=-1;	
			}
			if(l>=620){
				l=620;
				iSpeedX*=-1;	
			}
			if(l<=0){
				l=0;
				iSpeedX*=-1;	
			}
	
			
			obj.style.left=l+'px';
			obj.style.top=t+'px';
		},30);
	}
})();


/*skill*/
var oPro=document.getElementById('profession');
	var R=oPro.offsetWidth/2;
	var total=6;
	
	var aSki=getByClass(oPro,'skill');
	var n=0;
	oPro.onclick=roll;
	
	function roll(){
		n++;
		for (var i=0; i<total; i++)
		{
			(function(index){
				var target=360*i/total;
				move1(aSki[index], target, function(){
					var oUl1=aSki[index].getElementsByTagName('ul')[0];
					if(oUl1)
					{
						move(oUl1,{width:280});
					}
				});	
			})(i);
		}		
	};
	
	function move1(obj, target, success)
	{
		var start=0;
		var dis=target-start;
		var count=Math.floor(1000/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			n++;
			
			var a=start+dis*n/count;
			var x=R+Math.sin(a2d(a))*R;
			var y=R-Math.cos(a2d(a))*R;
			
			obj.style.left=x+'px';
			obj.style.top=y+'px';
			
			if (n == count)
			{
				clearInterval(obj.timer);
				success && success();
			}
		}, 30);
	}

	function a2d(a)
	{
		return a*Math.PI/180;
	}	
	
/*maxim*/	
(function(){
	var oMax=document.getElementById('maxim');
	var str='Genius is 1% inspiration and 99% perspiration';
	var aSpan=[];
	
	for (var i=0; i<str.length; i++)
	{
		var oSpan=document.createElement('span');
		oSpan.innerHTML=str.charAt(i);
		oMax.appendChild(oSpan);
		aSpan.push(oSpan);
	}
	
	var n=0;
	var timer=setInterval(function (){
		move(aSpan[n], {opacity:1},{
			duration:150
		});
		n++;
		
		if (n == aSpan.length)
		{
			clearInterval(timer);
		}
	}, 100);	
})();

/*botball*/
(function(){
	var oSpan=document.getElementById('res_ball');
	var oDiv=document.getElementById('res');
	var R=oDiv.offsetWidth/2;
	var a=0; 
	setInterval(function (){
		a=a+10;
		var x=R+Math.sin(a2d(a))*R;
		var y=R-Math.cos(a2d(a))*R;
		
		oSpan.style.left=x+'px';
		oSpan.style.top=y+'px';
	}, 30);

})();

function a2d(a)
{
	return a*Math.PI/180;
}	


	
});