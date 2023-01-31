const masterDiv = $('#masterDiv')

function storeFirstVal (firstVal) { localStorage.setItem('firstVal', JSON.stringify(firstVal)) }
function storeSecondVal (secondVal) { localStorage.setItem('secondVal', JSON.stringify(secondVal)) }
function storeArithmetic (symbol) { localStorage.setItem('symbol', JSON.stringify(symbol))}
function clearLocalStorage () { localStorage.clear() }
let store = []

$(masterDiv).on('click', function (event) {
      let el = event.target
      let elVal = $(el).text()
      
      if(elVal === '+' || elVal === '-' || elVal === '*') {
            let symbol = elVal
            let saveVal = store.join('')

            storeArithmetic(symbol)
            storeFirstVal(saveVal)

            store = [];
      } else if(elVal === 'clear') {
            clearLocalStorage()
      } else {
            store.push(elVal)
      }
})