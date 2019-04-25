const portName = '/dev/ttyACM0'
const SerialPort = require('serialport');			

const myPort = new SerialPort(portName, 9600);
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();								

myPort.pipe(parser);													

myPort.on('open', showPortOpen);    
myPort.on('close', showPortClose);  
myPort.on('error', showError);   
parser.on('data', readSerialData);  


function showPortOpen() {
  console.log('port open. Data rate: ' + myPort.baudRate);
}

function readSerialData(data) {
  console.log(data);
}

function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
  console.log('Serial port error: ' + error);
}

function sendToSerial(data) {
  console.log("sending to serial: " + data);
  myPort.write(data);
}


// in base of (https://github.com/ITPNYU/physcomp)
