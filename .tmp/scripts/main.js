var commands = [{ input: "printenv NAME AGE NATIONALITY EMAIL", output: "<div class='outputText'> Giovani Amaral Barcelos<br> \
19 yo<br>\
Brazilian<br>\
<a target='_blank' href='mailto:giovanikx@gmail.com'>giovanikx@gmail.com (email me)</a></div><br>"
}, { input: "tail ./social", output: "<div class='socialMedia outputText'>\
<a href='facebook.com/gioknoxx'> facebook</a><br>\
<a href='instagram.com/giokx/'> instagram</a><br>\
<a href='twitter.com/gioknx'> <s>forsaken</s> twitter</a><br>\
<a href='github.com/gioknx'> github</a><br>\
<a href='br.linkedin.com/in/giovanibarcelos'> linkedin</a><br>\
</div>"
}, { input: "tail ./skills/web/backend", output: "<div class='skills outputText'>\
Ruby on Rails (<span class='heart'>❤</span>), C#, PHP, Python, C, C++, Java, Node.js </div>"
}, { input: "tail ./skills/web/frontend", output: "<div class='skills outputText'>\
AngularJS (<span class='heart'>❤</span>), Ionic, Javascript, JQuery, Bootstrap, CSS 3, HTML 5, Wordpress </div>"
}, { input: "service giovani status", output: "<div class='serviceStatus outputText'>\
The man is the proud CEO and Founder of GD Web, a small company that helps those who want to turn their dreams and ideas into real web-ish stuff<br>\
You may also find him available for freelancing! Contact him in any social network</div>"
}];

var prefix = "giovani@website:~$ ";
var prompt = $("#prompt");

var commandIndex = 0;
var charIndex = 0;

var timeInMillis = 70;

var slowType = function () {
  setTimeout(function () {
    // Final da linha atual
    if (charIndex === commands[commandIndex].input.length) {
      prompt.append("<br>");
      prompt.append(commands[commandIndex].output);
      prompt.append("<br>" + prefix);

      commandIndex++;
      if (commandIndex == commands.length) return;
      charIndex = 0;
    } else {
      prompt.append(commands[commandIndex].input.charAt(charIndex++));
    }
    slowType();
  }, timeInMillis);
};

var startPrompt = function () {
  prompt.append(prefix);

  slowType(commands[0].input);
};

var underline = function (state) {
  if (state) {
    $("#prompt").addClass("underline");
  } else {
    $("#prompt").removeClass("underline");
  }
  setTimeout(function () {
    underline(!state);
  }, 400);
};

underline(1);
startPrompt();
//# sourceMappingURL=main.js.map
