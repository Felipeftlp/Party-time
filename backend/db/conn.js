const mongoose = require('mongoose');

async function main() {
    try{

        await mongoose.connect(
            'mongodb+srv://felipefreitas090:P69tzYlAYaeXpDD9@partytime.b7mcz.mongodb.net/?retryWrites=true&w=majority&appName=PartyTime'
        );

        console.log('Conectado ao banco');
    } catch(erro) {
        console.log(`Error: ${erro}`);
    }
}

module.exports = main