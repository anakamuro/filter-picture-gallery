const lists = document.querySelectorAll('.list');
const images = document.querySelectorAll('.image');

function filter(){
 lists.forEach((li) => {
    li.addEventListener('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter;

        images.forEach((image) => {
            if(filter === "all"){
                image.style.display = "block";
            } else {
                if(image.classList.contains(filter)){
                    image.style.display = 'block'
                } else {
                    image.style.display = "none"
                }
            }
        })
    })
})
}

filter();