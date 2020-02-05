
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json?';
const API_KEY = 'api-key=tTpG8xSIbewIAyFsmszuUolzZ57pfCM8';

const URL = `${BASE_URL}${API_KEY}`

let year = document.querySelector('.year')
let month = document.querySelector('.month')
let day = document.querySelector('.day')
let button = document.querySelector('button')




button.addEventListener("click", async () => {
  console.log('test')
  let date = (`${year.value}-${month.value}-${day.value}`)
  const response = await axios.get(`${URL}&published_date=${date}`);
  console.log('res', response.data.results.lists);
  let bookLists = response.data.results.lists;
  let bookListTwo = bookLists.splice(0, 2)
  console.log(bookListTwo);

  renderBooks(bookListTwo) // calling function name renderBooks/

});


let renderBooks = (bookLists) => {

  let returnBooks = document.querySelector(".returnBooks")
  returnBooks.innerHTML = ''

  console.log(bookLists)

  bookLists.filter(list => {//big outside array
    let booksInner = list.books
    //look up splice and slice to limit length of list
    booksInner.map(book => {//smaller inside array


      let bookDetails = document.createElement('div')
      returnBooks.append(bookDetails)


      let rankDiv = document.createElement('div')
      rankDiv.classList.add('rank')
      rankDiv.innerHTML = book.rank

      let titleDiv = document.createElement('div')
      titleDiv.classList.add('title')
      titleDiv.innerHTML = book.title


      let img = document.createElement('img')
      img.src = book.book_image
      img.classList.add('image')

      let authorDiv = document.createElement('div')
      authorDiv.classList.add('author')
      authorDiv.innerHTML = `by ${book.author}`


      bookDetails.append(img, rankDiv, titleDiv, authorDiv)

    })
  })

}






//Data I want to show


// results.lists.books.rank
// results.lists.books.book_image
// results.lists.books.title
// results.list.books.author



