[
 {
  "processId": "lib",
  "settings": {
   "url": "https://dj-dps.herokuapp.com/api/extension",
   "as": "def"
  },
  "line": 14
 },
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "json"
  },
  "line": 16
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "news"
  },
  "line": 17
 },
 {
  "processId": "call",
  "settings": {
   "ext": "def.load.rss.newsWordTable",
   "news": "{{news}}",
   "tags": "{{tags}}"
  },
  "line": 19
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
  "line": 25
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "res"
  },
  "line": 26
 },
 {
  "processId": "get",
  "settings": {
   "undefined": "res[0]"
  },
  "line": 27
 }
]