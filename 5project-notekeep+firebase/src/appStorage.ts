import { Note } from './note'
import { db } from "./app"
const noteElement = new Note();


interface IAppStorage {
    title: String;
    description: String;
}

export class AppStorage implements IAppStorage {
    title: String;
    description: String;

    constructor(title: string, description: string) {
        this.addNote(title, description)
    }


    async addNote(title: string, description: string) {
        const noteLenght = await (await db.collection('notes').get()).docs.map(doc => doc.data()).length;
        const note = {
            title: title,
            description: description,
            id:noteLenght,
        }
        await db.collection('notes').add(note);
        //upadate id
        const col = await db.collection("notes")
        .orderBy("id", "asc").get();        
        const noteList = col.docs.map(doc=>doc.id)
        const noteID = noteList[noteLenght]
       
        noteElement.createBox(note, noteList[noteLenght]);
    }
}

