var tasksDiv = document.getElementById("tasks");
var girdDiv = document.getElementById("girdDiv");
var ascDiv = document.getElementById("ascDiv");
var descDiv = document.getElementById("descDiv");
var resetDiv = document.getElementById("resetDiv");
var data = [];

const fetchData = async () => {
    let json = await fetch("../json/data.json");
    let data = await json.json();
    return data;
};

window.onload = async () => {
    data = await fetchData().then((data) => data);
    render(data);
};

const render = (data) => {
    data.map((item) => {
        let div = document.createElement("div");
        div.classList.add("task");
        div.classList.add(item.title.toLowerCase().replace(/ /g, "-"));
        div.innerHTML = `
            <p class="task-title">${item.title}</p>
        <p class="task-description">
            ${item.description}
        </p>
        <div class="task-reactions">
            <div class="comments">
                <div>
                    <i class="fas fa-thin fa-message"></i>
                    <span>${item.comments}</span>
                </div>
                <div>
                    <i class="fas fa-thin fa-paperclip"></i>
                    <span>${item.pin}</span>
                </div>
            </div>
            <div class="assigned">
                ${item.users
                    .map(
                        (img, index) => `<img src="${img}" alt="image${index}">`
                    )
                    .join("")}
                <div class="plus">
                    <i class="fas fa-thin fa-plus"></i>
                </div>
            </div>
        </div>`;
        tasksDiv.appendChild(div);
    });
};

girdDiv.addEventListener("click", async (e) => {
    data = await fetchData().then((data) => data);

    tasksDiv.innerHTML = "";
    render(data);

    ascDiv.classList.remove("active");
    descDiv.classList.remove("active");
});

ascDiv.addEventListener("click", (e) => {
    data = data.sort(sortASC);

    tasksDiv.innerHTML = "";
    render(data);

    ascDiv.classList.add("active");
    descDiv.classList.remove("active");
});

descDiv.addEventListener("click", (e) => {
    data = data.sort(sortDESC);

    tasksDiv.innerHTML = "";
    render(data);

    descDiv.classList.add("active");
    ascDiv.classList.remove("active");
});

resetDiv.addEventListener("click", async (e) => {
    data = await fetchData().then((data) => data);

    tasksDiv.innerHTML = "";
    render(data);

    ascDiv.classList.remove("active");
    descDiv.classList.remove("active");
});

const sortASC = (a, b) => {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
};

const sortDESC = (a, b) => {
    if (a.title > b.title) {
        return -1;
    }
    if (a.title < b.title) {
        return 1;
    }
    return 0;
};
