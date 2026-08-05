import { IsString, IsInt, MinLength, IsPositive, Min } from 'class-validator';

export class CreatePokemonDto {
//isINt, isPositive, min 1
@IsInt()
@IsPositive()
@Min(1)
no: number;

//isString, minLength 1
@IsString()
@MinLength(1)
name!:string;

}
