// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        
        // console.log(data.data.topics)
        tabs.appendChild(createTabs(data.data.topics))
        // forEach(header => {
        // tabs.textContent = header
        
        // })
        
        console.log('tab',tabs)
    })
    .catch(error => {
        console.log('API is currently not working:', error)
    })

function createTabs(item){
    // console.log('checkhere',item)
    const divTab = document.createElement('div')
    // item.forEach(header => {
        divTab.textContent = item
        divTab.classList.add('tab')
        // console.log('here', header)
    // })
    


    // console.log('here2', item)
    // console.log('divtab',divTab)

    return divTab
}

// console.log('function:', createTabs())











// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(data => {
//         console.log('datahere:', data.data)
//         const tabs = document.querySelector('.topics')
//         console.log('beforeTabs', tabs)
//         const tabsData = data.data
//         // tabs = data.data.topics
//         tabs.appendChild(createDiv(tabsData))

//         console.log('appendTabs', tabs)
        
//     })

//     function createDiv(topics){
//         const divTab = document.createElement('div')
//         divTab.classList.add('tab')
//         // divTab.textContent = topics
//         // const dataInsert = topics
//         let listItem = document.createElement('p')
//         listItem.textContent = topics
//         divTab.appendChild(listItem)
//         return createDiv
  
// }