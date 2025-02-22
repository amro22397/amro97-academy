import React from 'react'
import { Button, Html } from '@react-email/components'

const Welcome = () => {
  return (
    <Html>
      <Button
      href='https://example.com'
      style={{ background: 'black', color: 'white', padding: "12px 20px" }}
      >
        Click here
      </Button>
    </Html>
  )
}

export default Welcome
