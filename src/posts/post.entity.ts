import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostType } from './enums/post-type.enum';
import { PostStatus } from './enums/post-status.enum';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: '50',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.Post,
  })
  type: PostType;

  @Column({
    type: 'varchar',
    length: '10',
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    nullable: false,
  })
  status: PostStatus;

  @Column({
    type: 'varchar',
    length: '500',
    nullable: false,
  })
  content: string;

  @Column({
    type: 'varchar',
    length: '500',
    nullable: true,
  })
  schema: string;

  @Column({
    type: 'varchar',
    length: '200',
    nullable: true,
  })
  imageUrl: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishedDate: Date;

  authorId: number;
  tags: string[];
  metaOptions: CreatePostMetaOptionsDto[];
}
