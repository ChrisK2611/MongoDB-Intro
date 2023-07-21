import mongoose from "mongoose";

// Das Schema definiert die Struktur eines "Post"-Dokuments in der MongoDB-Datenbank. 
// Das Mongoose-Modell ermöglicht den Zugriff auf die Datenbank und bietet Methoden 
// zum Erstellen, Lesen, Aktualisieren und Löschen von Beiträgen in der Datenbank.

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        immutable: true,
    },
    image: {
        type:{
            url: String,
            imageId: String,
        },
        required: true
    }

})

// const postSchema = new mongoose.Schema({ ... });: Definiert ein Mongoose-Schema mit den gewünschten Feldern und deren Konfiguration. Das Schema besteht aus den folgenden Feldern:
// title: Ein erforderliches Feld vom Typ String, das den Titel des Beitrags enthält.
// content: Ein optionales Feld vom Typ String, das den Inhalt des Beitrags enthält.
// author: Ein optionales Feld vom Typ String, das den Autor des Beitrags enthält.
// export const Post = mongoose.model("Post", postSchema): Erstellt ein Mongoose-Modell mit dem Namen "Post", das auf dem definierten Schema basiert. Das Modell wird exportiert, um in anderen Teilen des Codes verwendet zu werden.

export const Post = mongoose.model("Post", postSchema)