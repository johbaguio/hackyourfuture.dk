import React from 'react'
import styles from './partners.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const partnersEntryId = '6cUNFgR3TLOKOlY8on904p'
  const partners = useContentfulEntryId(partnersEntryId).content

  return (
    <>
      <style jsx>{styles}</style>
      {partners && (
        <section className='partners'>
          <h2>{partners.title}</h2>
          <ul>
            {partners.images.map(partnerImages => (
              <li>
                <a target='_blank' href={partnerImages.fields.link}>
                  <img
                    src={partnerImages.fields.image.fields.file.url}
                    alt={partnerImages.fields.image.description}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
