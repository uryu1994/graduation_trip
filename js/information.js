function nowSchedule() {
  nowDate = new Date();
  dayTable = new Array("日", "月", "火", "水", "木", "金", "土");

  var date = document.getElementById('now_D');
  date.innerHTML = nowDate.getMonth()+1+"月"+nowDate.getDate()+"日"+"("+dayTable[nowDate.getDay()]+")";
  var schedule = document.getElementById('now_S');
  date1 = new Date(2016, 2, 3);
  date2 = new Date(2016, 2, 4);
  date3 = new Date(2016, 2, 5);
  date4 = new Date(2016, 2, 6);
  date5 = new Date(2016, 2, 7);
  end = new Date(2016, 2, 7, 15, 30);

  if(nowDate.getTime()<date1.getTime()) {
    schedule.innerHTML = "まだ出発していません";
  }else if(nowDate.getTime()>=date1.getTime()&&nowDate.getTime()<date2.getTime()) {
    schedule.innerHTML = "札幌-新千歳空港-関西国際空港-京都駅-ホテル着  <small>宿泊先:<a href=\"#hotel-kyoto\">ホテルステーション京都</a></small>";
  }else if(nowDate.getTime()>=date2.getTime()&&nowDate.getTime()<date3.getTime()) {
    schedule.innerHTML = "ホテル発-USJ-ホテル着 <small>宿泊先:<a href=\"#hotel-kyoto\">ホテルステーション京都</a></small>";
  }else if(nowDate.getTime()>=date3.getTime()&&nowDate.getTime()<date4.getTime()) {
    schedule.innerHTML = "ホテル発-伏見稲荷-清水寺-金閣寺-ホテル着 <small>宿泊先:<a href=\"#hotel-kyoto\">ホテルステーション京都</a></small>";
  }else if(nowDate.getTime()>=date4.getTime()&&nowDate.getTime()<date5.getTime()) {
    schedule.innerHTML = "ホテル発-新世界-通天閣-あべのはるかす-ホテル着  <small>宿泊先:<a href=\"#hotel-fushi\">ホテル不死王閣</a></small>";
  }else if(nowDate.getTime()>=date5.getTime()&&nowDate.getTime()<end.getTime()) {
    schedule.innerHTML = "ホテル発-関西国際空港-新千歳空港  <small>到着後解散</small>";
  }else{
    schedule.innerHTML = "旅行は終了しました";
  }
}
