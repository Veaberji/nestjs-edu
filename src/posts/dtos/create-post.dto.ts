import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PostType } from '../enums/post-type.enum';
import { PostStatus } from '../enums/post-status.enum';
import { Type } from 'class-transformer';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { truncate } from 'fs';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @ApiProperty({ enum: PostType })
  @IsEnum(PostType)
  @IsNotEmpty()
  type: PostType;

  @ApiProperty()
  @IsString()
  @MaxLength(10)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A slug should be all small letters and uses only "-" and without spaces."',
  })
  slug: string;

  @ApiProperty({ enum: PostStatus })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status: PostStatus;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  authorId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(500)
  content: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  @MaxLength(500)
  schema?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  @MaxLength(200)
  imageUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  publishedDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: { type: 'object', properties: { key: { type: 'string' }, value: { type: 'any', example: true } } },
  })
  @IsOptional()
  @IsArray()
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
