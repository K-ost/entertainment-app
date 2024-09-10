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

export type Film = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
};

export type Comment = {
  id: number;
  movieId: string;
  username: string;
  description: string;
  createdAt: Date | string;
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
