const form = document.getElementById("add-book")
form.addEventListener("submit",addNewBook())

function addNewBook(){
    const booktitle = document.getElementById("bname").value;
    const authorname = document.getElementById("author").value;
    const edition = document.getElementById("edition").value;
    const image = document.getElementById("image").value;
    const id=5;
    books.push({id,booktitle,authorname,edition,image})
    localStorage


}
