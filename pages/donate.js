import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import marked from 'marked'
import { content, title } from '../components/content/_donate'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Content>
    <Content>
      <style jsx>
        {`
          li {
            font-size: 18px;
            list-style: inside;
        `}
      </style>
      <h2 id='member'>Become a company member of HackYourFuture! </h2>
      <h3>Please answers these questions</h3>
      <ul>
        <li>
          Does your company want to{' '}
          <strong>support diversity and inclusion</strong> in the tech industry?
        </li>
        <li>
          Does your company want to{' '}
          <strong>
            get access to a unique pool of talented tech professionals
          </strong>{' '}
          now or in the future?
        </li>
      </ul>
      <div>
        <h3>If you answered yes</h3>
        <p>
          Then you now have a <strong>great opportunity</strong> to become a
          company member of HackYourFuture. Thereby{' '}
          <strong>
            supporting the next generation of talented web-developers.
          </strong>
        </p>
        <br />
        <p>At the same time your company gain membership benefits like;</p>

        <ul>
          <li>First hand access to our top talents</li>
          <li>Publicity</li>
          <li>
            Employees can access certain HackYourFuture modules and events
          </li>
          <li>Possibility to arrange events with HackYourFuture</li>
        </ul>
        <br />
        <p>
          If <strong>this seems interesting</strong> for your company then get
          in touch here:
          <br />
          <br />
          <a href='mailto:cph@hackyourfuture.dk'>cph@hackyourfuture.dk</a>
        </p>
      </div>
      {/* "Gold partners" > 100.000 kr
"Silver partners" > 30.000 kr
"Bronze partners" < 30.000 kr */}
    </Content>
  </Layout>
)
