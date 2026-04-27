import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PostDocument extends Document {
  title: string;
  imageUrl: string;
  content: string;
  creator: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const postSchema: Schema<PostDocument> = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    content: { type: String, required: true },
    creator: {
      name: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const PostModel: Model<PostDocument> =
  mongoose.model<PostDocument>('Post', postSchema);