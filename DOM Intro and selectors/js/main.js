
//Etiqueta
console.log(document)

//Objecto
console.log( {document} )

//Document get element by Id
const catDiv = document.getElementById("cat");

console.log(catDiv)
console.log({ catDiv })

setTimeout( () => {

  catDiv.innerHTML = "<p>Soy el div del gato</p>";
  
  catDiv.style.backgroundColor = "red"
  catDiv.style.border = "1px solid black"
  catDiv.style.fontSize = "50px"
  catDiv.style.marginTop = "30px"
  catDiv.style.paddingBottom = "30px"

}, 2000)

//Get by tag name

const allDivs = document.getElementsByTagName("div")

console.log(allDivs)

// allDivs.forEach( elm => console.log(elm))

for(let i = 0; i < allDivs.length; i++) {
  console.log(allDivs[i])
}

//Spread operator converts into array
const allDivsTrueArray = [...allDivs]

console.log(allDivsTrueArray)

//
const allMouseDivs = document.getElementsByClassName("mouse")
const allMouseArr = [...allMouseDivs]
console.log(allMouseArr)

//Recorrer para cambiar atributos

// allMouseArr.forEach( function(div) {
//   div.innerText = "Soy un div de ratón"
// } )

// allMouseArr.forEach( (div, index) => div.innerText = `Soy un div de ratón, número ${index}`)

// Queryselector 

// const catByQuerySelector = document.querySelector("#cat")

// console.log(catByQuerySelector)

// const mouseByQuerySelector = document.querySelector(".mouse")

// console.log(mouseByQuerySelector);

//QuerySelectorAll

const allMouseByQuerySelector = document.querySelectorAll(".mouse")

console.log(allMouseByQuerySelector);