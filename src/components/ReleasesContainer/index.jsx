import React from 'react'
import { ArrowDiv, Container, Title } from './styles';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ReleasesContainer = () => {
  
  return (
    <Container>
      <div>
        <Title>Nossos lançamentos mais aguardados</Title>
        <ArrowDiv>
          <button><AiOutlineArrowLeft/></button>
          <button><AiOutlineArrowRight/></button>
        </ArrowDiv>
      </div>

      <ul>
        
      </ul>
    </Container>
  )
}

export default ReleasesContainer;