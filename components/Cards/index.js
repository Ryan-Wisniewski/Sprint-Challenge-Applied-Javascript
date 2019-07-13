// // STEP 3: Create Article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// // Stduy the response data you get back, closely.
// // You will be creating a component for each 'article' in the list.
// // This won't be as easy as just iterating over an array though.
// // Create a function that will programmatically create the following DOM component:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>
// //
// // Create a card for each of the articles and add the card to the DOM. 




const cards = document.querySelector('.cards-container')
// const array = ['bootstrap', 'javascript', 'jquery', 'node', 'technology']


    axios.get ('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        // console.log('data return:', data.data.articles)      
        // console.log(data.data.articles)
        const articles = data.data.articles
        Object.entries(articles).forEach(article => {
            // console.log(article.constructor.name)
            article.forEach(array => {
                if (array.constructor.name == 'Array'){
                    // console.log(arrayOne.constructor.name, 'where i am')
                    array.forEach(object =>{
                        // console.log('hello',object.constructor.name, object)
                        // console.log('cards', cards)
                        
                        cards.append(createHandle(object.authorName, object.authorPhoto, object.headline))
                        
                    })
                }
            })
        })
        // console.log('eachCard:', cards)
        // console.log('eachCard2:', eachCard)
        // console.log('data return:', data.data.articles) 
         

        // cards.textContent = data.data.articles
        // console.log('eachCard:', cards)
        // cards.appendChild.createHandle(cards)
        // console.log('addedCards:',cards)
    })
    .catch ((error) => {
        console.log('Server Api down', error)
})


function createHandle(author, photo, headline){
    const cardDiv = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const spanName = document.createElement('span')

    cardDiv.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    imgContainer.classList.add('img-container')

    img.src = photo
    cardHeadline.textContent = headline
    spanName.textContent = author 

    cardDiv.appendChild(cardHeadline)
    cardDiv.appendChild(cardAuthor)
    cardAuthor.appendChild(imgContainer)
    cardAuthor.appendChild(spanName)
    imgContainer.appendChild(img)
    console.log(cardDiv)
    



    // console.log('return', idTag)
    return cardDiv
    
}

// // console.log('pls no break',createHandle())