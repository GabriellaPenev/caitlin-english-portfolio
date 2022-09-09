const app = {}

const button = document.querySelector('.btn');

let i = 0;
const txt = 'I write with heart and curiosity...';
const speed = 65;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".autotype").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const displayButton = () => {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};

const scrollToTop = () => {
    button.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
};



app.init = () => {

    displayButton();
    scrollToTop();
    window.onload = typeWriter();

}

app.init();

