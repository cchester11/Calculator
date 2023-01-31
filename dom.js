// our two dom elements we need event listeners on
const masterDiv = $('#masterDiv')
const answer_element = $('#answer_element')

// our localStorage logic. Can probably be reduced to a smaller and concise function
function storeFirstVal (firstVal) { localStorage.setItem('firstVal', JSON.stringify(firstVal)) }
function storeSecondVal (secondVal) { localStorage.setItem('secondVal', JSON.stringify(secondVal)) }
function storeArithmetic (symbol) { localStorage.setItem('symbol', JSON.stringify(symbol))}
function clearLocalStorage () { localStorage.clear() }

// stores value before symbol click, empties, then stores the second value before the = click
let store = []

// event listener
$(masterDiv).on('click', function (event) {
      // function scope variables for conditionals below
      let el = event.target
      let elVal = $(el).text()
      
      // the following are our conditional statements
      if(elVal === '+' || elVal === '-' || elVal === '*') {
            let symbol = elVal
            let saveVal = store.join('')
            let checkVal = JSON.parse(localStorage.getItem('firstVal'))

            if(checkVal) { 
                  window.alert('error; first value already saved') 
            } else { 
                  storeFirstVal(saveVal) 
            }

            storeArithmetic(symbol)

            store = [];
      } else if(elVal === 'clear') {
            clearLocalStorage()
      } else if(elVal === '=') {
            let saveVal = store.join('')
            storeSecondVal(saveVal)

            // grab both values and the symbol and perform arithmetic accordingly
            let firstVal = JSON.parse(localStorage.getItem('firstVal'))
            let secondVal = JSON.parse(localStorage.getItem('secondVal'))
            let symbol = JSON.parse(localStorage.getItem('symbol'))
            
            // conditional statments for what equation to perform
            if(symbol === '-') {
                  let x = firstVal - secondVal
                  answer_element.textContent(x)
            }
      } else {
            store.push(elVal)
      }
})