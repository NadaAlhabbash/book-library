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
//
//
//
// // const form = document.getElementById("add-book")
// // form.addEventListener("submit",(e)=> {
// //     e.preventDefault()
// //     addNewBook(e)
// // })
//
// function addNewBook({target:{parentNode}}){
//     const booktitle =  document.getElementById("bname").parentNode[0].value;
//     const authorname =  document.getElementById("author").parentNode[1].value;
//     const edition =  document.getElementById("edition").parentNode[2].value;
//     const image =  document.getElementById("image").parentNode[3].value;
//     const id=books.length;
//     const newbook={id, booktitle, authorname, edition, image}
//     // console.log(newbook)
//     books.push(newbook)
//     createlement(newbook)
// }