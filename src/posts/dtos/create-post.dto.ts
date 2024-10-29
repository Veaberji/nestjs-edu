import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  @IsNotEmpty()
  authorId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(500)
  content: string;
}
