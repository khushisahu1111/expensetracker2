// const mongoose = require('mongoose');
// const db =  async () => {
//     try{
//         mongoose.set('strictQuery',false)
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('Db Connected')

//     }catch(error){
//         console.log('Db connection Error');
//     }
// }

// module.exports = { db };


// const mongoose = require('mongoose');

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         console.log('Connecting to:', process.env.MONGO_URL);

//         await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log('Db Connected');
//     } catch (error) {
//         console.error('Db connection Error:', error.message);
//     }
// };

// module.exports = { db };


const mongoose = require('mongoose');
//const User = require('./models/IncomeModel');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        console.log('Connecting to:', process.env.MONGO_URL);

        await mongoose.connect(process.env.MONGO_URL);

        console.log('Db Connected');
    } catch (error) {
        console.error('Db connection Error:', error.message);
    }
};

module.exports = { db };
