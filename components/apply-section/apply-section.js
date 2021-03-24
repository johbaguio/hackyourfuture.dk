import React from 'react'
import '../content/_apply'
import { sectionTitle, contentOne, contentTwo } from '../content/_apply'

import { useContentfulEntryId } from '../../contentful/contentful-hooks'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// styling
// const useStyles = makeStyles({
//   stylePadding: {
//     padding: '0px'
//   },
//   avatar: {
//     margin: 10,
//     color: '#fff',
//     backgroundColor: 'green'
//   },
//   title: {
//     color: '#293a7d',
//     fontFamily: "'Space Mono', 'monospace'",
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '20px'
//   },
//   listText: {
//     fontFamily: "'Work Sans', 'sans-serif'",
//     fontSize: '1rem',
//     verticalAlign:"top"
//   }
// })

export default function applySection({ content, applyChecks, pointingImage }) {
  // const classes = useStyles()
  return (
    <React.Fragment>
      <div>
        {/* <style jsx global>
          {`
            #apply p {
              font-size: 1rem;
            }
          `}
        </style> */}
        {documentToReactComponents(content)}
        <aside className="checkbox-image" style={{backgroundImage:`url("${pointingImage.src}")`}}>
          
        </aside>
        {/* <img className="checkbox-image" alt={pointingImage.alt} src={pointingImage.src} /> */}
        <ul className="checkbox-container">
          {applyChecks.map((check, i) => (
          <li key={i}><img src="/static/icon_checkbox.svg" /><p>{check}</p></li>
          ))}
        </ul>
      </div>
      <style jsx>{`
      #apply p {
        font-size: 1rem;
      }
      .checkbox-image {
        width: 33.33%;
        min-height: 50vh;
        display:inline-block;
        vertical-align: top;
        margin-top: 1.85em;
        border-raidus: 3px;
        background-position: center center;
        background-size: auto 100%;
        background-repeat: no-repeat;
      }
      .checkbox-container {
        width: 66.66%;
        padding: 2em;
        box-sizing:border-box;
        display:inline-block;
      }
      .checkbox-container > li {
        margin-bottom: 1em;
    }
        .checkbox-container > li > p,
        .checkbox-container > li > img {
            display:inline-block;
            vertical-align: top;
        }
        .checkbox-container > li > img {
            width: 26px;
            margin-right: 1em;
            padding-top: 5px;
        }
        .checkbox-container > li > p {
            width: calc(100% - 40px - 1em);
        }
        @media screen and (max-width: 768px) {
          .checkbox-container {
            width: 100%;
            padding: 0em;
          }
      .checkbox-image {
        width: 100%;
        margin-bottom: 1em;
      }
        }
    `}</style>
    </React.Fragment>
  )
}

