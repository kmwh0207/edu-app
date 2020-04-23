var location_num=[0,0];
//player0 player1
var player=0;


  var jpndata,kordata;
  $('.box').on("click",function(){
    $("#exp_box").html("<p>번호 : "+location_num+"</p><p>일본어 : "+jpndata+" 한국어 : "+kordata+"</p>");
    setTimeout(function() {
        $(".board_sub").animate({top:-80});
        $(".board_sub").fadeOut('slow');}, 1500);
    play_sound();
    if(boardset==0){
        switch (location_num[player]){
            case 10:
                location_num[player]=4;
                $("#dicenum").html("<p>4번으로 이동합니다!</p>");
                break;
            case 12:
                location_num[player]=17;
                $("#dicenum").html("<p>17번으로 이동합니다!</p>");

                break;
            case 18:
                location_num[player]=15;
                $("#dicenum").html("<p>15번으로 이동합니다!</p>");
                break;
            default:
                break;
        }
    }
    player_exp();
  });

  var audio;

  function player_exp(){
    $(".player").html("플레이어 : "+(player+1)+"   &nbsp; 현재위치 : 1P="+location_num[0]+" 2P="+location_num[1]);
  }

  function play_sound(){
    switch(boardset){
        case 0:
            audio = new Audio("assets/audios/boardgame/board"+(boardset+1)+"/word ("+location_num[player]+").m4a");
            break;
        case 1:
            audio = new Audio("assets/audios/boardgame/board"+(boardset+1)+"/word ("+location_num[player]+").mp3");
            break;
    }
    audio.play();
  }

  function reset_num(){
    location_num=[0,0];
    player=0;
    $("#dicenum").html("<p>현재 위치 : "+location_num[player]+"</p>");
  }
  function response(res) {
      // returns an array of the values from the dice
      console.log(res)
      location_num[player]+=parseInt(res);
      $("#dicenum").html("<p>주사위 : "+ res+"</p>");
      switch(boardset){
        case 0:
            if(location_num[player]>18){
                alert("도착!");
            }else{
                setTimeout(function() { show_exp(1); }, 1000);
            }
            break;
        case 1:
            if(location_num[player]>42){
                alert((player+1)+"번 플레이어"+"승리!");
            }else{
                setTimeout(function() { show_exp(2); }, 1000);
            }
            break;
        default:
            break;
      }
    }
  function rollDiceWithoutValues1() {
      player = 0;
      const element = document.getElementById('dice-box1');
      const numberOfDice = 1;
      const options = {
        element, // element to display the animated dice in.
        numberOfDice, // number of dice to use
        callback: response
      }
      rollADie(options);
      $(".board_sub").css("visibility","hidden");
      player_exp();
  }

  function rollDiceWithoutValues2() {
        player = 1;
        const element = document.getElementById('dice-box1');
        const numberOfDice = 1;
        const options = {
          element, // element to display the animated dice in.
          numberOfDice, // number of dice to use
          callback: response
        }
        rollADie(options);
        $(".board_sub").css("visibility","hidden");
        player_exp();
    }

  function show_exp(e){
    var json_root = 'assets/json/boardgame'+e+'.json';
    $("#exp_box").html("<p>번호 : "+location_num[player]+"</p><p>정답보기</p>");
    $.getJSON(json_root, function(data){
        jpndata = data[location_num[player]-1].jap;
        kordata = data[location_num[player]-1].kor;
    });

    var img_src="assets/img/boardgame/board"+e+"/pg"+location_num[player]+".png";
    $(".board_sub").attr("src",img_src);
    $(".board_sub").stop(true,true);
    $(".board_sub").removeAttr('style');
    $(".board_sub").css("visibility","visible");
  }


   $(".board_sub").hover(
    function(){
        $(".board_sub").animate({top:-80});
        $(".board_sub").fadeOut('slow');
    });