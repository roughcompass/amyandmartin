import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { PageLayout, PageNav, RsvpConfirm } from '../components'
import { slugger } from '../utils'
 
const RsvpConfirmationTemplate = ({ location, pageContext }) => { 
  const { pageNav, page, language } = pageContext

  const pageHeading = page.translations && page.translations.find(item => item.languageTitle === language.title) && page.translations.find(item => item.languageTitle === language.title).title

  return (
    <PageLayout
      location={location}
      title={pageHeading}
    >
      <Box pad={{ bottom: "8em" }}>
        <PageNav items={pageNav} />
        <ResponsiveContext.Consumer>
          {
            size => {
              return <RsvpConfirm page={page} viewportSize={size} language={language} />
            }
          }
        </ResponsiveContext.Consumer>
      </Box>
    </PageLayout>
  )
}

export default RsvpConfirmationTemplate
