const fs = require('fs');

console.log("Customer places Order 1");
fs.readFile('order1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Order 1 Ready: ${data}`);
});

console.log("Customer places Order 2");
fs.readFile('order2.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Order 2 Ready: ${data}`);
});

console.log("Customer places Order 3");
fs.readFile('order3.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Order 3 Ready: ${data}`);
});

console.log("Restaurant continues taking new orders.");