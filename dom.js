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
            // variables of the conditional scope
            let symbol = elVal
            let saveVal = store.join('')
            let checkVal = JSON.parse(localStorage.getItem('firstVal'))

            // if the localStorage variable 'firstVal' already has a stored value, then send the user an error
            // if the 'firstVal' is empty, store the first value using the storeFirstVal() utility above
            if(checkVal) { 
                  window.alert('error; first value already saved. Either click the equal sign or clear to start over') 
            } else { 
                  storeFirstVal(saveVal) 
            }

            // capture the arithmetic symbol clicked and store is under the key 'symbol'
            storeArithmetic(symbol)

            // empty the store array
            store = [];
            
            $(answer_element).text(symbol)
            // if the user clicks 'clear' empty all storage variables and the answer_element text
      } else if(elVal === 'clear') {
            clearLocalStorage()
            store = []
            answer_element.text('')

            // if the user clicks the equal sign
      } else if(elVal === '=') {
            // save the store array as one value
            // store the value of the store array in the localStorage variable 'secondValue'
            let saveVal = store.join('')
            storeSecondVal(saveVal)

            // grab both values and the symbol and perform arithmetic accordingly
            let firstVal = JSON.parse(localStorage.getItem('firstVal'))
            let secondVal = JSON.parse(localStorage.getItem('secondVal'))
            let symbol = JSON.parse(localStorage.getItem('symbol'))
            
            // conditional statments for what equation to perform
            if(symbol === '-') {
                  let a = Number(firstVal)
                  let b = Number(secondVal)
                  let x = a - b
                  $(answer_element).text(x)
            } else if(symbol === '*') {
                  let a = Number(firstVal)
                  let b = Number(secondVal)
                  let x = a * b
                  $(answer_element).text(x)
            } else if(symbol === '+') {
                  let a = Number(firstVal)
                  let b = Number(secondVal)
                  let x = a + b
                  $(answer_element).text(x)
            }
      } else {
            // if user clicks on a number save that number in sequence to the store array
            store.push(elVal)
            let currVal = store.join('')
            $(answer_element).text(currVal)
      }
})