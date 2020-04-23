var img_num=1;
var is_start=0;
  (function(){
    $("#action_").animate({top:100,left:50},500);
    $("#action_").animate({top:400,left:250},500);
    $("#action_").animate({top:300,left:100},500);
    $("#action_").animate({top:0,left:150},500);
    $("#action_").fadeOut('slow');
    $("#action_").fadeOut('slow');
    $('html, body').animate({scrollTop : 0}, 500);



  })();

  $(document).ready(function(){
     $("#action_").animate({top:100,left:50},700);
     $("#action_").animate({top:400,left:300},500);
     $("#action_").animate({top:300,left:100},500);
     $("#action_").animate({top:0,left:50},500);
      $("#action_").fadeOut('slow');
      $('html, body').animate({scrollTop : 0}, 500);
      $('p').css({"word-break":"keep-all"});
      movebt();

    $('#nextbt').on("click",function(){
            if(is_start==0){
                start_quiz(0);
                $(this).attr("src","assets/img/culturequiz/next.png");
                is_start=1;
            }else{
                num_now+=1;
                show_answer();
                $("#choice_content p").removeClass('answer');
                $("#choice_content p:eq("+(correct_answer-1)+")").addClass('choice');
                if(num_now>=10){
                    check_finish();
                    return ;
                }else{
                    show_question(chapter_num,num_now);
                    $("#choice_content p").removeClass("blocker");
                    start_timer();
                }
            }
        });

        $("#choice_content p").click(function(){
            if($(this).index()==(correct_answer-1)){
                score+=10;
                $("#quiz_text").html("O 정답입니다.");
            }else{
                $("#quiz_text").html("X 틀렸습니다.");
            }
            if (num_now==9){
                $("#quiz_text").append("<br/>점수를 확인하려면 '다음'을 눌러주세요.");
            }
            show_answer();
        });
  });
  function play_sound(){
        var audio = new Audio("assets/audios/wordquiz/"+(chapter_num+1)+"/word ("+(num_now+1)+").m4a");
        audio.play();
  }
  var timer_loop;
  var time_now;
  //현재 문제번호
  var num_now=0;
  //점수
  var score=0;
  //제한시간
  var timeset=10;
  //답
  var correct_answer;
  //챕터
  var chapter_num;

  function start_quiz(chapter){
    $("#nextbt").attr("src","assets/img/culturequiz/next.png");
    is_start=1;
    $("#quizstart_exp").addClass("hidden");
    score=0;
    num_now=0;
    clearInterval(timer_loop);
    $("#choice_content p").removeClass("blocker");
    $("#choice_content p").removeClass('answer');
    start_timer();
    $("#start_text").fadeOut('slow');
    $("#quiz_text").css("visibility","visible");
    $("#sound_bt").css("visibility","visible");

    chapter_num=chapter;
    show_question(chapter,0);


  }

  function start_timer(){
      time_now= 0;
      timer_loop= setInterval(function(){
        $("#timer_").val(time_now);
        if(time_now>timeset){clearInterval(timer_loop); timeup(); return;}
        time_now++;
      },1000);
   }

//chap, num은 0부터시작
var choice_list=["a","b","c","d"];
var show_list=["A","B","C","D"];
  function show_question(chap,num){
    var json_root = 'assets/json/wordq.json';
    num= chap*10+num;
    $.getJSON(json_root, function(data){
        $("#quiz_text").html(data[num].word);
        for(var i=0;i<4;i++){
            $("#choice_content p:eq("+i+")").html(" "+show_list[i]+" : "+data[num][choice_list[i]]);
        }
        correct_answer=data[num].answer;
    });
    $("#question_num").html((num%10+1)+"/10");
  }

  function timeup(){
    show_answer();
    $("#quiz_text").html("X 시간초과.");
  }

  function show_answer(){
    clearInterval(timer_loop);
    $("#choice_content p:eq("+(correct_answer-1)+")").removeClass('choice');
    $("#choice_content p:eq("+(correct_answer-1)+")").addClass('answer');
    $("#choice_content p").addClass("blocker");
  }

  function check_finish(){
    $("#quiz_text").html("수고하셨습니다 (ෆ`꒳´ෆ) </br>내 점수는요 "+score+"/100");
  }