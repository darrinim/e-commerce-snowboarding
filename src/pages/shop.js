import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const ShopPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Working?</h1>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default ShopPage;
