import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class Animal {
    id: number;

    @IsNotEmpty({
        message: 'nome é obrigatório.'
    })
    @IsString({
        message: 'nome precisa ser uma string.'
    })

    nome: string;

    @IsNotEmpty({
        message: 'descricao é obrigatório.'
    })
    @IsString({
        message: 'descricao precisa ser uma string.'
    })

    descricao: string;

    @IsNotEmpty({
        message: 'status é obrigatório.'
    })
    @IsString({
        message: 'status precisa ser uma string.'
    })

    status: string;

    @IsNotEmpty({
        message: 'raça é obrigatório.'
    })
    @IsString({
        message: 'raça precisa ser uma string.'
    })

    raca: string;

    @IsNotEmpty({
        message: 'porte é obrigatório.'
    })
    @IsString({
        message: 'porte precisa ser uma string.'
    })

    porte: string;

    @Expose({
        name: 'joinDate'
    })

    dataNascimento: Date;
}