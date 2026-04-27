import { Service } from 'typedi';
import { PostModel, PostDocument } from '../entities/post.entity';
import { PostCreateDto, PostUpdateDto } from '../dto/post.dto';

@Service()
export class PostRepository {
  async findAll(): Promise<PostDocument[]> {
    return PostModel.find();
  }

  async findById(id: string): Promise<PostDocument | null> {
    return PostModel.findById(id);
  }

  async create(data: PostCreateDto): Promise<PostDocument> {
    const post = new PostModel({
      ...data,
      imageUrl: 'images/duck.jpg',
      creator: { name: 'Maximilian' },
    });

    return post.save();
  }

  async update(id: string, data: PostUpdateDto): Promise<PostDocument | null> {
    return PostModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await PostModel.findByIdAndDelete(id);
    return !!result;
  }
}