import { Service } from 'typedi';
import { PostModel, PostDocument } from '../entities/post.entity';
import { PostCreateDto, PostUpdateDto } from '../dto/post.dto';

@Service()
export class PostRepository {
  // async findAll(): Promise<PostDocument[]> {
  //   return PostModel.find();
  // }
  async findAll(
    page:number,
    limit:number
  ):Promise<{data:PostDocument[];total:number}>{
    const skip=(page-1)*limit;
    const [data,total]=await Promise.all([
      PostModel.find()
      .sort({createdAt:-1})
      .skip(skip)
      .limit(limit),
      PostModel.countDocuments(),
    ]);

    return {data,total};
  }

  async findById(id: string): Promise<PostDocument | null> {
    return PostModel.findById(id);
  }

  async create(data: PostCreateDto,file:Express.Multer.File): Promise<PostDocument> {
    const post = new PostModel({
      ...data,
      imageUrl:file.path,
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