import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {

  //Datos de customers
  //private: solo se puede usar al interior de la clase 
  private clientes: Customer[] = [
    new Customer(1, 'Juan', 'Perez'),
    new Customer(2, 'Ana', 'Hernandez'),
    new Customer(3, 'Luis', 'Gomez'),
    new Customer(4, 'Maria', 'Lopez') 
  ]
  create(nuevoCliente) {
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  //select * from customers
  //para este caso se trata de reotornar el arreglo(lista ) customers 
  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
    let customerABuscar = this.clientes.find(function(c: Customer) { 
      return c.id === id;
    })
    return customerABuscar;
  }
 

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    //filter: para retornar un nuevo arreglo (lista)
    //cuyos elementos cumplan con la condicion 
    this.clientes = this.clientes.filter(function(cliente){
      return cliente.id !== id
    });
    return `Cliente con id: ${id} eliminado`
  }
}
