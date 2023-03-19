[![npm](https://img.shields.io/npm/dt/pinguage.svg?style=flat-square)](https://npmjs.com/package/pinguage) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![npm](https://img.shields.io/npm/v/pinguage)](https://www.npmjs.com/package/pinguage)[![npm](https://img.shields.io/npm/dt/pinguage.svg)](https://www.npmjs.com/package/pinguage)[![npm](https://img.shields.io/npm/dm/pinguage.svg)](https://www.npmjs.com/package/pinguage)

## Pinguage v1.2.0 
<h1><p style="text-align: center" align="center">Pinguage</p></h1>
                
<h1><p><i>Pinguage - Get ping in one click!</i></p> </h1>

## Install to YARN
```shell
yarn add pinguage
```

## Install to NPM
```shell
npm install pinguage --save
```

## Usage to get ping
```javascript
import ping from "pinguage";

async function get () {
const body = await ping.request('http://localhost:3044');

console.log(body)
}

get()
```

## Result to get ping
```js
{ ping: 15, request: 'GET', url: 'http://localhost:3044' }
```

## Usage to get ping, to url
```javascript
import ping from "pinguage";

async function get () {
const body = await ping.request('https://api.vk.com');

console.log(body)
}

get()
```

## Result to get ping
```js
{ ping: 46, request: 'GET', url: 'https://api.vk.com' }
```

## Usage to EXPRESS-server
```javascript
var app = require('express')();
var pinguage = require('pinguage');

app.get('/ping', async (req, res) => {
var request = await pinguage.request('https://api.vk.com')

res.send({ ping: request.ping })
})

app.listen(3000, () => {
console.log('On!')
});
```

## Usage to HTTP-server
```javascript
var http = require("http");
var ping = require('pinguage');

http.createServer(async (request, response) => {
var pinguage = await ping.request('https://api.vk.com');
response.end({ ping: pinguage.ping });
}).listen(3000);
```

## Usage to utilic prequest ping
```javascript
var pinguage = require('pinguage');

async function getPing() {

const body = await pinguage.prequest('https://api.vk.com');

console.log(body)
}

getPing()
```

## Result to prequest ping
```js
{ ping: 26.308769, request: 'GET', url: 'https://api.vk.com' }
```

## Usage to get ping, 1.8.0
```javascript
var ping = require('pinguage');

async function get() {
const body = await ping.get('https://vk.com');
             
console.log(body)
}

get()
```

## Result to get ping, 1.8.0
```js
config: {                                           
    time: 20.462693,
    timestamp: 2.956308,                              
    cpu: 1.110539,
    iclud: 0,                                         
    ping: [Function: ping],
    get: [Function: get]
  },
  ping: 20.462693,
  minimum: 1.110539,
  avg: 2.956308,
  maximum: 20.462693
}
```


<h1><p style="text-align: center" align="center">Status</p></h1>
<p style="text-align: center" align="center"><a href="#">- Get Ping</a></p>
<p style="text-align: center" align="center"><a href="#">- Get Max/Min/Avg Ping to one click</a></p>
<p style="text-align: center" align="center"><a href="#">- Get Request Ping</a></p>

<h1><p style="text-align: center" align="center">Support</p></h1>

## Support

<p style="text-align: center" align="center"><a href="https://qiwi.com/p/NODEJSLUPUS"><img scr="https://sun9-83.userapi.com/impg/9JsEyB1iBNukDvQ2k8Vf_jeXNA9fx1Fk3TuhDw/T98hP8JqGug.jpg?size=604x352&quality=96&sign=abfbfb49bd388a2ec020bd96cc7fd62f&c_uniq_tag=u7e5F1ZhrxdV8g2hOAhNEAbdTz-htHPSQlxWCQEoMJk&type=album">Пожертвовать / Support</img></a></p>
<p style="text-align: center" align="center">Ник QIWI: NODEJSLUPUS</p>

## Contacts

<p style="text-align: center" align="center"><a href="https://vk.com/swedesdart_rus">- VK</a></p>
<p style="text-align: center" align="center"><a href="https://github.com/ostrovsky-swedesdart">- GitHub</a></p>
