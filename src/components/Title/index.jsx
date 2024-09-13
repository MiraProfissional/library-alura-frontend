import styled from 'styled-components';
import P from 'prop-types';

export const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.fontSize || '18px'};
  text-align: ${(props) => props.align || 'center'};
  margin: 0;
`;

Title.propTypes = {
  color: P.string,
  fontSize: P.number,
  align: P.string,
};
