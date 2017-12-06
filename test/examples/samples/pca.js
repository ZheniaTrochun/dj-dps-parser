[
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "table"
  },
  "line": 8
 },
 {
  "processId": "pca",
  "settings": {
   "for": "row",
   "return": "scores"
  },
  "line": 9
 },
 {
  "processId": "format",
  "settings": {
   "undefined": 2
  },
  "line": 10
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "table"
  },
  "line": 11
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    $scope.table.body = $scope.table.body.map(function(row){\r\n        return {\r\n            metadata: [row.metadata[0]],\r\n            value: row.value\r\n        }\r\n    }) \r\n"
  },
  "line": 13
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 13
 },
 {
  "processId": "get",
  "settings": {
   "var": "table",
   "as": "table"
  },
  "line": 21
 },
 {
  "processId": "scatter",
  "settings": {
   "x": 0,
   "y": [
    1,
    2
   ]
  },
  "line": 23
 }
]