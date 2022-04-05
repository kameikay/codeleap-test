export interface Post {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Post[];
}
