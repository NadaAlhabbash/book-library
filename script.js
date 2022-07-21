//first defining our array



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
         addToFavourite(el)
     })

     p.addEventListener("click",deletebook())

}
books.map((el)=>{createlement(el)});



// getting data from the form



//deleting book from books array
function deletebook(){

    //

}
