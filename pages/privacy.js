import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import { fetchPageContent } from '../contentful/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ content, title }) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>
        <div>{documentToReactComponents(content)}</div>
        <Map />
      </Content>
    </Layout>
  )
}

export async function getStaticProps() {
  const pageContent = await fetchPageContent('wJmhVVjaV2us3brdCIXAT')

  return {
    props: {
      title: pageContent.headline,
      content: pageContent.mainBody
    }
  }
}
