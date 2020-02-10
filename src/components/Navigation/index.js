import React, { useContext, useState } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Popup from "reactjs-popup";
import Menu from '../../components/Menu/menu';
import BurgerIcon from '../../components/BurgerIcon/burgerIcon';
import { Icon, InlineIcon } from '@iconify/react';
import cartOutline from '@iconify/icons-mdi/cart-outline';

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
					Cart<Icon icon={cartOutline} style={{ position: "relative", top: "4px", padding: "0 4px"}}/>
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
