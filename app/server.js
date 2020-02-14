
console.log('INICIO');

var Redis = require("ioredis");

var cluster = new Redis.Cluster([
  {
    port: 7000,
    host: "10.0.0.2"
  },
  {
    port: 7001,
    host: "10.0.0.3"
  },
  {
    port: 7002,
    host: "10.0.0.4"
  }
], {enableReadyCheck: false});

console.log(cluster);


cluster.set("foo", "bar");
cluster.get("foo", function(err, res) {
  // res === 'bar'
  console.log(res);
});


console.log('FIM');
