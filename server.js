var db = require("./config/mongoose")();
var server = require("./config/express");
var environment = require("./config/environment/development");
var cluster = require("cluster");
var numberofCpus =  require('os').cpus().length;
console.log(numberofCpus);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numberofCpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} 
else{
  console.log(`Worker ${process.pid} started`);
server.listen(environment.port);}