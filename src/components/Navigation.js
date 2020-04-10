import React, { useState } from 'react'
import styled from 'styled-components/macro'
import home from '../images/home.svg'
import profile from '../images/profile.svg'
import classroom from '../images/class.svg'
import fav from '../images/fav.svg'
import today from '../images/today.svg'
import { NavLink } from 'react-router-dom'
import menu from '../images/menu.svg'
import close from '../images/close.svg'
import { Transition } from 'react-spring/renderprops'

export default function Navigation() {
  const [toggle, setToggle] = useState(false)
  const onToggle = () => setToggle(!toggle)

  return (
    <>
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
      <MobileNavWrapper>
        <Menu onClick={onToggle}>
          <Transition
            items={toggle}
            from={{ position: 'absolute', opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {(toggle) =>
              toggle
                ? (props) => (
                    <div style={props}>
                      <MenuIcon src={close}></MenuIcon>
                    </div>
                  )
                : (props) => (
                    <div style={props}>
                      <MenuIcon src={menu}></MenuIcon>
                    </div>
                  )
            }
          </Transition>
        </Menu>

        {toggle && (
          <MobileNav>
            <label onClick={onToggle}>
              <StyledNavLink to="/">
                <NavIcon src={home}></NavIcon>
                <StyledSpan>Home</StyledSpan>
              </StyledNavLink>
            </label>
            <label onClick={onToggle}>
              <StyledNavLink to="/favourite">
                <NavIcon src={fav}></NavIcon>
                <StyledSpan>Meine Favoriten</StyledSpan>
              </StyledNavLink>
            </label>
            <label onClick={onToggle}>
              <StyledNavLink to="/classroom">
                <NavIcon src={classroom}></NavIcon>
                <StyledSpan>Meine Klasse</StyledSpan>
              </StyledNavLink>
            </label>
            <label onClick={onToggle}>
              <StyledNavLink to="/plan">
                <NavIcon src={today}></NavIcon>
                <StyledSpan>Mein Stundenplan</StyledSpan>
              </StyledNavLink>
            </label>
            <label onClick={onToggle}>
              <StyledNavLink to="/profile">
                <NavIcon src={profile}></NavIcon>
                <StyledSpan>Meine Profil</StyledSpan>
              </StyledNavLink>
            </label>
          </MobileNav>
        )}
      </MobileNavWrapper>
    </>
  )
}
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  margin: 20px 10px;
  @media (max-width: 576px) {
    display: none;
  }
`
const MobileNav = styled.div`
  position: absolute;
  top: 100px;
  width: 100vw;
  height: auto;
  background: white;
  border: 1px solid lightgrey;
`
const MobileNavWrapper = styled.nav`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 300;
  }
`
const Menu = styled.div`
  display: none;
  @media (max-width: 576px) {
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
const MenuIcon = styled.img`
  height: 50px;
  padding: 10px;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    padding: 8px 40px;
    &:hover {
      background: orange;
    }
  }
`
const NavIcon = styled.img`
  height: 24px;
  margin: 6px;
`
const StyledSpan = styled.span`
  color: black;
`
