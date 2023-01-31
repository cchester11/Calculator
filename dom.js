const masterDiv = $('#masterDiv')

function storeFirstVal (firstVal) { localStorage.setItem('firstVal', JSON.stringify(firstVal)) }
let store = []

$(masterDiv).on('click', function (event) {
      let el = event.target
      let elVal = $(el).text()
      
      if(elVal === '+' || elVal === '-' || elVal === '*' || elVal === '=') {
            let firstVal = store.join('')
            storeFirstVal(firstVal)
      }
})