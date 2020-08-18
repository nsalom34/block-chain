const Block = require('./block');
const Chain = require('./chain');
const moment = require('moment');

let blockChain = new Chain();
blockChain.add(
    new Block({
        index: 1,
        timestamp: moment.utc().format('YYYYMMDDHHmmss'),
        data: { sender: 'Iris Ljesnjanin', recipient: 'Cosima Mielke', quantity: 50 },
    })
);
blockChain.add(
    new Block({
        index: 2,
        timestamp: moment.utc().format('YYYYMMDDHHmmss'),
        data: { sender: 'Nicolas Salom', recipient: 'Paige', quantity: 500 },
    })
);
// Is Valid ?
console.log(blockChain.valid());

// See my chain
console.log(JSON.stringify(blockChain));

// Alter data in my chain
blockChain.blockchain[1].data = '4545';

// Is Valid?
console.log(blockChain.valid());
