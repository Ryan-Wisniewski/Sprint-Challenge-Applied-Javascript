// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get ('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log(data.data.articles)
        const cards = document.querySelector('.cards-container')
        console.log(cards)
        cards.appendChild.createHandle(data.data.article)
        console.log('addedCards:',cards)
    })
    .catch (error => {
        console.log('Server Api down', error)
    })

function createHandle(idTag){
    // console.log('idTag exist?:', idTag)
    const cardDiv = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const spanName = document.createElement('span')

    img.src = idTag.authorPhoto
    cardHeadline = idTag.headline
    spanName.textContent = idTag.authorName

    cardDiv.appendChild(cardHeadline)
    cardDiv.appendChild(cardAuthor)
    cardAuthor.appendChild(imgContainer)
    imgContainer.appendChild(img)
    cardAuthor.appendChild(spanName)

    cardDiv.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    imgContainer.classList.add('img-container')

    console.log('return', cardDiv)
    return cardDiv
    
}

console.log('pls no break',createHandle())