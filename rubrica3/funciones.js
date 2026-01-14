const url="https://hp-api.onrender.com/api/characters"

class Personaje{
    constructor(nombre, objetoVarita){
        this.nombre=nombre;
        this.objetoVarita=objetoVarita;
    }

     async esMago(url) {
        datos = await fetch(url);
        datosJson = await datos.json();
        isWizard= false;
        for (const personajes of datosJson) {
            if(personajes.wizard===true){
                console.log(personajes.name + " es un mago.");
                isWizard=true;
            }

        }
        return isWizard;

    }
}
class Casas{
    constructor(nombre, listaPersonajes){
        this.nombre=nombre;
        this.listaPersonajes=[];

    }

    async enumerarPersonajes() {
        const datos = await llamadaAPI(url);
        for (const person of datos) {
            
        }
    }
    async personajesMasculinos(){
        const contador=0;
        const datos = await llamadaAPI(url);
        for (const person of datos) {
            if (person.gender==="male") {
                contador++;
            }
        }
        return contador;
    }
}
async function llamadaAPI(url) {
    // Llamada a la API usando fetch
    let cuerpo_respuesta = await fetch(url);

    // Convertimos la respuesta a JSON
    let datos = await cuerpo_respuesta.json();
    // Retornamos los datos para poder usarlos
    return datos;
}