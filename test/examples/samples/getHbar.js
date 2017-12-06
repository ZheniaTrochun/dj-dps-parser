[
 {
  "processId": "context",
  "settings": {
   "value": "\r\n    \"58d143f8087c0e04000ecd7f\"\r\n"
  },
  "line": 2
 },
 {
  "processId": "json",
  "settings": {},
  "line": 2
 },
 {
  "processId": "set",
  "settings": {
   "undefined": "id"
  },
  "line": 5
 },
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "table"
  },
  "line": 8
 },
 {
  "processId": "format",
  "settings": {
   "undefined": 2
  },
  "line": 10
 },
 {
  "processId": "aggregate",
  "settings": {
   "for": "row",
   "add": [
    "sum"
   ]
  },
  "line": 11
 },
 {
  "processId": "last",
  "settings": {
   "for": "col"
  },
  "line": 12
 },
 {
  "processId": "order",
  "settings": {
   "for": "row",
   "by": 0,
   "as": "za"
  },
  "line": 13
 },
 {
  "processId": "limit",
  "settings": {
   "undefined": 15
  },
  "line": 14
 },
 {
  "processId": "transpose",
  "settings": {},
  "line": 15
 },
 {
  "processId": "hbar",
  "settings": {},
  "line": 17
 }
]