[
 {
  "processId": "load",
  "settings": {
   "cache": "{{id}}",
   "as": "table"
  },
  "line": 9
 },
 {
  "processId": "format",
  "settings": {
   "undefined": 2
  },
  "line": 11
 },
 {
  "processId": "aggregate",
  "settings": {
   "for": "col",
   "add": [
    "sum"
   ]
  },
  "line": 12
 },
 {
  "processId": "last",
  "settings": {},
  "line": 13
 },
 {
  "processId": "order",
  "settings": {
   "for": "col",
   "by": 0,
   "as": "za"
  },
  "line": 14
 },
 {
  "processId": "hbar",
  "settings": {},
  "line": 16
 }
]