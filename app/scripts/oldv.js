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
var _put = 'input';

var timeInMillis = 40;

var slowType = function(){
  setTimeout(function(){
    // Final da linha atual
    if(charIndex === commands[commandIndex][_put].length){
      if(_put == 'input'){
        _put = 'output';
        charIndex = 0;
        prompt.append("<br>");
      }else{
        commandIndex++;
        charIndex = 0;
        _put = 'input';
        prompt.append("<br>" + prefix);
      }

    }else{
      prompt.append(commands[commandIndex][_put].charAt(charIndex++));
    }
    slowType();

  }, timeInMillis);
}

var startPrompt = function(){
  prompt.append(prefix);

  slowType(commands[0][_put]);
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

