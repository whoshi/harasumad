$(function () 
{
    
    // 送信
    $('form').submit(function () 
    {
      var speach1 = ""
      var speach2 = ""
      //var speach1 = document.getElementById("input_speach1").value;
      //var speach2 = document.getElementById("input_speach2").value;
      //if(speach1 == '')
      //{
      //	 speach1 = "nodata";     
      //}
      //if(speach2 == '')
      //{
	// speach2 = "nodata";     
      //}
      
    
      var element = document.getElementById( "myForm" ) ;
      
      var actionselect = element.action;
      var actionindex = actionselect.selectedIndex
      //alert('ActionIndex ' + actionindex);
      var robohonaction = actionselect.value;
      var songselect = element.song;
      var songindex = songselect.selectedIndex	  
      switch (songindex)
      {
            case 22:
                 songindex = 101;
                 break;
            case 23:
                 songindex = 102;
                 break;
            case 24:
                 songindex = 103;
                 break;
            case 25:
                 songindex = 104;
                 break;		      
            default:
                 break;;
      }
      var robohonsong = songselect.value;
      var danceselect = element.dance;
      var danceindex = danceselect.selectedIndex		    
      var robohondance = danceselect.value;
	    
      var transrateList = element.category ;
      var transrate = transrateList.value ;
      //入力チェック  
      if(speach1 === 'nodata')
      {
         if(speach2 === 'nodata')
         {
           if(robohonaction === '')
           {
              if(robohonsong === '')
              {
	        if(robohondance === '')
                {
	          if(transrate === '')
		  {
	             alert('入力が何もありません');
                     return false;	   
		  }	
	        }
              }
           }
         }
      }
     
      
      var inputdata = "【目標体重】" + "\n" + "  60kg" + "\n" + "【現在の体重】" + "\n" + "  68kg" +  "\n" + "【増減】" + "\n" + "  +8kg";
      inputdata = inputdata  + "\n" + "【ダンス】" + "\n" + "  予定より10時間不足" + "\n"　+ "【ダイエット経過時間】" + "\n" + "  90日経過" + "\n" + "【獲得はらすまポイント】" + "\n" + "  88ポイント" ;	    
      //現在日時取得
      const datecurrent = new Date();
      const nowdate = datecurrent.getFullYear() + "年" + 
				(datecurrent.getMonth() + 1)  + "月" + 
				datecurrent.getDate() + "日" + 
				datecurrent.getHours() + "時" + 
				datecurrent.getMinutes() + "分" + 
				datecurrent.getSeconds() + "秒";
	    
      // Loading 画像を表示
      dispLoading("はらすまダイエットに送信中...");
      sleep(500);
      // Loading 画像を消す
      removeLoading();
      sendText(inputdata);//To LINE 送信
      liff.closeWindow(); 
     //GAS側Postイベントエントリ
      var url = 'https://script.google.com/macros/s/AKfycbyZCPemsZEO01buDDevsEWfs8LbvTIIJdGBHMyNi-HW9l9sK4E/exec'
      /*
      liff.getProfile().then
      (profile => 
        {
                 // プロフィール名
                 const name = profile.displayName
                 var JSONdata = {
                                   nowdate:nowdate,
	                           speach1:speach1,
                                   action: actionindex,
                                   song: songindex ,
                                   dance: danceindex ,
                                   speach2: speach2, 
			           transrate: transrate
                                 };
            
                 //スピナー表示
                 //インジケータ表示
                 // Loading 画像を表示
                 dispLoading("はらすまダイエットに送信中...");
             
                 $.post(url,
                        JSONdata,
                        function(dt)
                        {
	                   //インジケータ除去
	                   // Loading 画像を消す
                           removeLoading();
	                   if(dt.message == 'success!')
	                   {
                               sendText(inputdata);//To LINE 送信
	                       liff.closeWindow(); 
	                   }else
	                   {
		               window.alert("他の人が操作中です、少し待って再実行して下さい");  
                           }
	                }
                 );
     
        }
      );
      */
      return false;
    });
});
