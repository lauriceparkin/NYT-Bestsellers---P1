
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json?';
const API_KEY = 'api-key=tTpG8xSIbewIAyFsmszuUolzZ57pfCM8';

const URL = `${BASE_URL}${API_KEY}`

let year = document.querySelector('.year')
let month = document.querySelector('.month')
let day = document.querySelector('.day')
let button = document.querySelector('button')



//for loop set up to auto populate years
let range = (start, end) => {

  for (let i = start; i >= end; i--) {
    console.log(i)
    let yearOption = document.createElement('option');
    yearOption.innerHTML = i
    console.log(yearOption)
    year.append(yearOption);

  }

}


range(2020, 2009);




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

  console.log(bookLists)//set up to check api lists

  bookLists.filter(list => {//big outside array
    let booksInner = list.books

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

      //original data pull below, but adding the ranks, titles, and authors did not look good and it was redundant info.
      // bookDetails.append(img, rankDiv, titleDiv, authorDiv)

      bookDetails.append(img)

    })
  })

}






//Data to pull from API:

// results.lists.books.rank
// results.lists.books.book_image
// results.lists.books.title
// results.list.books.author



