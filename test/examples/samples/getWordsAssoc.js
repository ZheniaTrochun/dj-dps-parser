[
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "table"
  },
  "line": 7
 },
 {
  "processId": "format",
  "settings": {
   "undefined": 2
  },
  "line": 9
 },
 {
  "processId": "corr",
  "settings": {
   "for": "col"
  },
  "line": 10
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "t"
  },
  "line": 12
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n        \r\n       \r\n        var th = 0.000001;\r\n        \r\n        for(var i=0; i < $scope.t.body.length-1; i++){\r\n            \r\n            if($scope.t.body[i].value[i] == 1){\r\n            \r\n                for(var j=i+1; j < $scope.t.body.length; j++){\r\n            \r\n                    if($scope.t.body[j].value[i] >= th){\r\n            \r\n                        $scope.t.body[i].metadata[0].label += \", \"+ $scope.t.body[j].metadata[0].label;\r\n                        $scope.t.body[i].value[j] = 1;\r\n                        $scope.t.body[j].value = $scope.t.body[j].value.map(function(d){return -1})\r\n            \r\n                    }\r\n            \r\n                }\r\n            \r\n                \r\n            }\r\n            \r\n        }\r\n        $scope.result = $scope.t.body\r\n            .filter(function(row){\r\n                return _.sum(row.value) != -row.value.length\r\n            })\r\n            .map(function(row){\r\n                return '<div><span style=\"color:#00a;\">[ '+ row.metadata[0].label + ' ]</span></div>'\r\n            })\r\n        $scope.result = $scope.result.join('')     \r\n       \r\n    \r\n    "
  },
  "line": 12
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 12
 },
 {
  "processId": "get",
  "settings": {
   "var": "result",
   "as": "html"
  },
  "line": 12
 },
 {
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "margin:0"
  },
  "line": 12
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "result"
  },
  "line": 12
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n        <h4> Stable associations of words </h4>\r\n    "
  },
  "line": 12
 },
 {
  "processId": "html",
  "settings": {},
  "line": 12
 },
 {
  "processId": "append",
  "settings": {
   "undefined": "{{result}}"
  },
  "line": 12
 },
 {
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "background: #eee;margin:0.25em 0.2em; padding:0.5em; border:1px solid #999;"
  },
  "line": 12
 },
 {
  "processId": "return",
  "settings": {},
  "line": 12
 }
]