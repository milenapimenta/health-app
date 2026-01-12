import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ClinicType } from 'src/common/enums/clinic-type.enum';

export class CreateClinicDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome da clínica é obrigatório.' })
  @Length(3, 100, {
    message: 'O nome deve ter entre 3 e 100 caracteres.',
  })
  name: string;

  @IsEnum(ClinicType, {
    message: `Tipo inválido. Valores permitidos: ${Object.values(ClinicType).join(', ')}`,
  })
  type: ClinicType;

  @IsOptional()
  @IsString({ message: 'O documento deve ser uma string válida.' })
  @Length(11, 20, {
    message: 'O documento deve ter entre 11 e 20 caracteres.',
  })
  document?: string;
}
