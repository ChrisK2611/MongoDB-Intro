import mongoose from "mongoose";


// verbindung mit der Datenbank aufbauen (hinter den port kommt der Name der Datenbank)
mongoose.connect(process.env.MONGO_URI)