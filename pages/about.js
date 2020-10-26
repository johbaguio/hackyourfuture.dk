import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import Contactform from '../components/contact-form/contact-form'
import { BoardMembers, CoreTeam } from '../components/team/team'
import Partners from '../components/partners/partners'
import Press from '../components/partners/press'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { fetchPageContent } from '../contentful/contentful'

export default ({ content, title, contactTitle, contactBody }) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
  
      <Content>
      <div>{documentToReactComponents(content)}</div>
      </Content>
  
      <Content id='contact'>
        <h2>{contactTitle}</h2>
        <div>{documentToReactComponents(contactBody)}</div>
        <Contactform email={'cph@hackyourfuture.dk'} />
        <div style={{ marginTop: 40 }}>
          <Map />
        </div>
      </Content>
  
      <BoardMembers />
      <CoreTeam />
      <Press />
      <Partners />
    </Layout>
  )
} 

export async function getStaticProps() {
  const pageContent = await fetchPageContent('3VD8j3TGv3H66fVLrHGWuC')
  const contactContent = await fetchPageContent('57BmNlPMn5pBZBBvPNIoLC')
  
  return {
    props: {
      title: pageContent.headline,
      content: pageContent.mainBody,
      contactTitle: contactContent.title,
      contactBody: contactContent.bodyText,

    }
  }
}