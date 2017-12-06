[
 {
  "processId": "context",
  "settings": {
   "value": "\r\n\r\n        load(\r\n            url:{{_arguments.url}},\r\n            as:\"xml\",\r\n            encode:{{_arguments.encoding}}\r\n        )\r\n    \r\n        json()\r\n        select(\"$.rss..item.*\")\r\n        return()\r\n    "
  },
  "line": 37
 },
 {
  "processId": "dps",
  "settings": {},
  "line": 37
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "getItems"
  },
  "line": 37
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    @async('p[<%=index%>]')\r\n\r\n    run(\r\n            script: {{getItems}},\r\n            url:'<%=item.url%>',\r\n            encoding:'<%=item.encoding%>'\r\n        )\r\n    set('data')    \r\n\r\n    @sync(vars:['news[<%=index%>]'], values:['data'])      \r\n"
  },
  "line": 37
 },
 {
  "processId": "dps",
  "settings": {},
  "line": 37
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "dinadps"
  },
  "line": 37
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    \r\n    var compiledDps = _.template($scope.dinadps)\r\n    \r\n    $scope.getChannels = $scope.selectedChannels.map(function(item,index){\r\n        return compiledDps({item:item, index:index})\r\n    }).join(\"\")+'@all({{p}}); return(\"news\")'; \r\n\r\n"
  },
  "line": 37
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 37
 },
 {
  "processId": "run",
  "settings": {
   "undefined": "{{getChannels}}"
  },
  "line": 37
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "news"
  },
  "line": 37
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    $scope.news = $scope.news.map(function(item, index){\r\n        return item.map(function(n){\r\n            return {\r\n                feed: $scope.selectedChannels[index].title,\r\n                news: n\r\n            }\r\n        })    \r\n    });\r\n"
  },
  "line": 37
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 37
 },
 {
  "processId": "get",
  "settings": {
   "undefined": "news"
  },
  "line": 37
 },
 {
  "processId": "concat",
  "settings": {},
  "line": 37
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "news"
  },
  "line": 37
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    $scope.news = $scope.relevantNews.map(function(n){\r\n        var res = $scope.news.filter(function(item){\r\n                return item.news.title[0] == n.label})[0]    \r\n        res.factor = n.value\r\n        return res\r\n    })\r\n    .map(function(item){\r\n        return {\r\n            feed: item.feed,\r\n            pubDate: _util.format.date(new Date(item.news.pubDate[0]),\"DD MMM hh:mm\"),\r\n            factor: item.factor,\r\n            title:item.news.title[0]\r\n        }\r\n    })\r\n    .sort(_util.comparator['Date']['A-Z'](function(item){\r\n        return item.pubDate\r\n    }));\r\n\r\n    $scope.table = {\r\n        header: [{\r\n            metadata:[{\r\n              \"id\": \"relevancy\",\r\n              \"label\": \"relevancy\",\r\n              \"dimension\": \"indicator\",\r\n              \"dimensionLabel\": \"indicator\",\r\n              \"role\": \"metric\"\r\n            }]\r\n        }],\r\n        body:$scope.news.map(function(item){\r\n            return {\r\n                metadata:[\r\n                    {\r\n                        \"id\": item.pubDate,\r\n                        \"label\": item.pubDate,\r\n                        \"dimension\": \"time\",\r\n                        \"dimensionLabel\": \"Date of publication\",\r\n                        \"role\": \"time\",\r\n                        \"format\":\"YYYY MM DD hh:mm\"\r\n                    },\r\n                    {\r\n                        \"id\": item.feed,\r\n                        \"label\": item.feed,\r\n                        \"dimension\": \"feed\",\r\n                        \"dimensionLabel\": \"Feed\",\r\n                        \"role\": \"metric\"\r\n                    },\r\n                    {\r\n                        \"id\": item.title,\r\n                        \"label\": item.title,\r\n                        \"dimension\": \"news\",\r\n                        \"dimensionLabel\": \"Message\",\r\n                        \"role\": \"metric\"\r\n                    }\r\n                ],\r\n                value:[item.factor]\r\n                    \r\n            }\r\n        })        \r\n    };\r\n"
  },
  "line": 37
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 37
 },
 {
  "processId": "get",
  "settings": {
   "var": "table",
   "as": "table"
  },
  "line": 37
 },
 {
  "processId": "line",
  "settings": {
   "x": -1,
   "y": [
    0
   ],
   "cat": -2
  },
  "line": 37
 }
]