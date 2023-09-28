const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
const url = 'https://jsonplaceholder.typicode.com/todos/';

const switcher = async (count) => {
    const response = await fetch(url + `${count}`);
    const text = await response.json();
    card.innerHTML = `
    <p>${text.title}</p>
    <p style = 'color: ${text.completed ? 'green' : 'red'}'>${text.completed}</p>
    <p>${text.id}</p>    
    `

    btnNext.onclick = () => {
        count++;
        if (count > 200) {
            count = 1;
        }
        switcher(count);

    };

    btnPrev.onclick = () => {
        count--;
        if (count < 1) {
            count = 200;
        }
        switcher(count);

    };

};

switcher(1);






