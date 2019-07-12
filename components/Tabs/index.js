// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(data => {
//         console.log(data.data.topics)
//         const tabs = document.querySelector('.topics')
//         console.log('beforeTabs', tabs)
//         const tabsData = data.data.topics
//         // tabs = data.data.topics
//         tabs.appendChild(createDiv(tabsData))

//         console.log('appendTabs', tabs)
        
//     })

//     function createDiv(topics){
//         const divTab = document.createElement('div')
//         divTab.classList.add('tab')
//         // divTab.textContent = topics
//         // const dataInsert = topics

//         topics.forEach(topic => {
//             let listItem = document.createElement('p')
//             listItem.textContent = topic
//             divTab.appendChild(listItem)
//     })
//         return createDiv
  
// }