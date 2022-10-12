const portfolio = {}

let i = 0;
const txt = '    I write with heart and curiosity...';
const speed = 145;
const button = document.querySelector('.btn');

portfolio.displayButton = () => {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};

portfolio.scrollToTop = () => {
    button.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
};

portfolio.homePage = () => {
    if (document.body.id === 'home') {
        window.onload = portfolio.typeWriter(); 
    } else {
        null
    }
}

portfolio.typeWriter = () => {
    if (i < txt.length) {
        document.querySelector(".autotype").innerHTML += txt.charAt(i);
        i++;
        setTimeout(portfolio.typeWriter, speed);
    }
}

portfolio.contactPage = () => {
    if (document.body.id === 'contact') {
        
        const form = document.getElementById("contact-form");

        async function handleSubmit(event) {
            event.preventDefault();
            const status = document.getElementById("form-status");
            const data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "Thanks for your message!";
                    form.reset()
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form. Please try again."
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your message. Please try again."
            });
        }
        form.addEventListener("submit", handleSubmit)
    } else {
        null
    }
}

portfolio.init = () => {
    portfolio.displayButton();
    portfolio.scrollToTop();
    portfolio.homePage();
    portfolio.contactPage()
}

portfolio.init();

