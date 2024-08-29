export type VideoViewType = "card" | "trend";

export type Video = {
  id: any;
  title: string;
  thumbnail: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
};

export type UserRole = "admin" | "user";

export type UserType = {
  id: string;
  avatar: string;
  bookmarks?: string[];
  email: string;
  role: UserRole;
};
