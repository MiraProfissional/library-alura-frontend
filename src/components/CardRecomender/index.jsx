import React from 'react';
import { Title } from '../Title';
import styled from 'styled-components';
import P from 'prop-types';

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  max-width: 300px;
`;

const ImgBook = styled.img`
  width: 150px;
`;

const Subtitle = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

function CardRecomender({ title, subtitle, description, image }) {
  return (
    <Card>
      <div>
        <Title fontSize="16px" cor="#EB9B00" align="left">
          {title}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </div>
      <div>
        <ImgBook src={image} alt={subtitle} />
        <Button>Saiba mais</Button>
      </div>
    </Card>
  );
}

export default CardRecomender;

CardRecomender.propTypes = {
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  description: P.string.isRequired,
  image: P.node.isRequired,
};
