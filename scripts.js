const app = {}


let i = 0;
const txt = 'I write with heart and curiosity...';
const speed = 155;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".autotype").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const button = document.querySelector('.btn');

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

