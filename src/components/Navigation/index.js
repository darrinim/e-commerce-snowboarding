import React, { useContext, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Popup from "reactjs-popup";
import Menu from '../../components/Menu/menu';
import BurgerIcon from '../../components/BurgerIcon/burgerIcon';
import { Icon, InlineIcon } from '@iconify/react';
import cartOutline from '@iconify/icons-mdi/cart-outline';
import './nav.css';

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper,
	MenuTest,
	MenuLinkCart
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const contentStyle = {
	background: "white",
	height: "100vh",
	width: "30vw",
	// border: "1px solid black",
	position: "absolute",
	left: "0",
	top: "0",
	overflow: "hidden"
};
	


const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
				<MenuLink to='/'>
					{siteTitle}
				</MenuLink>
				
				
				<MenuTest>
					<Popup
						modal
						className="menu-overlay-test"
						repositionOnResize={true}
						contentStyle={contentStyle}
						closeOnDocumentClick={true}
						trigger={open => <BurgerIcon open={open} />}
					>
						{close => <Menu close={close} />}
					</Popup>
				</MenuTest>
			</Container>

			<MenuLinkCart to='/cart'>
					{hasItems &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					<Icon icon={cartOutline} style={{ position: "relative", top: "4px", padding: "0 4px"}}/>
				</MenuLinkCart>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
