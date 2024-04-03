export interface Comment {
  id: number;
  content: string;
  user: User;
  replies: Reply[];
}

export interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

export interface User {
  image: string;
  name: string;
  username: string;
}
