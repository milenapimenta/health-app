import { Injectable } from '@nestjs/common';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClinicsService {
  constructor(private prisma: PrismaService) {}

  async create(createClinicDto: CreateClinicDto) {
    const clinic = await this.prisma.clinic.create({
      data: {
        name: createClinicDto.name,
        type: createClinicDto.type,
        document: createClinicDto.document,
      },
    });
    return clinic;
  }

  findAll() {
    return `This action returns all clinics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinic`;
  }

  update(id: number, updateClinicDto: UpdateClinicDto) {
    return `This action updates a #${id} clinic`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinic`;
  }
}
