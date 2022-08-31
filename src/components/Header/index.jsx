import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnchorDiv, Dropdown } from './styles'

export const HeaderDropdown = ({setShow}) => {
  const navigate = useNavigate()

  const handleProfile = () => {
    navigate('/producer/:id', {replace: true})
  }

  const handleHomepage = () => {
    navigate('/dashboard', {replace: true})
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login', {replace: true})
  }

  return (
    <>
      <Dropdown>
          <img src='../src/assets/logo.svg'/>
        <AnchorDiv>
          <a onClick={() => handleProfile()}>Perfil</a>
          <a onClick={() => handleHomepage()}>Home</a>
          <a onClick={() => handleLogout()}>Logout</a>
        </AnchorDiv>
      </Dropdown>
    </>
  )
}
