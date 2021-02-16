import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Typography, Button } from '@material-ui/core'

export default function Speech() {
    const commands = [
        {
          command: ["Open *"],
          callback: redirectPage => setRedirectUrl(redirectPage),
        },
    ]
    const { transcript } = useSpeechRecognition({ commands })
    const [redirectUrl, setRedirectUrl] = useState("")

    const pages = ["home", "resume", "about me", "work", "contact"]
    const urls = {
      "home": "/",
      "resume": "/resume",
      "about me": "/aboutme",
      "work": "/work",
      "contact": "/contact"
    }

    useEffect(() => {

    }, [])

    let redirect = ""

    if (redirectUrl) {
        if (pages.includes(redirectUrl)) {
          redirect = <Redirect to={urls[redirectUrl]} />
        } else {
          redirect = <p>Could not find page: {redirectUrl}</p>
        }
      }

    const handleListen = () => {
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        alert("Attention! Your browser is not supported to use voice navigation.")
      } else {
        return SpeechRecognition.startListening()
      }
    }
      
    return (
        <div>
            {redirect}
            <Button size="small" variant="outlined" onClick={handleListen}>
                <Typography style={{ color:"white" }}>
                    Start
                </Typography>
            </Button>
        </div>
    )
}
