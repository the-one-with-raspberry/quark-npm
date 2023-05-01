const quark = require("@berriz44/quark");
for (let f of quark) {
    console.log(f);
    console.log(typeof f);
    if (f) {
        console.log(true)
    } else {
        console.log(false)
    }
}