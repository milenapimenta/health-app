import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClinicsService {
  constructor(private prisma: PrismaService) {}

  async create(createClinicDto: CreateClinicDto) {
    try {
      return await this.prisma.clinic.create({
        data: {
          name: createClinicDto.name,
          type: createClinicDto.type,
          document: createClinicDto.document,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException(
          'Já existe uma clínica com os dados informados',
        );
      }

      throw error;
    }
  }

  async findAll() {
    return this.prisma.clinic.findMany();
  }

  async findOne(id: number) {
    const clinic = await this.prisma.clinic.findUnique({
      where: { id },
    });

    if (!clinic) {
      throw new NotFoundException(`Clínica com ID ${id} não encontrada`);
    }

    return clinic;
  }

  async update(id: number, updateClinicDto: UpdateClinicDto) {
    await this.findOne(id);

    return this.prisma.clinic.update({
      where: { id },
      data: {
        name: updateClinicDto.name,
        type: updateClinicDto.type,
        document: updateClinicDto.document,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.clinic.delete({
      where: { id },
    });

    return {
      message: `Clínica com ID ${id} removida com sucesso!`,
    };
  }
}
