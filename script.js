chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message == 'changeurl') {
          //url 변경 후 작동
          loaded(request.url);
      }
  });
  document.addEventListener("DOMContentLoaded", loaded());

  function loaded(){
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
  
  function isWord(word_list, title){
	for(var i = 0; i < word_list.length; i++){
		if(title.indexOf(word_list[i]) != -1){
			//console.log("it's true");
			return true;
		}
	}
	return false;
  }
/*
  function logic(content){
    //content에 게시물 제목 목록
	var titlelist = content; //게시판에서 제목을 전부 받아옴
	var word_list=['는'];
	var titletemplist = [];
	//var contentslist = content; //게시판에서 내용을 전부 받아옴
	content.forEach(element =>{
		if(isWord(word_list, element.textContent)) {
			element.textContent= "필터링된 글입니다.";	
		}});
	
	//var contentstemplist =[];
	
	
	//content.forEach(element => {
    //    console.log(element.textContent);
    //});
  }
  */
  function logicc(){
	var titlelist = document.querySelectorAll("#container > div.wrap.articles > article > a > h2"); //게시판에서 제목을 전부 받아옴
	var contentslist = document.querySelectorAll("#container > div.wrap.articles > article > a > p"); //게시판에서 내용을 전부 받아옴
	var titletemplist = [];
	var contentstemplist =[];
	var word_list=['는', '미적', '네이처'];
	for(var i=0;i<titlelist.length; i++)
	{
		
		title = titlelist[i].textContent;
		if (isWord(word_list, title)){
			titletemplist[i]=titlelist[i].textContent;
			contentstemplist[i]=contentslist[i].textContent;
			titlelist[i].textContent = "필터링된 글입니다.";
			contentslist[i].textContent = "";																

			document.querySelectorAll("#container > div.wrap.articles > article > a > div")[i].outerHTML="";
		}
	}
	
  }
