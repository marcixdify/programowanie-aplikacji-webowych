import { Note } from './note'
import { AppStorage } from './appStorage';
import firebase from "firebase"
import { firebaseConfig } from "./config"
const noteElement = new Note();


const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();

export class App {
    btnAdd: HTMLButtonElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    addedData: string;


    constructor() {
        this.getInput();
        this.getNotes()
    }

    async getNotes() {
        const col = await db.collection('notes').get();
        let data = col.docs.map(doc => doc.data());
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            noteElement.createBox(element, element.baseID)
        }
    }

    getInput() {
        this.btnAdd = document.querySelector(".btn-add")
        this.titleInput = document.querySelector("#header-input");
        this.descriptionInput = document.querySelector("#text-input");
        this.btnAdd.addEventListener("click", () => this.showData());
    }

    showData() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const appStorage = new AppStorage(title, description)

    }

}
