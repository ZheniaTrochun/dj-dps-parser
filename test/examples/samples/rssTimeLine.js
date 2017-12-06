[
 {
  "processId": "context",
  "settings": {
   "value": "\r\n\r\n        load(\r\n            url:{{_arguments.url}},\r\n            as:\"xml\",\r\n            encode:{{_arguments.encoding}}\r\n        )\r\n    \r\n        json()\r\n        select(\"$.rss..item.*\")\r\n        return()\r\n    "
  },
  "line": 1
 },
 {
  "processId": "dps",
  "settings": {},
  "line": 1
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "getItems"
  },
  "line": 1
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    @async('p[<%=index%>]')\r\n\r\n    run(\r\n            script: {{getItems}},\r\n            url:'<%=item.url%>',\r\n            encoding:'<%=item.encoding%>'\r\n        )\r\n    set('data')    \r\n\r\n    @sync(vars:['news[<%=index%>]'], values:['data'])      \r\n"
  },
  "line": 1
 },
 {
  "processId": "dps",
  "settings": {},
  "line": 1
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "dinadps"
  },
  "line": 1
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    \r\n    var compiledDps = _.template($scope.dinadps)\r\n    \r\n    $scope.getChannels = $scope.selectedChannels.map(function(item,index){\r\n        return compiledDps({item:item, index:index})\r\n    }).join(\"\")+'@all({{p}}); return(\"news\")'; \r\n\r\n"
  },
  "line": 1
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 1
 },
 {
  "processId": "run",
  "settings": {
   "undefined": "{{getChannels}}"
  },
  "line": 1
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "news"
  },
  "line": 1
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    $scope.res = {\r\n            tag:\"timeline\",\r\n            dictionary:[{key:\"key\", value:\"value\"}],\r\n            data:{series:[]}\r\n    };\r\n    \r\n    $scope.rn = $scope.relevantNews.map(function(t){return t.label})\r\n    \r\n    // $scope.news = $scope.news.map(function(c){\r\n    //     return c.filter(function(n){\r\n    //         $scope.rn.indexOf(n.title[0]) >= 0\r\n    //     })\r\n    // })\r\n    \r\n    $scope.res.data.series = $scope.selectedChannels\r\n        .map(function(item, index){\r\n            return {\r\n                category: {label: item.title},\r\n                values: $scope.news[index]\r\n                    .filter(function(n){\r\n                        return $scope.rn\r\n                        .indexOf(n.title[0]) >=0 \r\n                    })\r\n                    .map(function(n){\r\n                        return {\r\n                            type: \"instant\",\r\n                            start: new Date(n.pubDate[0]),\r\n                            category: {label: item.title},\r\n                            context: {\r\n                              headline: n.title[0],\r\n                              html: n.description[0]\r\n                            },\r\n                            end: new Date(n.pubDate[0])\r\n                        }\r\n                })\r\n                \r\n            }\r\n        })\r\n        .filter(function(s){\r\n            return s.values.length > 0\r\n        })\r\n        \r\n\r\n"
  },
  "line": 1
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 1
 },
 {
  "processId": "return",
  "settings": {
   "undefined": "res"
  },
  "line": 1
 }
]