import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '~/utils/styles'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Landing from '../components/Landing/landing'
import '../components/Landing/landingStyles'
import VisitShop from '../components/VisitShop/visitShop'
import Team from '../components/Team/team'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Wrapper>
      <VisitShop />
      <Team />
    </Wrapper>
    {/* <ProductGrid /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
