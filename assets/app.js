const btn = document.querySelector("button");
const container = document.getElementById("root");
const userJson = "data/cohorts/lima/users.json"


        fetch(userJson)
    .then(response => response.json())//response podria escribirse como sea, no es palabra reservada. el .json es porque estamos esperando una respuesta json
    .then(data => {//hacer otra promesa, no solo quiero la data, quiero hacer algo con ella.
    console.log(data);//le ponemos data porque estamos recibiendo datos. Puede ser cualquier nombre.
    renderUsers(data);//yo puedo llamar una funcion del futuro porque necesito data para que se ejecute o cuando la respuesta llegue, y la llegada de data no depende de mi.
    
    })

const renderUsers = data => {//aqui llamo la funcion del futuro pero que es llamada en el pasado
    btn.addEventListener("click", () => {
        const render = data.forEach(element => {
            return  container.innerHTML += `<p>${element.name}<p>`// es lo mismo cuando concatenamos con + (destructuring). Van ese tipo de comiilas porque estamos creando un elemento html.
        });
        return render;
    })
}
