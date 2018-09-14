//imports
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
//config
const port = 5000;
const db_name = "osblogger";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + db_name, { useNewUrlParser: true });//mongo stuff
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.use(require("morgan")("dev"));

//sending build
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//routes
app.use('/api/article', require('./routes/article'));

//hooking port
app.listen(port, () => {
    console.log("Server started on port", port);
});