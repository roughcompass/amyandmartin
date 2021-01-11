import React, { useEffect } from 'react'
import { Grommet } from 'grommet'
import { Helmet } from 'react-helmet'
import { Login } from '../../../components'
import { useOptions } from '../../../state/hooks'
import { useAuth } from '../../../hooks'
import { theme } from '../../../style'

const PageLayout = ({ title, description, location, children }) => {
  const { setLocation } = useOptions()
  const auth = useAuth()

  console.log(auth)

  useEffect(() => {
    location && setLocation(location)
  }, [location])

  if (auth.user) {
    return (
      <Wrapper title={title} description={description}>
        {children}
      </Wrapper>
    )
  }

  return (
    <Wrapper title={title} description={description}>
      <Login />
    </Wrapper>
  )
}

const Wrapper = ({ title, description, children }) => {
  return (
    <Grommet theme={theme} full>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <description>{description}</description>
      </Helmet>
      {children}
    </Grommet>
  )
}

export default PageLayout