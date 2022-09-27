const container = document.querySelector('#container')
console.log(container);

for (let link of IMAGE_LINKs) {
    let image = document.createElement("img")
    image.src = link;
    container.appendChild(image)

    image.addEventListener("click", enlargeImage)
}

function enlargeImage(e) {
    const selected = document.querySelector('.selected')

    if (selected) {
        selected.classList.remove("selected")
    }

    e.currentTarget.classList.add("selected")
}