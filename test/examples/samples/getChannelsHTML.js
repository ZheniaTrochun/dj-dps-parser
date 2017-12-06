[
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    <div>\r\n        <a href=\"<%=url%>\" target=\"_blank\" style=\"font-size:small; line-height:1; margin:0; padding:0\">\r\n            <%=title%>\r\n        </a>\r\n    </div>\r\n"
  },
  "line": 2
 },
 {
  "processId": "html",
  "settings": {},
  "line": 2
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "htmlTemplate"
  },
  "line": 10
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n   <div class=\"row\" style=\"margin:0\">\r\n        <button class=\"success right small radius\"\r\n                ng-click=\"API.emit('addRss')\"\r\n                style=\"padding: 0.5em;font-stretch: ultra-condensed;margin: 0.3rem 0.5em 0.1rem;\"\r\n        >\r\n            New RSS Channel...\r\n        </button>\r\n        <button class=\"success right small radius\"\r\n                ng-click=\"API.emit('changeRss')\"\r\n                style=\"padding: 0.5em;font-stretch: ultra-condensed;margin: 0.3rem 0.5em 0.1rem;\"\r\n        >\r\n            Change Selection...\r\n        </button>\r\n    </div>\r\n"
  },
  "line": 12
 },
 {
  "processId": "html",
  "settings": {},
  "line": 12
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "htmlFooter"
  },
  "line": 28
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    var compiledHtml = _.template($scope.htmlTemplate);\r\n    $scope.channels = $scope.channels.map(function(item){\r\n        return compiledHtml(item)  \r\n    }).join(\"\"); \r\n"
  },
  "line": 30
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 30
 },
 {
  "processId": "get",
  "settings": {
   "undefined": "channels"
  },
  "line": 36
 },
 {
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "margin:0.5em;"
  },
  "line": 37
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "channels"
  },
  "line": 38
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    <h4> RSS Channels </h4>\r\n"
  },
  "line": 40
 },
 {
  "processId": "html",
  "settings": {},
  "line": 40
 },
 {
  "processId": "append",
  "settings": {
   "undefined": "{{channels}}"
  },
  "line": 43
 },
 {
  "processId": "append",
  "settings": {
   "undefined": "{{htmlFooter}}"
  },
  "line": 44
 },
 {
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "background: #eee;margin:0.25em 0.2em; padding:0.5em; border:1px solid #999;"
  },
  "line": 46
 },
 {
  "processId": "return",
  "settings": {},
  "line": 51
 }
]