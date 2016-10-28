var plotly = require('plotly')('arpitkhare', 'cf4okxqd5t');
var five = require("johnny-five");

var Edison = require("galileo-io");
var board = new five.Board({
  io: new Edison()
});
var data = [{x:[], y:[], stream:{token:'gtivq3l2k4', maxpoints:200}}];
var layout = {fileopt : "extend", filename : "tmp36 nodey arduino!"};

board.on("ready", function() {


  var tmp36 = new five.Sensor({
    pin: "A0",
    freq: 1000,
    thresh: 0.5
  });
	
	plotly.plot(data,layout,function (err, res) {
    if (err) console.log(err);
    console.log(res);

  
   var stream = plotly.stream('gtivq3l2k4', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });
	 tmp36.on("data", function() {
      var data = {
        x : getDateString(),
        y : convertTemperature(this.value)
      };
      console.log(data);
      
      stream.write(JSON.stringify(data)+'\n');
    });
  });
});

function convertTemperature (value) {
  var voltage = value * 0.004882814;
  var celsius = (voltage - 0.5) * 100;
  var fahrenheit = celsius * (9 / 5) + 32;
  return celsius;
}


function getDateString () {
  var time = new Date();


  var datestr = new Date(time - 14400000).toISOString();//.replace(/T/,' ').rep$
  return datestr;
}
