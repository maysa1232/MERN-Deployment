const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/novexm_db", {
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong! I lost the mongoose", err));