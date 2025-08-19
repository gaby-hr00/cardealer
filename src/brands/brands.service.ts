import { HttpException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {

  constructor(private prisma: PrismaService) {}

  async create(createBrandDto: CreateBrandDto) {
    return await this.prisma.brands.create({
      data: createBrandDto 
    })
  }

  findAll() {
    return this.prisma.brands.findMany({
      orderBy: [{name: 'asc'}]
    })
  }

  async findOne(id: number) {
    let marca = await this.prisma.brands.findFirst({
      where: {id : id},
      orderBy: [{name: 'asc'}, {id: 'desc'}]
    });
    if (!marca){
      //HttpExeption 
      //1. codigo de status http a lanzar 
      throw new HttpException(
        {
          status: 404,
        error: "Brand not found"
        }, 404
      );
    }else {
      return marca;
    }
  }


  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
