import { Service } from 'typedi';
import { PostRepository } from '../repository/post.repository';
import {
  PostCreateDto,
  PostOutDto,
  PostUpdateDto,
  PaginatedPostsDto
} from '../dto/post.dto';

@Service()
export class PostService {
  constructor(private readonly repository: PostRepository) {}

  private mapToDto(post: any): PostOutDto {
    return {
      id: post._id.toString(),
      title: post.title,
      content: post.content,
      imageUrl: post.imageUrl,
      creator: post.creator,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }

  async getAll(page: number, limit: number): Promise<PaginatedPostsDto> {
    const { data, total } = await this.repository.findAll(page, limit);

    return {
      posts: data.map((p) => this.mapToDto(p)),
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getById(id: string): Promise<PostOutDto> {
    const post = await this.repository.findById(id);
    if (!post) throw new Error('Post not found');
    return this.mapToDto(post);
  }

  async create(data: PostCreateDto,file: Express.Multer.File): Promise<PostOutDto> {
    const post = await this.repository.create(data,file);
    //console.log(data,file);
    return this.mapToDto(post);
  }

  async update(id: string, data: PostUpdateDto,file: Express.Multer.File): Promise<PostOutDto> {
    data.imageUrl=file.path;
    if(file){
      data.imageUrl=file.path;
    }
    const post = await this.repository.update(id, data);
    if (!post) throw new Error('Post not found');
    return this.mapToDto(post);
  }

  async delete(id: string): Promise<void> {
    const success = await this.repository.delete(id);
    if (!success) throw new Error('Post not found');
  }
}