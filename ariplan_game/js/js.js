var doc=document;
function gId(n){
	return doc.getElementById(n);
}
//飞机移动
gId('wrapId').onmousemove=function(e){
	var eL=e.pageX-gId('wrapId').offsetLeft-20;
	var eT=e.pageY-gId('wrapId').offsetTop-30;

	gId('airplaneId').style.left=eL+'px';
	gId('airplaneId').style.top=eT+'px';
}



//生成目标，列表数据
function targetListObj(){
	var _arrs=[];
	for (var i=0;i<10 ;i++ )
	{
		var _obj={}
		_obj._x=Math.floor(Math.random()*10);
		_obj._y=Math.floor(Math.random()*10);
		_arrs.push(_bj)
	}
	//console.log(_arrs)
}

//这个方法，就相当于：“开始游戏”的那个按钮
targetListObj();


//生成单个目标
function createTargetFn(_arrs){
	for (var i=0;i<_arrs.length;i++)
	{
		var _targetBlock=doc.createElement('li');
		_targetBlock.setAttribute('class','targetDiv no_boom');
		_targetBlock.style.left=arrs[i]._x *100+'px';
		gId('wrapId').appendChild(_targetBlock)
	}
	var _lis=gId('wrapId').querySelectorAll('li');

	var n=0;//计数器
	//目标向下的速度
	var _s=setInterval(function(){
		for (var j=0;j<lis.length;j++ ; )
		{
			_lis[j].style.top=(_arrs[j].y++)*5+'px';
		n++;
		if (n>500)
		{
			clearInterval(_s);
			gId('wrapId').removeChild(_lis[j])
		}
	}
		
	},100);
}

//生成子弹
function createBulletFn(e){
	var _bullet=doc.createElement('div');
	_bullet.style.left=e.pagex-gId('wrapId').offsetLeft+'px';
	_bullet.style.top=e.pagex-80+'px';

	_bullet.setAttribute('class','bulletDiv');

	gId('wrapId').appendChid(_bullet);

	//选出x轴线上所有的目标
	var _fireTaget_X=[];
	var _lis=gId('wrapId').querySelectorAll('li');
	for (var i=0;i<_lis.length ;i++ )
	{
		if (_bullet.offsetLeft>lis[i].offsetLeft
			&& bullet.offsetLeft<(lis[i].offsetLeft +60))
		{
			_fireTargrt_X.push(_lis[i]);
		}
	}


	//子弹消失，运行一定距离之后
	var n=_bullet.offsetTop;
	var _s=setInterval(function(){
		_bullet.style.top=n--+'px';

		//是否击中
		if (_fireTaget_X.length>=0)
		{
			for (var i=0;i<fireTarget_X.length ;i++ )
			{
				if (n==_fireTarget_X[i].ffsetTop
					&& _fireTarget_X[i].getAttribute('class')!='targetDiv yes_boom')
				{
					_fireTarget_X[i].setAttribute('class','targetDiv yes_boom');
				}
			}
		}

		//子弹未击中时，清除条件
		if (n<=0)
		{
			clearInterval(_s);
			gId('wrapId').removeChild(_bullet);
		}
	},2);
}

//射击，也就是创建子弹的事件
gId('wrapId').onclick=function(e){
	createBulletFn(e);
}