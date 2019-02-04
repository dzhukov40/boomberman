const {threadId, parentPort, workerData} = require('worker_threads');

parentPort.postMessage(`Hello from thread #${threadId}.`);

console.log(workerData);