import * as Factory from "factory.ts";
import { User, Video } from "../types";

export const videoFactory = Factory.Sync.makeFactory<Video>({
  id: Factory.each((i) => i.toString()),
  category: "Movie",
  isTrending: false,
  rating: "PG",
  thumbnail: "http://link",
  title: Factory.each((i) => `Custom title ${i}`),
  year: 2019,
});

export const UserFactory = Factory.Sync.makeFactory<User>({
  id: Factory.each((i) => i + 1),
  avatar: "http://link.com",
  bookmarks: [],
  email: "test@test.com",
  role: "user",
  password: "1234567",
});
