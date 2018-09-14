var katzDeliLine = [];
var x = 0
function takeANumber (line){
  x++
  line.push(x)
  return `You are number ${x}.`;
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(takeANumber(katzDeliLine))

function nowServing(line) {
  if (line.length > 0){
    return `Currently serving ${line.shift()}.`
  }
  return "There is nobody waiting to be served!"
}


function currentLine (line) {
  var line1 = []
  if (line.length === 0){
    return "The line is currently empty."
    
  }
  for (var i = 0;i<line.length;i++){
    line1.push(` ${i+1}. ${line[i]}`)
  }
  return `The line is currently:${line1}`
}

console.log(currentLine(["Kayla", "Adam", "Jo"]))
console.log(currentLine(["Kayla", "Adam", "Jo"]))




