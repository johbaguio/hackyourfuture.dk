import React from 'react'
import styles from './partners.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const partnersEntryId = '3BMLvRREsbeQcUPbpoqHGS'
  const sponsorEntryId = '6D2BMNErzLJpTE31AavokM'
  const partners = useContentfulEntryId(partnersEntryId).content
  const sponsor = useContentfulEntryId(sponsorEntryId).content

  return (
    <>
      <style jsx>{styles}</style>
      {sponsor && partners &&
        <section className='partners'>
          <h2 className='center'>{sponsor.headline}</h2>
          <a
            aria-label='Partner link'
            rel='noopener'
            target='_blank'
            href={sponsor.assets[0].fields.description}
            className='mollerske'
          >
            <img
              alt='Den A.P. Møllerske Støttefond logo'
              src={sponsor.assets[0].fields.file.url}
            />
          </a>
          <div>
            <h2 className='center'>{partners.headline}</h2>
            <div className='wrapper'>
              {partners.assets.map(partner => (
                <div className='partner' key={partner.sys.id}>
                  <a
                    aria-label='Partner link'
                    rel='noopener'
                    target='_blank'
                    href={partner.fields.description}
                  >
                    <img alt={partner.fields.title} src={partner.fields.file.url} width='150vw' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </>
  )
}