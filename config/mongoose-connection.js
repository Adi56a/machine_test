const mongoose  = require('mongoose')


mongoose.connect(process.env.MONGO_URL)
.then(function(){
 console.log('Connected to DataBase Successfully')
})
.catch(function(err){
 console.log('Something went wrong connecting with database',err)
})

module.exports = mongoose.connection;