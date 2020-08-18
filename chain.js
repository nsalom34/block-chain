const Block = require('./block');
const moment = require('moment');

class Chain {
    constructor() {
        this.blockchain = [this.start()];
        this.difficulty = 4;
    }
    start() {
        return new Block({
            index: 0,
            timestamp: moment.utc().format('YYYYMMDDHHmmss'),
            data: 'Initial Block in the Chain',
            precedingHash: '0',
        });
    }
    getLatest() {
        return this.blockchain[this.blockchain.length - 1];
    }
    add(newBlock) {
        newBlock.precedingHash = this.getLatest().hash;
        newBlock.proofOfWork(this.difficulty);

        this.blockchain.push(newBlock);
    }
    valid() {
        let isValid = true;
        this.blockchain.forEach((block, index) => {
            if (index === 0) return;

            const currentBlock = this.blockchain[index];
            const precedingBlock = this.blockchain[index - 1];

            if (currentBlock.hash !== currentBlock.computeHash() || currentBlock.precedingHash !== precedingBlock.hash)
                isValid = false;
        });
        return isValid;
    }
}
module.exports = Chain;
