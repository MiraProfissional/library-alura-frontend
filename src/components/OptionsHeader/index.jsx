import React from 'react';
import styled from 'styled-components';

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  height: 100%;
  padding: o 5px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
`;

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Option>
          <p>{text}</p>
        </Option>
      ))}
    </Options>
  );
}

export default OptionsHeader;
