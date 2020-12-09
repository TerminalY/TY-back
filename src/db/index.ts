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
	
	db.once('open', function() {
	  console.log(`we're connected to db`);
	});
	
	db.on('error', err => {
		console.log(`Error in db : ${err}`);
	});
};
