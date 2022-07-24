let books =[
    {
        id:1,
        title: "book1",
        author: "John Doe",
        edition: 12,
        image: "img/book-1.png"
    },
    {
        id:2,
        title: "book2",
        author: "sherlock",
        edition: 5,
        image: "img/book-3.png"
    }
]

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
             console.log(favourites);


         const isFound = favourites.some(element => {
             if (element.id === el.id) {
                 return true;
             }
         });
         if(!isFound){
             favourites.push(el)
             localStorage.setItem("favourites", JSON.stringify(favourites))
             favouriteCard(favourites)
         }
         else {
             alert("Book already exists");
         }
     })

     p.addEventListener("click",e=>{
         //deletet function
     })

}
books.map((el)=>{createlement(el)});

// getting data from the form
document.getElementById("newbook").addEventListener("click", (e) =>{
    e.preventDefault()
    const title =  document.getElementById("bname").parentNode[0].value;
    const author =  document.getElementById("author").parentNode[1].value;
    const edition =  document.getElementById("edition").parentNode[2].value;
    let image =  document.getElementById("image").parentNode[3].value;
    const path = 'img/'
    image = path.concat(JSON.stringify(image).slice(15,-1))
    const id=books.length;
    const newbook={id, title, author, edition, image}
    books.push(newbook)
    // console.log(newbook)
    createlement(newbook)

} )

