import React from 'react'
import Input from '../Input'
import styled from 'styled-components'

const SearchContainer = styled.section`
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Title = styled.h2`
  font-size: 36px;
  width: 100%;
`

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

function Search() {
  return (
    <SearchContainer>
      <Title>Já sabe por onde começar</Title>
      <SubTitle>Encontre seu livro em nossa estante</SubTitle>
      <Input type='text' placeholder='Escreva sua próxima leitura'/>
    </SearchContainer>
  )
}

export default Search
