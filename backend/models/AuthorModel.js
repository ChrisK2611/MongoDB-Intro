import mongoose from "mongoose"

// Das Schema definiert die Struktur eines "Author"-Dokuments in der MongoDB-Datenbank. 
// Das Mongoose-Modell ermöglicht den Zugriff auf die Datenbank und bietet Methoden
// zum Erstellen, Lesen, Aktualisieren und Löschen von Autoren in der Datenbank. 

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is a required field"],
    },
    role: {
        type: String,
        enum: {
            values: ["admin", "user"],
            message: "invalid role"
        },
        default: "user"
    }
})

// const authorSchema = mongoose.Schema({ ... });: Definiert ein Mongoose-Schema mit den gewünschten Feldern und deren Konfiguration. Das Schema besteht aus den folgenden Feldern:

// name: Ein erforderliches Feld vom Typ String mit einer Mindestlänge von 2 und einer Höchstlänge von 30 Zeichen, das den Namen des Autors enthält.
// email: Ein erforderliches Feld vom Typ String, das die E-Mail-Adresse des Autors enthält. Wenn die E-Mail-Adresse nicht angegeben wird, wird die Meldung "Email is a required field" zurückgegeben.
// role: Ein optionales Feld vom Typ String, das die Rolle des Autors beschreibt. Die möglichen Werte für die Rolle sind "admin" oder "user". Wenn kein Wert angegeben wird, wird die Standardrolle "user" verwendet.
// export const Author = mongoose.model("Author", authorSchema): Erstellt ein Mongoose-Modell mit dem Namen "Author", das auf dem definierten Schema basiert. Das Modell wird exportiert, um in anderen Teilen des Codes verwendet zu werden.

export const Author = mongoose.model("Author", authorSchema)