export interface PostOutDto {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  creator: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface PostCreateDto {
  title: string;
  content: string;
}

export interface PostUpdateDto {
  title?: string;
  content?: string;
  imageUrl?: string;
}
export interface PaginationMeta{
  total:number;
  page:number;
  pages:number;
}
export interface PaginatedPostsDto{
  posts:PostOutDto[];
  pagination:PaginationMeta;
}