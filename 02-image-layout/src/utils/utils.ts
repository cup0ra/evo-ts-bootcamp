import { IImage } from '../models/model';

export const getImages = async (search: string): Promise<IImage[]> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?per_page=30&client_id=${process.env.REACT_APP_API_KEY}&query=${search}`,
  );
  const arrayPhoto = await response.json();
  return arrayPhoto.results.map((image: any) => {
    return {
      height: image.height,
      width: image.width,
      alt: image.id,
      url: image.urls.small,
    };
  });
};
