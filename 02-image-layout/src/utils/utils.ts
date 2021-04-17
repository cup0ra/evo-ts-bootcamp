import { IImage } from '../models/model';

export const getImages = async (search: string): Promise<IImage[]> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?per_page=20&client_id=n0rS0YBba_6PCwRYTtsw9bNQuOPFBcefP2kG8i-5NKw&query=${search}`,
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
