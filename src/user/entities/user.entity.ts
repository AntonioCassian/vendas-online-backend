import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'user' })
export interface UserEntity {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    addresses: any;
    id: number;
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'phone' })
    phone: 'string' as string;

    @Column({ name: 'cpf', nullable: false })
    cpf: string;

    @Column({ name: 'password', nullable: false })
    password: string;
}
