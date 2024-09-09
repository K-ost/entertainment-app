export type VideoViewType = "card" | "trend";
export type Rating = "PG" | "E" | "18+";

export type VideoCategory = "Movie" | "TV Series";

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  year: number;
  category: VideoCategory;
  rating: Rating;
  isTrending: boolean;
};

export type UserRole = "admin" | "user";

export type User = {
  id: number;
  avatar: string;
  bookmarks: string[];
  email: string;
  role: UserRole;
  password?: string;
  name?: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  user: Omit<User, "password">;
};
