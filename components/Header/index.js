// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const divHeader = document.createElement('div')
    const spanDate = document.createElement('span')
    const header = document.createElement('h1')
    const spanTemp = document.createElement('span')

    divHeader.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')

    spanDate.textContent = 'SMARCH 28, 2019'
    header.textContent = 'Lambda Times'
    spanTemp.textContent = '98'

    divHeader.appendChild(spanDate)
    divHeader.appendChild(header)
    divHeader.appendChild(spanTemp)

 

    return divHeader
}
const appendHeader = document.querySelector('.header-container')
appendHeader.appendChild(Header())   
// console.log(Header())
