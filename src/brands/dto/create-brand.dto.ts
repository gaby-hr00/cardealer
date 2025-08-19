//DTO:
//Data Transfer Object
// Es un objeto qu epermite establecer una estructura para enviar objetos de un componente a otro
//utilización en REST 
//Dto se utiliza como estructura de una request para que pueda ser utilizada en un service 

import { IsNotEmpty, MinLength } from "class-validator";

//un dto sirve para validar el payload de entrada 
export class CreateBrandDto {
    @IsNotEmpty({message: "debe estar presente el nombre de la marca"}) 
    @MinLength(2, {message: "marca debe tener al menos 2 caracteres"})
    name: string;
}
