// import mongoose, { Schema, Document, Model } from 'mongoose';

// // 1. Interface for Post document
// export interface IPost extends Document {
//   title: string;
//   imageUrl: string;
//   content: string;
//   creator: {
//     name: string;
//   };
//   createdAt: Date;
//   updatedAt: Date;
// }

// // 2. Schema definition
// const postSchema: Schema<IPost> = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     imageUrl: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     creator: {
//       name: {
//         type: String,
//         required: true,
//       },
//     },
//   },
//   { timestamps: true }
// );

// // 3. Model
// const Post: Model<IPost> = mongoose.model<IPost>('Post', postSchema);

// export default Post;