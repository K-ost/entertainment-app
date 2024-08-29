import * as Factory from "factory.ts";
import { Video } from "../types";

export const videoFactory = Factory.Sync.makeFactory<Video>({
  id: Factory.each((i) => i),
  category: "Movies",
  isTrending: false,
  rating: "PG",
  thumbnail: "http://link",
  title: Factory.each((i) => `Custom title ${i}`),
  year: 2019,
});
