const mongoose = require('mongoose')
const schema = mongoose.Schema;


const tools = new schema({
    title : {
        type : String,
        required: true
    },
    link: {
        type : String
    },
    description : {
        type: String
    },

    tags: [{
        type: [String],

    }]

});

const ModelUser = mongoose.model('tools', tools)

module.exports = ModelUser
