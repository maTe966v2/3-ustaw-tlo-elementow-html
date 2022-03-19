const paragraphs = document.querySelectorAll("p");
const button = document.querySelector("button");

const setBackground = () => {
    return [...paragraphs].map((paragraph) => {
        paragraph.classList.value === "first"
            ? (paragraph.style.backgroundColor = "red")
            : (paragraph.style.backgroundColor = "yellow");
    });
};

button.addEventListener("click", setBackground);
