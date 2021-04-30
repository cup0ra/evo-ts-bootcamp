import React from 'react';
import styled from 'styled-components';
import { IImage } from '../../models/model';

export const ContainerImages = ({
  dataImages,
}: {
  dataImages: IImage[];
}): JSX.Element => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin: 10px;
  `;
  const ContainerImage = styled.div`
    border-radius: 5px;
    overflow: hidden;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
      box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
        0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    }
  `;
  const Image = styled.img`
    width: 100%;
    vertical-align: bottom;
  `;
  return (
    <Container>
      {dataImages.map((image) => {
        return (
          <ContainerImage
            key={image.alt}
            style={{
              width: `${(image.width * 200) / image.height}px`,
              flexGrow: (image.width * 200) / image.height,
            }}
          >
            <Image src={image.url} alt={image.alt} />
          </ContainerImage>
        );
      })}
    </Container>
  );
};
