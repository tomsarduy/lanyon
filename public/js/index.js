angular.module("kaffeine", []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}).controller("kaffeineCtrl", ["$scope", function(e) {
    var n = ["Control", "Shift"];
    -1 != navigator.userAgent.indexOf("Mac OS X") && (n = ["Command", "Option"]);
    var o = ["Geek Dude", "Developer", "Designer", "Architect"]
      , t = 0
      , r = !1;
    e.commands = n,
    e.current = o[t],
    e.deleteLastChar = function() {
        e.current = o[t].substring(0, e.current.length - 1)
    }
    ,
    e.addChar = function() {
        e.current.length < o[t].length && (e.current = e.current += o[t][e.current.length])
    }
    ,
    e.nextWord = function() {
        t = t == o.length - 1 ? 0 : t + 1,
        e.$apply()
    }
    ,
    e.animateText = function() {
        setTimeout(function() {
            0 == e.current.length && (e.nextWord(),
            setTimeout(function() {
                r = !0
            }, 800)),
            e.current.length == o[t].length && setTimeout(function() {
                r = !1
            }, 1300),
            r ? e.addChar() : e.deleteLastChar(),
            e.$apply(),
            e.animateText()
        }, 300 * Math.random(0, 1))
    }
    ,
    e.animateText()
}
]),

console.log("%cKaffeine Lab %c- %chttp://kaffeinelab.com", "color:red;", "color:gray;", "color:green;"),
console.log("%cMy Personal Portfolio using Angular, SASS and Gulp", "color:#333;"),
console.log("%c-------------------------------", "color: #ddd"),
console.log("%cI'm filling this info, comeback later ;)", "color:#333;"),
console.log("");
