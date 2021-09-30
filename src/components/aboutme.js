import React from 'react'

export default function AboutMe({ programmingLanguages, toolsAndTechnologies, certifications }) {
    return (
        <div>
            <h5 style={{ fontSize: '18px' }}>Programming Languages</h5>
            {
                programmingLanguages.map((pl, i) => (
                    <p key={i} style={{ fontSize: '15px' }}>{pl}</p>
                ))
            }
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <h5 style={{ fontSize: '18px' }}>Tools And Technologies</h5>
            {
                toolsAndTechnologies.map((t, i) => (
                    <p key={i} style={{ fontSize: '15px' }}>{t}</p>
                ))
            }
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

            <h5 style={{ fontSize: '18px' }}>Certifications</h5>
            {
                certifications.map((c, i) => (
                    <a 
                    key={i}
                    href={c.Url} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    style={{ fontSize: '15px' }}>
                      {c.Name}
                    </a>
                ))
            }
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
        </div>
    )
}
