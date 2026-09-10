export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface Comment {
  id: string;
  author: Author;
  date: string;
  content: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  galleryImages?: string[];
  date: string;
  author: Author;
  category: string;
  commentsCount: number;
  comments?: Comment[];
}
