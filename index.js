function takeANumber(line, name){
  for(var i=0; i<line.length;i++){
    if (line[i]==name) {break;}
  }
  return ++i;
}

function nowServing(line){
  var serv = ""
  if (line.length>0){
    serv = line.shift()
  }else{
    serv = "There is nobody waiting to be served"
  }
  return serv;
}

function currentLine(line){
  var str = "The line is currently: "
  for (let i=0; i<line.length; i++){
    if(str != "The line is currently: " ){str+=", "}
    str+=`${i}. ${line[i]}`
  }
  if (str=="The line is currently: "){str = "The line is currently empty."}
  return str;
}
