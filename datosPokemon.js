const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);
            pintarPokemon(data, number);
        })
    .catch(error => {
        console.log(error);
    });
};

consultarPokemon(1)

const btnSeleccionar = () => 
{
    let primerPokemon = Math.round(Math.random()*150);
    //let es una variable
    let segundoPokemon = Math.round(Math.random()*150);
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2)
}

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`);
    //querySelector intercambia elemento por lo que vamos a cambiar
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    //getElementsByTagname cambia la informacion por etiqueta 
    //setatribute sirve para añadir clases
    //src se usas para traer informacion , pero se especifica que es lo que se necesita
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}

//para pintar pokemon
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1