// let books =[
//     {
//         id:1,
//         title: "book1",
//         author: "John Doe",
//         edition: 12,
//         image: "img/book-1.png"
//     },
//     {
//         id:2,
//         title: "book2",
//         author: "sherlock",
//         edition: 5,
//         image: "img/book-3.png"
//     }
// ]

 function createlement(el){
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
     document.getElementById("slider").appendChild(div5);



     button.addEventListener("click",e=>{
         let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
         // console.log(favourites);
         favourites.push(el)
         localStorage.setItem("favourites",JSON.stringify(favourites))
         favouriteCard(favourites)

     })

     p.addEventListener("click",deletebook())

}




// getting data from the form
document.getElementById("newbook").addEventListener("click", e =>{
    e.preventDefault()
    let books = JSON.parse(localStorage.getItem("books")) || [];
    // console.log(favourites);
    localStorage.setItem("books",JSON.stringify(books))
    books.push(newbook)
    addNewBook(e)
} )


function addNewBook({target:{parentNode}}){

    const title =  document.getElementById("bname").parentNode[0].value;
    const author =  document.getElementById("author").parentNode[1].value;
    const edition =  document.getElementById("edition").parentNode[2].value;
    let image =  document.getElementById("image").parentNode[3].value;
    const path = 'img/'
    image = path.concat(JSON.stringify(image).slice(15,-1))
    //console.log()
    //replace("C:...fakepath", "").........(.name;)
    const id=books.length;
    const newbook={id, title, author, edition, image}

    console.log(newbook)
    createlement(newbook)
    books.map((el)=>{createlement(el)});

}




//deleting book from books array
function deletebook(){

    //

}
