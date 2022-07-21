
const ae = document.getElementById('favbook')
function favouriteCard(el){
    console.log(el)
    const div5 = document.createElement("div")
    div5.setAttribute("class", "carousel-item")
    const image = document.createElement("img")
    const title = document.createElement("h2")
    const author = document.createElement("p")
    const edition = document.createElement("p")
    const button = document.createElement("button")
    button.setAttribute("class", "btn btn-warning")
    const i = document.createElement("i")
    i.setAttribute("class", "fa fa-star")
    i.setAttribute("id",el.id)
    button.setAttribute("id",el.id)
    const p = document.createElement("p")
    p.setAttribute("class","delete-book")
    p.setAttribute("id","delete-book")

    image.src=el.image
    title.innerText=el.title
    author.innerText=el.author
    edition.innerText=el.edition
    p.innerText="x"

    div5.appendChild(image)
    div5.appendChild(title)
    div5.appendChild(author)
    div5.appendChild(edition)
    button.appendChild(i)
    div5.appendChild(button)
    div5.appendChild(p)
    ae.appendChild(div5)



      p.addEventListener("click",deleteFavouriteBook(el))




}

// console.log(favourites)

let lk = JSON.parse(localStorage.getItem("favourites")) || [];
console.log(lk);
lk.map((el)=> favouriteCard(el));


function deleteFavouriteBook(removed){
    console.log(removed)
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    console.log(favourites)
    favourites = favourites.filter((el)=>el.id!==removed.id)
    localStorage.setItem("favourites",JSON.stringify(favourites))
}