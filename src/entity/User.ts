import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  email: string;

  @Column()
  nombre: string;

  @Column()
  apellido_paterno: string;

  @Column()
  apellido_materno: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  genero: string;
}
