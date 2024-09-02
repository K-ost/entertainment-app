export type VideoViewType = "card" | "trend";

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
};

export type UserRole = "admin" | "user";

export type User = {
  id: number;
  avatar: string;
  bookmarks: string[];
  email: string;
  role: UserRole;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  user: Omit<User, "password">;
};
