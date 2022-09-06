import React from 'react'
import { ArrowDiv, Container, Title } from './styles';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ReleasesContainer = () => {
  
  return (
    <Container>
      <div>
        <Title>Nossos lançamentos mais aguardados</Title>
        <ArrowDiv>
          <button><AiOutlineLeft/></button>
          <button><AiOutlineRight/></button>
        </ArrowDiv>
      </div>

      <ul>
        
      </ul>
    </Container>
  )
}

export default ReleasesContainer;