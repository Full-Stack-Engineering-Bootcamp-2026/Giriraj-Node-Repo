import { Service } from 'typedi';
import { PostRepository } from '../repository/post.repository';
import {
  PostCreateDto,
  PostOutDto,
  PostUpdateDto,
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

  async getAll(): Promise<PostOutDto[]> {
    const posts = await this.repository.findAll();
    return posts.map((p) => this.mapToDto(p));
  }

  async getById(id: string): Promise<PostOutDto> {
    const post = await this.repository.findById(id);
    if (!post) throw new Error('Post not found');
    return this.mapToDto(post);
  }

  async create(data: PostCreateDto): Promise<PostOutDto> {
    const post = await this.repository.create(data);
    return this.mapToDto(post);
  }

  async update(id: string, data: PostUpdateDto): Promise<PostOutDto> {
    const post = await this.repository.update(id, data);
    if (!post) throw new Error('Post not found');
    return this.mapToDto(post);
  }

  async delete(id: string): Promise<void> {
    const success = await this.repository.delete(id);
    if (!success) throw new Error('Post not found');
  }
}