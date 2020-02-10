import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: white;
  // margin-bottom: 1.45rem;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`

const contentStyle = {
	background: "white",
	height: "100vh",
	width: "30vw",
	border: "1px solid black",
	position: "absolute",
	top: "0",
	overflow: "hidden"
};

export const MenuTest = styled.div`
  // width: 80%;
  background-color: red;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;

  

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const MenuLinkCart = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  position: fixed;
  right: 20px;
  top: 0.7em;



  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem;
    top: 0.9em;
  }
`

export const CartCounter = styled.span`
  color: black;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

    
     
        
          
            
              