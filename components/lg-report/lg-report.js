// import React from 'react'

export default function LGReport(props) {
    return (
        <div className="lg-report-container" id="lg-report">
            <img src="/static/lg-insight/lg-insight-logo.png" />
            <div>
            <h3>LG Insight Evaluation report</h3>
            <p>The report about HackYourFuture in Danish</p>
            <a href="/static/lg-insight/Evalueringsrapport_HYF_LG Insight_22_03_21.pdf" target="_blank">Read the report</a>
            </div>
        <style jsx>{`
            .lg-report-container {
                margin: 0 auto;
                padding: 1rem 4rem 3rem 4rem;
                max-width: 900px;
            }
            .lg-report-container > div,
            .lg-report-container > img {
                display:inline-block;
                vertical-align: top;
                line-height: 2.5rem;
            }
            .lg-report-container > img {
                width: 140px;
            }
            .lg-report-container > div {
                width: 80%;
                padding-left: 2em;
            }
            @media screen and (max-width: 768px) {
                .lg-report-container {
                    padding: 2em;
                }
                .lg-report-container > div {
                    margin-top: 1em;
                    font-size: 1em;
                    width: 100%;
                    padding-left: 0em;
                    line-height: 2.5rem;
                }
            }
        `}</style>
        </div>
    )
}