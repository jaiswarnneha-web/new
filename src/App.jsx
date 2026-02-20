import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const audioRef = useRef(null)

  const openLetter = () => {
    setIsOpen(true)
    // Browsers allow audio to play after a user click
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Playback failed:", e))
    }
  }

  return (
    <div className="container">
      {/* 1. The Music File (Put your mp3 in the 'public' folder) */}
      <audio ref={audioRef} loop>
        <source src="/made-in-japan.mp3" type="audio/mpeg" />
      </audio>

      {!isOpen ? (
        /* 2. The Sealed Envelope View */
        <div className="envelope-wrapper" onClick={openLetter}>
          <div className="heart-icon">💌</div>
          <p className="tap-text">A letter for Mine little therapist</p>
        </div>
      ) : (
        /* 3. The Opened Letter View */
        <div className="letter-content animate-fade-in">
          <h1 className="miss-you-text">I miss you</h1>
          
          <div className="lyrics-box">
            <p className="song-title">🎵Song just for you</p>
            <div className="lyrics">
              <p>That's when I left my heart with the girl I met in 11TH</p>
            </div>
          </div>

          <p className="personal-note">
            YES THE BEST THING WAS TO HAVE YOU IN MY LIFE BABY AND YES YOU ARE IRREPLACEABLE NO MATTER WHAT I WILL ALWAYS STAY BY YOUR SIDE.
          </p>
          
          <div className="floating-hearts">💖 ✨ 💖</div>
        </div>
      )}
    </div>
  )
}

export default App