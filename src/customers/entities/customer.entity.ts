export class Customer {

    //constructor: es un metodo que hace una funcion que se ejecuta al crear un objeto de esta clase
    //sirve para dar valor inicial a atributos o metodos 
    constructor(id: number,
                nombre: string,
                apellido: string,
    ){
        this.id = id;
        this.firstName = nombre;
        this.lastName = apellido;
        //asignacion por defecto:
        //no necesariamente un atributo se inicializa con un parametro
        this.birthDate = new Date();
        this.isActive = true; 
    }

    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    isActive: boolean;
}
