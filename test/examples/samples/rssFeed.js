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
   "value": "\r\n    $scope.news = $scope.relevantNews.map(function(n){\r\n        var res = $scope.news.filter(function(item){\r\n                return item.news.title[0] == n.label})[0]    \r\n        res.factor = n.value\r\n        return res\r\n    })\r\n    .map(function(item){\r\n        return {\r\n            feed: item.feed,\r\n            pubDate: _util.format.date(new Date(item.news.pubDate[0]),\"DD MMM hh:mm\"),\r\n            title: item.news.title[0],\r\n            category:(item.news.category) ? item.news.category[0] : '',\r\n            description: item.news.description[0],\r\n            link: item.news.link[0],\r\n            size: item.factor*0.3+0.7\r\n        }\r\n    })\r\n    .sort(_util.comparator['Date']['Z-A'](function(item){\r\n        return item.pubDate\r\n    }));\r\n"
  },
  "line": 37
 },
 {
  "processId": "javascript",
  "settings": {},
  "line": 37
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    <div style=\"border-bottom:1px solid #999; padding:0.2em;\">\r\n        <div    class=\"row\" \r\n                style=\" margin:1.5em 0 0 0; \r\n                        font-size:x-small;\r\n                        font-weight:bold;padding:0;\r\n                        line-height:1.0\"\r\n        >\r\n            <span class=\"right\"><%=pubDate%></span>\r\n        </div>\r\n        <div    class=\"row\" \r\n                style=\" margin:0 0 0 0; \r\n                        font-size:x-small;\r\n                        font-weight:bold;padding:0;\r\n                        line-height:1.0\"\r\n        >\r\n            <span class=\"right\">\r\n                <%=feed%>::<%=(category)?((category._text)?category._text:category):''%>\r\n            </span>\r\n        </div>\r\n        <a  href=\"<%=link%>\" target=\"blank\" \r\n            style=\" line-height:1.0;\r\n                    margin:0 0 0 0;\r\n                    padding:0;\r\n                    font-size:<%=size%>em;\"\r\n        >\r\n            <%=title%>\r\n        </a>\r\n        <div    class=\"row\" \r\n                style=\" margin:0 0 0 0.5em; \r\n                        font-size:small;\r\n                        line-height:1.0;\"\r\n        >\r\n            <%=description%>\r\n        </div>\r\n    </div> \r\n"
  },
  "line": 37
 },
 {
  "processId": "html",
  "settings": {},
  "line": 37
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "htmlTemplate"
  },
  "line": 37
 },
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    var compiledHtml = _.template($scope.htmlTemplate)\r\n    $scope.news = $scope.news.map(function(item){\r\n        return compiledHtml(item)\r\n    }).join(\"\");\r\n"
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
  "processId": "wrap",
  "settings": {
   "tag": "div",
   "class": "row",
   "style": "margin:0.25em 0.2em; padding:0.5em;"
  },
  "line": 37
 },
 {
  "processId": "return",
  "settings": {},
  "line": 37
 }
]