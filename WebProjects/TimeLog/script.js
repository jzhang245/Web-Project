// a mini project, to track timelog, how many second does it take to reach 500 count.
function timeLog() {
  var stTime =0;
  var spTime =0;
  var logging=false;

//getting the time
 function theTime(){
    var time = new Date();
    return time.getTime();
  }

//start function for the log
  this.start=function(){
    if(logging === true) {
      return;
    } else if(stTime !== 0){
      spTime = 0;
    }
    logging = true;
    stTime=theTime();
  };

//stop the log
  this.stop=function(){
    if(logging === false){
      return;
    }
    spTime = theTime();
    logging = false;
  };
//  working on the reset
//   this.reset = function(){
//     stTime = 0;
//   };

// log function
  this.log = function(){
    if(stTime === 0 || spTime === 0) {
      return "haven't start it";
    } else {
      return(spTime - stTime)/1000;
    }
  };
}

var tl = new timeLog();
  tl.start();

  for(var i = 0; i < 500; i++){
    console.log(i);
  }

  tl.stop();

  console.log("Time to print 500 number takes" + tl.log() + "sec");
