//Guardamos en parent el elemento body
let parent = document.getElementsByTagName('body')[0]
let paragraph = document.getElementById('paragraph')
console.log(parent)
console.log(paragraph)

//.getAttribute() obtiene el valor de un atributo
const paragraphId = paragraph.getAttribute('id')
console.log(paragraphId)

//.setAttribute() manipula el valor de un atributo
paragraph.setAttribute("id", "el nuevo id")


//Crear elementos en el DOM
//.createElement() lo guarda en memoría
const h2 = document.createElement("h2")
//modificamos el elemento
h2.innerText = "Soy el nuevo texto"
h2.style.border = "1px solid red"


//append muestra el h2 al final del parent (body en este caso)
parent.appendChild(h2)

//Inyectamos el elemento antes de otro (el h2)
let h1 = document.createElement('h1')
h1.innerHTML = "Soy un h1 antes del h2"
parent.insertBefore(h1, h2)

//Eliminar un elemento 
let theParagraph = document.getElementById('paragraph2')
parent.removeChild(theParagraph)

//Detección de click en un botón
let button = document.getElementById("send-btn");
button.onclick = function() {
  let input = document.getElementsByTagName('input')[0]
  console.log(input.value)
}

//Propiedad children contiene los hijos de los objetos tipo DOM
const liTags = document.getElementById("item-list").children;
console.log(liTags)


//Atrapamos el objeto event
for(let i = 0; i < liTags.length; i++){
  liTags[i].onclick = function(event) {
    const li = event.currentTarget
    li.style.backgroundColor = "red"
    li.innerHTML = "Me clickan! :)"
  }
}
