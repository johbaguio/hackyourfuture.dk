import React from 'react'
import styles from './partners.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () =>{
  const sponsorEntryId = 'LaHuXx6t6IJgELkgbsKhr'
  const pressPieces = useContentfulEntryId(sponsorEntryId)
console.log('lol', pressPieces);
  return (<div className='partners'>
    <style jsx>{styles}</style>
    <h2 className='center'>Featured in</h2>
    <div className='wrapper'>
      {/* {pressPieces.map(({ id, logo, url, title }) => (
        <div className='partner' key={id}>
          <a aria-label='Media link' rel='noopener' target='_blank' href={url}>
            <img alt={title} src={`/static/media/${logo}`} width='170vw' />
          </a>
        </div>
      ))} */}
    </div>
  </div>
)}
