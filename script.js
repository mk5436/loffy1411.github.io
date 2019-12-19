chrome.runtime.onMessage.addListener( // url변경 시, 필터링 유지 및 새로운 내용 다시 필터링
    function(request, sender, sendResponse) {
      if (request.message == 'changeurl') {
          //url 변경 후 작동
          loaded(request.url);
      }
  });
  document.addEventListener("DOMContentLoaded", loaded());

  function loaded(){ // 크롤링 후 logicc 함수 불러오기
      var string = "";
      var reading = setInterval(function(){
          try{
          if(document.querySelectorAll("#container > div.wrap.articles > article > a > h2") && document.querySelectorAll("#container > div.wrap.articles > article > a > h2")[0].textContent!=""){
            //logic(document.querySelectorAll("#container > div.wrap.articles > article > a > h2"));
            logicc();
			
          }
        }catch(e){
            //글 없음
        }
        clearInterval(reading);
        },100);
  }
  
  function isWord(word_list, title){ // 주어진 title에 word_list의 단어가 있는지 여부를 판단해서 return
	for(var i = 0; i < word_list.length; i++){
		if(title.indexOf(word_list[i]) != -1){
			//console.log("it's true");
			return true;
		}
	}
	return false;
  }

  function logicc(){ // 실제 필터링 진행 중
	var titlelist = document.querySelectorAll("#container > div.wrap.articles > article > a > h2"); //게시판에서 제목을 전부 받아옴
	var contentslist = document.querySelectorAll("#container > div.wrap.articles > article > a > p"); //게시판에서 내용을 전부 받아옴
	var titletemplist = [];
	var contentstemplist =[];
	var word_list=['는', '미적', '네이처'];

	for(var i=0;i<titlelist.length; i++)
	{
		
		title = titlelist[i].textContent;
		if (isWord(word_list, title)){ // 제목에 필터링 단어가 있으면 필터링
			titletemplist[i]=titlelist[i].textContent;
			contentstemplist[i]=contentslist[i].textContent;
			titlelist[i].textContent = "필터링된 글입니다.";
			contentslist[i].textContent = "";
		}
		title = contentlist[i].textContent;
		if (isWord(word_list, title)){ // 글 내용에 필터링 단어가 있으면 필터링
			titletemplist[i]=titlelist[i].textContent;
			contentstemplist[i]=contentslist[i].textContent;
			titlelist[i].textContent = "필터링된 글입니다.";
			contentslist[i].textContent = "";
		}
	}
  }
