function isWord(word_list, title){
	for(var i = 0; i < word_list.length; i++){
		if(title.indexOf(word_list[i]) != -1){
			//console.log("it's true");
			return true;
		}
	}
	return false;
}

(function aa() {
	var titlelist = document.querySelectorAll('h2.medium'); //게시판에서 제목을 전부 받아옴
	var contentslist = document.querySelectorAll('p.small'); //게시판에서 내용을 전부 받아옴
    var titletemplist = [];
	var contentstemplist =[];
	console.log('11');
	var word_list=["나"];

	for(var i=0;i<titlelist.length; i++)
	{	
		title = titlelist[i].textContent;
		if (isWord(word_list, titlelist[i].textContent))
		{
			console.log(i);
			titletemplist[i]=titlelist[i].textContent;
			contentstemplist[i]=contentslist[i].textContent;
			titlelist[i].textContent = "필터링된 제목입니다.";
			contentslist[i].textContent = "필터링된 내용입니다.";
		}
	}

//
//
//	for(var i=0;i<titlelist.length; i++)
//	{
//		if (titlelist[i].textContent.indexOf('수학') != false)
//		{
//			
//			console.log(i," ",titlelist[i].textContent.indexOf('수학'),"\n");
//			//titletemplist[i]=titlelist[i].textContent;
//			//contentstemplist[i]=contentslist[i].textContent;
//			titlelist[i].textContent = "필터링된 제목입니다.";
//			contentslist[i].textContent = "필터링된 내용입니다.";
//		}
////		if (isWord(word_list, contentslist[i])
////		{
////			titletemplist[i]=titlelist[i].textContent;
////			contentstemplist[i]=contentslist[i].textContent;
////			titlelist[i].textContent = "필터링된 제목입니다.";
////			contentslist[i].textContent = "필터링된 내용입니다.";
////		}
////		
//	}
//    //titlelist[1].textContent = "필터링된 제목입니다.";
//	//contentslist[2].textContent = "필터링된 내용입니다.";
//    
})();
