import { Injectable } from "@nestjs/common";
import { Animal } from "./animal.entity";

@Injectable()
export class AnimalService {
    private animais: Array<Animal> = [{
        id: 1,
        nome: 'Lua',
        descricao: 'Lua é uma cadela dócil e sociavel. Foi encontrada abandonada quando ainda era filhote',
        status: 'Disponivel para adocao',
        raca: 'SRD',
        porte: 'Pequeno',
        dataNascimento: new Date()
    }];

    public list(): Animal[] {
        return this.animais;
    }

    public create(animal: Animal): Animal {
        this.animais.push(animal);
        return animal;
    }

    public findByName(name: string): Animal {
        const animal = this.animais.find(animal => animal.nome == name)
        return animal;
    }

}