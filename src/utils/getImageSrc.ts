import imageUrlBuilder from "@sanity/image-url";
import client from "../sanity-react/src/client";

export const getImageSrc = (source: string): string => {
  const builder = imageUrlBuilder(client);

  return builder.image(source).url();
};
