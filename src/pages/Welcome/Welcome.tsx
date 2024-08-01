import { useState } from 'react'
import './Welcome.scss'
import Button from '../../components/Button'
import Setup from './Setup'
import ThemeToggle from '../../components/ThemeToggle'

function Welcome() {
  const [showInputs, setShowInputs] = useState(false)

  return (
    <div className='welcome-page'>
      <div className='theme-toggle-wrapper'>
        <ThemeToggle />
      </div>
      <div className='heading'>
        <h1 className={showInputs ? 'small-h1' : ''}>Chat with <span>Gemini</span></h1>
        {!showInputs ?
          (
            <>
              <h3>Experience Google's largest and most capable AI model in your browser</h3>
              <Button className='start-button' onClick={() => setShowInputs(true)}>Bắt Đầu</Button>
            </>) :
          (<Setup />)
        }
      </div>
      <span className='disclaimer'>This application only connects Google API with your device.</span>
    </div>
  )
}

export default Welcome