var doc=document;
function gId(n){
	return doc.getElementById(n);
}
//�ɻ��ƶ�
gId('wrapId').onmousemove=function(e){
	var eL=e.pageX-gId('wrapId').offsetLeft-20;
	var eT=e.pageY-gId('wrapId').offsetTop-30;

	gId('airplaneId').style.left=eL+'px';
	gId('airplaneId').style.top=eT+'px';
}



//����Ŀ�꣬�б�����
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

//������������൱�ڣ�����ʼ��Ϸ�����Ǹ���ť
targetListObj();


//���ɵ���Ŀ��
function createTargetFn(_arrs){
	for (var i=0;i<_arrs.length;i++)
	{
		var _targetBlock=doc.createElement('li');
		_targetBlock.setAttribute('class','targetDiv no_boom');
		_targetBlock.style.left=arrs[i]._x *100+'px';
		gId('wrapId').appendChild(_targetBlock)
	}
	var _lis=gId('wrapId').querySelectorAll('li');

	var n=0;//������
	//Ŀ�����µ��ٶ�
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

//�����ӵ�
function createBulletFn(e){
	var _bullet=doc.createElement('div');
	_bullet.style.left=e.pagex-gId('wrapId').offsetLeft+'px';
	_bullet.style.top=e.pagex-80+'px';

	_bullet.setAttribute('class','bulletDiv');

	gId('wrapId').appendChid(_bullet);

	//ѡ��x���������е�Ŀ��
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


	//�ӵ���ʧ������һ������֮��
	var n=_bullet.offsetTop;
	var _s=setInterval(function(){
		_bullet.style.top=n--+'px';

		//�Ƿ����
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

		//�ӵ�δ����ʱ���������
		if (n<=0)
		{
			clearInterval(_s);
			gId('wrapId').removeChild(_bullet);
		}
	},2);
}

//�����Ҳ���Ǵ����ӵ����¼�
gId('wrapId').onclick=function(e){
	createBulletFn(e);
}