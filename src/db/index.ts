import mongoose from 'mongoose';

// Connection to db
const uri = "mongodb+srv://user:Aa123456@cluster0.z1spc.mongodb.net/TerminalY?retryWrites=true&w=majority";

export const connectToDB = () => {
	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	});
	const db = mongoose.connection;

	db.on("connected", function() {
		console.log("Connected to db");
	});

	db.on("error", function(error) {
		console.log("Connection to db failed:" + error);
	});

	db.on("disconnected", function() {
		console.log("Disconnected from db");
	});
};
