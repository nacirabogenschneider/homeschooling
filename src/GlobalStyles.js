import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding:0;
    height:100vh;
    width: 100vw;
    font-family: 'Inter', sans-serif;
  }
  a{
    text-decoration: none;
    color: #fff;
    font-family: 'Inter', sans-serif;
  }
 h1{
  color: #242423;
  font-size: 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 400; 
 }

 h2, h3 {
   color: #242423;
   font-family: 'Inter', sans-serif;
   font-weight: 400; 
 }
`
