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
		_arrs.push(_obj)
	}
	//console.log(_arrs)
	createTargetFn(_arrs)
}

//������������൱�ڣ�����ʼ��Ϸ�����Ǹ���ť
targetListObj();


//���ɵ���Ŀ��
function createTargetFn(_arrs){
	for (var i=0;i<_arrs.length;i++)
	{
		var _targetBlock=doc.createElement('li');
		_targetBlock.setAttribute('class','targrtDiv no_boom');
		_targetBlock.style.left=_arrs[i]._x*100+'px';
		gId('wrapId').appendChild(_targetBlock)
	}
	var _lis=gId('wrapId').querySelectorAll('li');

	var n=0;//������ ���ڶ�ʱ
	//Ŀ�����µ��ٶ�
	var _s=setInterval(function(){
		for (var j=0; j<_lis.length; j++ )
		{
			_lis[j].style.top=(_arrs[j]._y++)*5+'px';
			n++;
			if (n>800)
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
	_bullet.style.left=e.pageX-gId('wrapId').offsetLeft+'px';
	_bullet.style.top=e.pageY-80+'px';

	_bullet.setAttribute('class','bulletDiv');

	gId('wrapId').appendChild(_bullet);

	//ѡ��x���������е�Ŀ��
	var _fireTarget_X=[];
	var _lis=gId('wrapId').querySelectorAll('li');
	for (var i=0;i<_lis.length ;i++ )
	{
		if (_bullet.offsetLeft>_lis[i].offsetLeft
			&& _bullet.offsetLeft<(_lis[i].offsetLeft +60))
		{
			_fireTarget_X.push(_lis[i]);
		}
	}


	//�ӵ���ʧ������һ������֮��
	var n=_bullet.offsetTop;
	var _s=setInterval(function(){
		_bullet.style.top=n--+'px';

		//�Ƿ����
		if (_fireTarget_X.length>=0)
		{
			for (var i=0;i<_fireTarget_X.length ;i++ )
			{
				if (n==_fireTarget_X[i].offsetTop
					&& _fireTarget_X[i].getAttribute('class')!='targetDiv yes_boom')
				{
					_fireTarget_X[i].setAttribute('class','targetDiv yes_boom');

					//����ӵ��ļ�ʱ��
					clearInterval(_s);
						 
					var _c=setTimeout(function(){
						gId('wrapId').removeChild(_bullet);
						clearTimeout(_c);
					},100);
				}
			}
		}

		//�ӵ�δ����ʱ���������
		if (n<=0)
		{
			clearInterval(_s);//�嶨ʱ��
			gId('wrapId').removeChild(_bullet);
		}
	},2);
}

//�����Ҳ���Ǵ����ӵ����¼�
gId('wrapId').onclick=function(e){
	createBulletFn(e);
}