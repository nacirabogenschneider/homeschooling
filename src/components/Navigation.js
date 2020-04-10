import React from 'react'
import styled from 'styled-components/macro'
import home from '../images/home.svg'
import profile from '../images/profile.svg'
import classroom from '../images/class.svg'
import fav from '../images/fav.svg'
import today from '../images/today.svg'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav>
      <StyledNavLink to="/">
        <NavIcon src={home}></NavIcon>
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="/favourite">
        <NavIcon src={fav}></NavIcon>
        <span>Meine Favoriten</span>
      </StyledNavLink>
      <StyledNavLink to="/classroom">
        <NavIcon src={classroom}></NavIcon>
        <span>Meine Klasse</span>
      </StyledNavLink>
      <StyledNavLink to="/plan">
        <NavIcon src={today}></NavIcon>
        <span>Mein Stundenplan</span>
      </StyledNavLink>
      <StyledNavLink to="/profile">
        <NavIcon src={profile}></NavIcon>
        <span>Meine Profil</span>
      </StyledNavLink>
    </Nav>
  )
}
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  margin: 20px 10px;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`
const NavIcon = styled.img`
  height: 24px;
  margin: 6px;
`
