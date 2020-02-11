import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '~/utils/styles'


import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Layout from '../layouts'

const ShopPage = () => (
  <Wrapper>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <h1>Working?</h1>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </Wrapper>
)

export default ShopPage;
