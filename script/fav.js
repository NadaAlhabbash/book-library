const a = document.getElementById("bookscard");
function favouriteCard(el){
    // console.log(el)
    /*
    *
    *             <div class="card">
                <img src="img/blog-3.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Book Title</b></h4>
                    <p>Author</p>
                    <p>edition</p>
                    <i class="fa fa-trash"></i>

                </div>
            </div>

    *
    * */


    const div = document.createElement("div")
    div.setAttribute("class", "card")
    div.setAttribute("id", "card")
    const image = document.createElement("img")
    // div.setAttribute("style", "width:100%")
    const div2 = document.createElement("div")
    // div2.setAttribute("class", "container")
    const title = document.createElement("h4")
    const author = document.createElement("p")
    const b = document.createElement("b")
    const edition = document.createElement("p")
    const i = document.createElement("i")
    i.setAttribute("class", "fa fa-trash")
    i.setAttribute("id",el.id)

    image.src=el.image
    title.innerText=el.title
    author.innerText=el.author
    edition.innerText=el.edition

    div2.appendChild(image)
    div.appendChild(div2)
    div2.appendChild(title)
    title.appendChild(b)
    div2.appendChild(author)
    div2.appendChild(edition)
    div2.appendChild(i)
    a.appendChild(div)

      i.addEventListener("click",e=> {
          deleteFavouriteBook(el.id)
      })
}

let lk = JSON.parse(localStorage.getItem("favourites")) || [];
// console.log(lk);
lk.map((el)=> favouriteCard(el));

function deleteFavouriteBook(removed){
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    console.log(favourites)
    favourites = favourites.filter((el)=>el.id!==removed)
    localStorage.setItem("favourites",JSON.stringify(favourites))
    document.getElementById("card").innerHTML=""
    favourites.map(el=>{
            favouriteCard(el)

        }
    )

}