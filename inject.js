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
	var word_list=["는"];

	var content_title = document.querySelectorAll("h2.large");
	var content_content = document.querySelectorAll("p.large");
	var content_title_temp = [];
	var content_content_temp = [];
	
	if(!content_title[0]){ // 게시판 글 필터링
		for(var i=0;i<titlelist.length; i++)
		{	
			title = titlelist[i].textContent;
			if (isWord(word_list, title))
			{
				console.log(i);
				titletemplist[i]=titlelist[i].textContent;
				contentstemplist[i]=contentslist[i].textContent;
				titlelist[i].textContent = "필터링된 제목입니다.";
				contentslist[i].textContent = "필터링된 내용입니다.";
			}

			title = contentslist[i].textContent;
			if (isWord(word_list, title))
			{
				titletemplist[i]=titlelist[i].textContent;
				contentstemplist[i]=contentslist[i].textContent;
				titlelist[i].textContent = "필터링된 제목입니다.";
				contentslist[i].textContent = "필터링된 내용입니다.";
			}
		}
	}

	if(!content_title[0]){ // 글 및 댓글 필터링
		title = content_title[0].textContent;
		if(isWord(word_list, title)){
				content_title_temp = content_title.textContent;
			content_content_temp[i] = content_content[i].textContent;
			content_title[0].textContent = "필터링된 제목입니다.";
			content_content[0].textContent = "필터링된 내용입니다.";
		}
		for(var i = 0; i < content_content.length; i++){
			title = content_content[i].textContent;
			if(isWord(word_list, title)){
				content_title_temp = content_title.textContent;
				content_content_temp[i] = content_content[i].textContent;
				content_title[0].textContent = "필터링된 제목입니다.";
				content_content[i].textContent = "필터링된 내용입니다.";
			}
		}
	}
})();
