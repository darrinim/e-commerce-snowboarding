import React from 'react'
import { Link } from 'gatsby'
import { Wrapper, ContentContainer } from '~/utils/styles'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Landing from '../components/Landing/landing'
import '../components/Landing/landingStyles'
import VisitShop from '../components/VisitShop/visitShop'
import SeeTeam from '../components/SeeTeam/seeTeam'
import BoardBag from '../components/BoardBag/boardBag'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Wrapper>
      <VisitShop />
    </Wrapper>
    <ContentContainer>
      <SeeTeam />
      <BoardBag />
    </ContentContainer>  
    {/* <ProductGrid /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
