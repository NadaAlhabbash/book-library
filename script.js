//first defining our array
let books =[
    {
        title: "book1",
        author: "John Doe",
        edition: 12,
        image: "img/book-4.png"
    },
    {
        title: "book1",
        author: "John Doe",
        edition: 12,
        image: "img/book-4.png"
    }
]
/*
<section class="home" id="home">

    <div class="row">
        <div class="books-slider">
            <div>
                <a href="#" ><img src="img/book-1.png" alt=""></a>
                <a href="#" ><img src="img/book-2.png" alt=""></a>
                <a href="#" ><img src="img/book-3.png" alt=""></a>
<!--            <a href="#" ><img src="img/book-4.png" alt=""></a>-->
<!--            <a href="#" ><img src="img/book-5.png" alt=""></a>-->
<!--            <a href="#" ><img src="img/book-6.png" alt=""></a>-->
            </div>
            <img src="img/stand.png" class="stand" alt="">
        </div>

    </div>
movieTable.setAttribute("class", "table table-striped");
</section>
*/
 //CREATING THE SECTION ELEMENT
// const book= document.getElementById("book")
books.map(()=> {
let section = document.createElement("section")
let div1 = document.createElement("div")
let div2 = document.createElement("div")
let div3 = document.createElement("div")
let a = document.createElement("a")            //I think we should loop it
let bookShelf = document.createElement("img")

section.setAttribute("class", "home")
div1.setAttribute("class", "row")
div2.setAttribute("class", "books-slider")
a.setAttribute("href","#")
// a.innerHTML=1
section.appendChild(div1)
div1.appendChild(div2)
div2.appendChild(div3)
div3.appendChild(a)
div2.appendChild(bookShelf)
// book.appendChild(div1)

document.getElementById("home").appendChild(section);
})

