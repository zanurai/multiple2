
let limit = 100;
let a = 1;

function printTable(limit) {
    const table = document.getElementById("table");
    for (let a = 1; a <= limit; a++) {
        const box = document.createElement("div");
        //console.log(a)

        for (let b = 1; b <= 10; b++) {
            const row = document.createElement("div")
            //console.log(b)
            // box.style.padding = "15px";
            // box.style.border = "1px solid black"
            // box.style.width = "100px"

            box.classList.add("box");

            row.innerHTML = a + " x " + b + " = " + a * b;
            //console.log(row)
            box.appendChild(row);
        }
        table.appendChild(box);
    }
}

printTable(limit);
