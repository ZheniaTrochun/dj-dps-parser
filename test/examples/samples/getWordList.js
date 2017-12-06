[
 {
  "processId": "lib",
  "settings": {
   "url": "https://dj-dps.herokuapp.com/api/extension",
   "as": "def"
  },
  "line": 1
 },
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "json"
  },
  "line": 2
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "news"
  },
  "line": 2
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    var w = function(phrase){\r\n        return phrase.toString().toLowerCase().split(/[\\.\\ \\,\\?\\!\\:\\;\\-\\\"\\'\\(\\)\\[\\]]+/g)    \r\n    }\r\n    \r\n    $scope.words = $scope.news.map(function(item){\r\n        return w(item)\r\n    });\r\n    \r\n    $scope.filter = function(item){\r\n        return item.length >3\r\n    }\r\n    \r\n    $scope.sort = function(a,b){\r\n        return a > b\r\n    }\r\n    \r\n"
  },
  "line": 2
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 2
 },
 {
  "processId": "get",
  "settings": {
   "undefined": "words"
  },
  "line": 2
 },
 {
  "processId": "concat",
  "settings": {},
  "line": 2
 },
 {
  "processId": "filter",
  "settings": {
   "undefined": "{{filter}}"
  },
  "line": 2
 },
 {
  "processId": "sort",
  "settings": {
   "undefined": "{{sort}}"
  },
  "line": 2
 },
 {
  "processId": "distinct",
  "settings": {},
  "line": 2
 },
 {
  "processId": "cache",
  "settings": {},
  "line": 2
 },
 {
  "processId": "return",
  "settings": {},
  "line": 2
 }
]