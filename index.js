const express = require('express');
const redis = require('redis');
const process = require('process');
const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port:6379
});

client.set('visits',0);

app.get('/', (req,res) => {
    client.get('visits', (err,visits) => {
        res.send('Number of Visiter are '+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8080, () => {
    console.log('Listening on Port 4001 ...');
});
