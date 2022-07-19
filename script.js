//first defining our array
let books =[
    {
        title: "book1",
        author: "John Doe",
        edition: 12,
        image: "img/book-1.png"
    },
    {
        title: "book2",
        author: "sherlock",
        edition: 5,
        image: "img/book-3.png"
    }

]



 function createlement(el){
     let div5 = document.createElement("div")
     div5.setAttribute("class", "carousel-item")
     let image = document.createElement("img")
     let title = document.createElement("h2")
     let author = document.createElement("p")
     let edition = document.createElement("p")
     let button = document.createElement("button")
     button.setAttribute("class", "btn btn-warning")
     let i = document.createElement("i")
     i.setAttribute("class", "fa fa-star")
     image.src=el.image
     title.innerText=el.title
     author.innerText=el.author
     edition.innerText=el.edition

     div5.appendChild(image)
     div5.appendChild(title)
     div5.appendChild(author)
     div5.appendChild(edition)
     button.appendChild(i)
     div5.appendChild(button)

     document.getElementById("slider").appendChild(div5);

}
books.map((el)=>{createlement(el)});


