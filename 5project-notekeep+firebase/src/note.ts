

import { db } from "./app"

//create box
export class Note {
    
    createBox(data: any, localStorageName: string) {
        const title = data.title;
        const description = data.description;
        const container = document.querySelector(".new-text");
        const divCreateForALL = document.createElement("div");
        const buttonElement = document.createElement("button");
        buttonElement.classList.add("del-btn");
        buttonElement.addEventListener("click", function () {
            divCreateForALL.parentElement.removeChild(divCreateForALL)
            localStorage.removeItem(localStorageName);
        })

        buttonElement.innerText = "zamknij";
        divCreateForALL.classList.add("container-for-all");
        this.createHeader(divCreateForALL, title);
        this.createText(divCreateForALL, description);  
        container.appendChild(divCreateForALL);
        divCreateForALL.appendChild(buttonElement);

    }

    createHeader(elem: HTMLDivElement, title: string) {
        const divElement = document.createElement("span");
        divElement.classList.add("containerHeader");
        divElement.innerText = title;
        elem.appendChild(divElement)
    }
    createText(elem: HTMLDivElement,description: string) {
        const divElement = document.createElement("span");
        divElement.classList.add("containerTitle");
        divElement.innerHTML = description;
        elem.appendChild(divElement)
    }

}

