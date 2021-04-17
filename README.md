# Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e073133da016adbd3a56)

# Curl Requests

#### POST REQUEST
```
curl 'http://localhost:5000/tabs' -X POST -H 'content-type: application/json' -H 'accept: application/json, text/plain, */*' --data-binary '{ "name" : "Testing 123", "description" : "The chronic of the disease at hand", "dataPoints" : [ { "dataType" : "selection", "label" : "ECOG_SCORE", "description" : "ECOC score at the start of IO", "options": ["0","1","2","3","4","5","unknown"] }, { "dataType" : "text", "label" : "ECOG_HB_LEVEL", "placeholder" : "g/dL", "description" : "Hemogolobin level at the start of IO (g/dL)" } ]}'
```

#### RESPONSE
```
{"_id":"607a8bdb7bd9309c9baec9e3","name":"Testing 123","description":"The chronic of the disease at hand","dataPoints":[{"options":["0","1","2","3","4","5","unknown"],"_id":"607a8bdb7bd9309c9baec9e4","dataType":"selection","label":"ECOG_SCORE","description":"ECOC score at the start of IO"},{"options":[],"_id":"607a8bdb7bd9309c9baec9e5","dataType":"text","label":"ECOG_HB_LEVEL","description":"Hemogolobin level at the start of IO (g/dL)"}],"createdAt":"2021-04-17T07:18:51.142Z","updatedAt":"2021-04-17T07:18:51.142Z","__v":0}
```

#### GET REQUEST
```
curl 'http://localhost:5000/tabs' -H 'accept: application/json'
```

#### RESPONSE
```
[{"_id":"607a8123b54e018e88f92e0e","name":"Lalalla","description":"The chronic of the disease at hand","dataPoints":[{"options":["0","1","2","3","4","5","unknown"],"_id":"607a8123b54e018e88f92e0f","dataType":"selection","label":"ECOG_SCORE","description":"ECOC score at the start of IO"}],"createdAt":"2021-04-17T06:33:07.069Z","updatedAt":"2021-04-17T07:07:21.085Z","__v":0},{"_id":"607a8152b54e018e88f92e10","name":"Disease history","description":"The chronic of the disease at hand","dataPoints":[{"options":["0","1","2","3","4","5","unknown"],"_id":"607a8152b54e018e88f92e11","dataType":"selection","label":"ECOG_SCORE","description":"ECOC score at the start of IO"},{"options":["0","1","2","3","4","5","unknown"],"_id":"607a8152b54e018e88f92e12","dataType":"selection","label":"ECOG_SCORE","description":"ECOC score at the start of IO"}],"createdAt":"2021-04-17T06:33:54.231Z","updatedAt":"2021-04-17T06:33:54.231Z","__v":0}]
```

#### PUT REQUEST
```
curl 'http://localhost:5000/tabs/607a8123b54e018e88f92e0e' -X PUT -H 'content-type: application/json' -H 'accept: application/js, */*' --data-binary '{ "name" : "Hello World"}'
```

#### RESPONSE
```javascript
updated{ _id: 607a8123b54e018e88f92e0e,
  name: 'Hello World',
  description: 'The chronic of the disease at hand',
  dataPoints:
   [ { options: [Array],
       _id: 607a8123b54e018e88f92e0f,
       dataType: 'selection',
       label: 'ECOG_SCORE',
       description: 'ECOC score at the start of IO' } ],
  createdAt: 2021-04-17T06:33:07.069Z,
  updatedAt: 2021-04-17T07:07:21.085Z,
```


#### DELETE REQUEST
```
curl 'http://localhost:5000/tabs/607a8123b54e018e88f92e0e' -X DELETE -H 'content-type: application/json' -H 'accept: application/json'
```

#### RESPONSE
```javascript
deleted { _id: 607a8123b54e018e88f92e0e,
  name: 'Lalalla',
  description: 'The chronic of the disease at hand',
  dataPoints:
   [ { options: [Array],
       _id: 607a8123b54e018e88f92e0f,
       dataType: 'selection',
       label: 'ECOG_SCORE',
       description: 'ECOC score at the start of IO' } ],
  createdAt: 2021-04-17T06:33:07.069Z,
  updatedAt: 2021-04-17T07:07:21.085Z,
```

# Improvements to do

- Separtate modules for controller, schema and make a router for keeping scalibility in mind. Checkout https://github.com/mnauf/api_design, where I have developed like this
- Put mongodb credentials in environment variable
- Add testing