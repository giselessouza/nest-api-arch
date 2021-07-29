import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { Animal } from "./animal.entity";
import { AnimalService } from "./animal.service";
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from "src/core/http/nest-response-builder";


@Controller('animais')
export class AnimalController {
    constructor(private animalService: AnimalService) {}

    /**
     * Listar animais
     */
    @Get()
    public list(): Animal[] {
        return this.animalService.list();
    }

    /**
     * Buscar animal pelo nome
     */
    @Get(':name')
    public findByName(@Param('name') name: string): Animal {
        const animal = this.animalService.findByName(name);
        
        if (!animal) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado.'
            });
        }

        return animal;
    }

    /**
     * create new animal
     */
    @Post()
    public create(@Body() animal: Animal): NestResponse {
        const animalCriado = this.animalService.create(animal);
        return new NestResponseBuilder()
                .comStatus(HttpStatus.CREATED)
                .comHeaders({
                    'Location': `/animais/${animalCriado.nome}`
                })        
                .comBody(animalCriado)
                .build();
    }

}