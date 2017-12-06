[
 {
  "processId": "lib",
  "settings": {
   "url": "https://dj-dps.herokuapp.com/api/extension",
   "as": "def"
  },
  "line": 16
 },
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "json"
  },
  "line": 17
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "words"
  },
  "line": 18
 },
 {
  "processId": "import",
  "settings": {
   "undefined": "def.words.distance"
  },
  "line": 20
 },
 {
  "processId": "run",
  "settings": {},
  "line": 21
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "d"
  },
  "line": 22
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    \r\n    $scope.tags = $scope.tags\r\n        .map(function(tag){\r\n            return {\r\n                tag: tag,\r\n                words:$scope.words\r\n                    .filter(function(w){\r\n                        var k = Math.abs(tag.length-w.length);\r\n                        k /= _.max([\r\n                                    tag.length,\r\n                                    w.length\r\n                                ])\r\n                        k = Math.sqrt(Math.sqrt(1-k));\r\n                        return (k*$scope.d.levenshtein(tag,w)) > 0.5\r\n                    })\r\n            }\r\n        })\r\n        .map(function(item){\r\n            return '<div><span style=\"color:#00a;\">'\r\n            + item.tag +\"</span>\"\r\n            + ((item.words.length > 0)\r\n                ? (' <span style=\"color:#0a0;font-style: italic;font-size:small;\">('\r\n                    + item.words.join(\", \")\r\n                    + ')</span></div>'\r\n                ) \r\n                : '<span style=\"color:#a00;font-style: italic;font-size:small;\"> (not found)</span></div>'\r\n                )    \r\n        })\r\n    \r\n      \r\n\r\n"
  },
  "line": 24
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 24
 },
 {
  "processId": "get",
  "settings": {
   "undefined": "tags"
  },
  "line": 58
 },
 {
  "processId": "concat",
  "settings": {},
  "line": 60
 },
 {
  "processId": "html",
  "settings": {},
  "line": 61
 },
 {
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "margin:0.5em;"
  },
  "line": 62
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "res"
  },
  "line": 63
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    <h4>Likeness of words</h4>\r\n"
  },
  "line": 65
 },
 {
  "processId": "html",
  "settings": {},
  "line": 65
 },
 {
  "processId": "append",
  "settings": {
   "undefined": "{{res}}"
  },
  "line": 68
 },
 {
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "background: #eee;margin:0.25em 0.2em; padding:0.5em; border:1px solid #999;"
  },
  "line": 69
 },
 {
  "processId": "return",
  "settings": {},
  "line": 75
 }
]