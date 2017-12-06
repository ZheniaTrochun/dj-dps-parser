[
 {
  "processId": "lib",
  "settings": {
   "url": "https://dj-dps.herokuapp.com/api/extension",
   "as": "def"
  },
  "line": 24
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    @async('p[<%=index%>]')\r\n        call(\r\n            ext: 'def.load.rss.getChannelHeadlines',\r\n            url: '<%=item.url%>',\r\n            encoding: '<%=item.encoding%>'\r\n        )\r\n        set('data')\r\n    @sync(vars:['news[<%=index%>]'], values:['data'])\r\n"
  },
  "line": 24
 },
 {
  "processId": "dps",
  "settings": {},
  "line": 24
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "dpsTemplate"
  },
  "line": 24
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    \r\n    var compiledDps = _.template($scope.dpsTemplate)\r\n    \r\n    $scope.getChannels = $scope.selectedChannels.map(function(item,index){\r\n        return compiledDps({item:item, index:index})\r\n    }).join(\"\")+'@all({{p}}); return(\"news\")'; \r\n\r\n"
  },
  "line": 24
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 24
 },
 {
  "processId": "run",
  "settings": {
   "undefined": "{{getChannels}}"
  },
  "line": 24
 },
 {
  "processId": "concat",
  "settings": {},
  "line": 24
 },
 {
  "processId": "distinct",
  "settings": {},
  "line": 24
 },
 {
  "processId": "cache",
  "settings": {},
  "line": 24
 },
 {
  "processId": "select",
  "settings": {
   "undefined": "$.data_id"
  },
  "line": 24
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "id"
  },
  "line": 24
 },
 {
  "processId": "return",
  "settings": {
   "undefined": "id[0]"
  },
  "line": 24
 }
]