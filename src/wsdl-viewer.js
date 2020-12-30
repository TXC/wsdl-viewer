function pagingInit()
{
	let nav = document.getElementById('nav'),
		tabs = nav.getElementsByTagName('li'),
		aa;
	console.log('Paging init!');
	for(let i = 0; i < nav.length; ++i) {
		tabs[i].className = 'close';
		aa = nav[i].getElementsByTagName('a')
		//aa.onclick = function() { activate(this.href); return false; }
		if ( i === 0 ) {
			aa.className = 'current';
		}
	}
	console.log('DONE!');
}

function pagingActivate(name)
{
// 	var page
//   if (curHeader.className=="close")
//   {
//     curHeader.className="";
//     curHeader.firstChild.className="";
//   }
//   else if (curHeader.className=="")
//   {
//     curHeader.className="close";
//     curHeader.firstChild.className="close";
//   }
}
