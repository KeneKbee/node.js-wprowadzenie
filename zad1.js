setTimeout(() => {console.log("setTimeout")}, 1000); // 3

setImmediate(() => {console.log("setImmediate")}); // 2

new Promise((res) => {setTimeout(() => {res()}, 1000)}).then(() => {console.log("Promise.then")}); // 4

process.nextTick(() => {console.log("process.nextTick")}); // 1