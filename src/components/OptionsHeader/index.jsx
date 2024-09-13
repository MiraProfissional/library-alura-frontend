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

const textOptions = [
  { id: 1, name: 'CATEGORIAS' },
  { id: 2, name: 'FAVORITOS' },
  { id: 3, name: 'MINHA ESTANTE' },
];

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Option key={text.id}>
          <p>{text.name}</p>
        </Option>
      ))}
    </Options>
  );
}

export default OptionsHeader;
