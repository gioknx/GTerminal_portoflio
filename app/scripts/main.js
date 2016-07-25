var commands = [
{input: "Primeiramente, bom dia", output: "Tchau, domingo!"},
{input: "Segundamente, bom dia", output: "Tchau, segunda!<br> \
Tchau batata <br>\
Tchaubtabtabta"},
]


var prefix = "giovani@website:~$ ";
var prompt = $("#prompt");

var commandIndex = 0;
var charIndex = 0;

var timeInMillis = 40;

var slowType = function(){
  setTimeout(function(){
    // Final da linha atual
    if(charIndex === commands[commandIndex].input.length){
      prompt.append("<br>");
      prompt.append(commands[commandIndex].output);
      prompt.append("<br>" + prefix);

      commandIndex++;
      if(commandIndex == commands.length)
        return;
      charIndex = 0;
    }else{
      prompt.append(commands[commandIndex].input.charAt(charIndex++));
    }
    slowType();

  }, timeInMillis);
}

var startPrompt = function(){
  prompt.append(prefix);

  slowType(commands[0].input);
}

var underline = function(state) {
  if(state){
    $("#prompt").addClass("underline");
  }else{
    $("#prompt").removeClass("underline");

  }
  setTimeout(function () { underline(!state); }, 400);
}


underline(1);
startPrompt();

