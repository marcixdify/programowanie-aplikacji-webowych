class calculator {
        
    numberOfInputs = document.getElementById("addInput")! as HTMLInputElement;
    newInput: HTMLDivElement;
    inputArray: HTMLInputElement[] = [];
    userInput: Number;
    input: HTMLInputElement;
    sum: HTMLInputElement;
    avg: HTMLInputElement;
    min: HTMLInputElement;
    max: HTMLInputElement;


    constructor() {
        this.startApp();
    }

    startApp() {
        this.getOutputs();
        this.createInputs();
    }


    getOutputs() {
        this.sum = document.querySelector("#sum");
        this.avg = document.querySelector("#avg");
        this.min = document.querySelector("#min");
        this.max = document.querySelector("#max");
    }
    createInputs(){
        this.newInput = <HTMLDivElement>document.querySelector(".newInput");
        this.input = <HTMLInputElement>document.getElementById("addInput")


        this.input.addEventListener("blur", () => {
            const howmuch = +this.input.value;
            this.newInput.innerHTML = "";
            this.inputArray = [];

            for (let i = 0; i < howmuch; i++) {
                const input = document.createElement("input");
                input.id = `input${i}`;
                input.className = "data"
                input.type = "number";
                this.newInput.appendChild(input);
                this.inputArray.push(input);
                console.log(this.newInput)
                input.addEventListener("input", () => this.computeData());
            }
        })


    }

    computeData() {
        const values = this.inputArray.filter((el) => el.value.length > 0).map((el) => +el.value);
        if (values.length > 0) {
            const sum = values.reduce((a, b) => a + b, 0);
            const avg = sum / values.length;
            const min = Math.min(...values);
            const max = Math.max(...values);

            this.showOutput(sum, avg, min, max);
        } else {
            this.showOutput(0 , 0 , 0 , 0);
        }
        
    }

    showOutput(sum: number, avg: number, min: number, max: number) {
        this.sum.value = sum.toString();
        this.avg.value = avg.toString();
        this.min.value = min.toString();
        this.max.value = max.toString();
    }

}
const calculators = new calculator();


