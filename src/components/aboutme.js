import React from 'react'

export default function AboutMe({ programmingLanguages, toolsAndTechnologies, certifications }) {

    const sortByRecent = (a, b) => {
        return b.key - a.key
    }

    return (
        <div>
            <h5 style={{ fontSize: '16px' }}>Programming Languages</h5>
            {
                programmingLanguages.map((pl, i) => (
                    <p key={i} style={{ fontSize: '15px' }}>{pl}</p>
                ))
            }
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <h5 style={{ fontSize: '16px' }}>Tools And Technologies</h5>
            {
                toolsAndTechnologies.map((t, i) => (
                    <p key={i} style={{ fontSize: '15px' }}>{t}</p>
                ))
            }
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <h5 style={{ fontSize: '16px' }}>Certifications</h5>
            {
                certifications.map((c, i) => (
                    <a 
                    key={i}
                    href={c.Url} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    >
                        <p style={{ fontSize: '15px' }}>{c.Name}</p>
                    </a>
                )).sort(sortByRecent)
            }
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
        </div>
    )
}
