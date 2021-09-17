import { Note } from './note'

import { AppStorage } from './appStorage';
const note = new Note();


export class App {
    btnAdd: HTMLButtonElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    selectorInput: HTMLSelectElement;
    data: string;


    constructor() {
        this.getInput();
        this.getData();
    }

    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('Note' + i);
                const localStorageName = 'Note' + i;
                const parseData = JSON.parse(data);
                note.createBox(parseData, localStorageName)

            }
        } else {
            return {};
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
        const appStorage = new AppStorage(title,description)

    }

}
