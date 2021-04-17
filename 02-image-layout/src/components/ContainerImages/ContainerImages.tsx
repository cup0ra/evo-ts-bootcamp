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

  const Image = styled.img`
    border-radius: 5px;
    flex-grow: 1;
    object-fit: cover;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.005);
      box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
        0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    }
  `;
  return (
    <Container>
      {dataImages.map((image) => {
        return (
          <Image
            width={image.width / 20}
            key={image.alt}
            src={image.url}
            alt={image.alt}
          />
        );
      })}
    </Container>
  );
};
