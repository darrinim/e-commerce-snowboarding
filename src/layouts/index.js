import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Landing from '../components/Landing/landing'

const Wrapper = styled.div`
  margin: 0 auto;
  // max-width: 1000px;
  // padding: 0px 1.0875rem 1.45rem;
`


const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation siteTitle={data.site.siteMetadata.title} />            
            <Wrapper>
              {children}
            
              <footer style={{maxWidth: "960px", padding: "0px 1.0875rem 1.45rem", margin: "0 auto" }}>
                © {new Date().getFullYear()}, Built by
                {` `}
                <a target="blank" href="http://darrinim.com">Darrin Im</a>
              </footer>
            </Wrapper>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
