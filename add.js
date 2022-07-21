const form = document.getElementById("add-book")
form.addEventListener("submit",(e)=> {
    addNewBook(e)
})

function addNewBook(e){
    e.preventDefault()
    const booktitle = document.getElementById("bname").value;
    const authorname = document.getElementById("author").value;
    const edition = document.getElementById("edition").value;
    const image = document.getElementById("image").value;
    const count=3;

    // books.push({id,booktitle,authorname,edition,image})
    // console.log(books)
    books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({id,booktitle,authorname,edition,image})
    localStorage.setItem("books",JSON.stringify(books))

}
books.map((el)=>{createlement(el)});