const Mongoose = require("mongoose")

const localDB = `mongodb+srv://bmartindaniel:mnjXeklwdTFZG9nH@cluster0.0ga9cxs.mongodb.net/test`

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB