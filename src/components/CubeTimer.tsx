import React, { useState, useEffect, useCallback, useRef } from 'react';

const MOVES = ['R', 'L', 'U', 'D', 'F', 'B'];
const MODIFIERS = ['', "'", '2'];

const generateScramble = () => {
  let scramble = [];
  let lastMove = '';
  for (let i = 0; i < 20; i++) {
    let move;
    do {
      move = MOVES[Math.floor(Math.random() * MOVES.length)];
    } while (move === lastMove); // Simple check to avoid R R
    
    lastMove = move;
    const modifier = MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];
    scramble.push(move + modifier);
  }
  return scramble.join(' ');
};

const CubeTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [scramble, setScramble] = useState('');
  const [history, setHistory] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  // Generate initial scramble
  useEffect(() => {
    setScramble(generateScramble());
  }, []);

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const remainingS = s % 60;
    const remainingMs = Math.floor((ms % 1000) / 10); // Show 2 digits
    return `${m > 0 ? `${m}:` : ''}${m > 0 && remainingS < 10 ? '0' : ''}${remainingS}.${remainingMs < 10 ? '0' : ''}${remainingMs}`;
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault(); // Prevent scrolling
      if (isRunning) {
        // Stop
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsRunning(false);
        setHistory(prev => [time, ...prev].slice(0, 5)); // Keep last 5
        setScramble(generateScramble());
      } else {
        // Start (Reset on key down? usually on key up in pro timers, but simple toggle for now)
        // To be more realistic: KeyDown = Red/Ready, KeyUp = Go.
        // Let's keep it simple: Space toggles.
      }
    }
  }, [isRunning, time]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
     if (e.code === 'Space') {
        if (!isRunning) {
            setTime(0);
            setIsRunning(true);
            const startTime = Date.now();
            intervalRef.current = window.setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }
     }
  }, [isRunning]);

  // We need to handle the "Space to stop" on KeyDown (immediate) and "Space to start" on KeyUp
  // Actually, standard stackmat: Hold Space (Red) -> Green -> Release to Start. Stop on any key press.
  // Simplified Web Version: Space Down = Stop. Space Up = Start (if was stopped).
  
  // Let's use a simpler logic for this embedded component:
  // Tap Space or Click Box to toggle.
  
  const toggleTimer = () => {
      if (isRunning) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsRunning(false);
          setHistory(prev => [time, ...prev].slice(0, 10));
          setScramble(generateScramble());
      } else {
          setTime(0);
          setIsRunning(true);
          const startTime = Date.now();
          intervalRef.current = window.setInterval(() => {
              setTime(Date.now() - startTime);
          }, 10);
      }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--sl-color-gray-6)', borderRadius: '1rem', marginTop: '1rem' }}>
      <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', marginBottom: '1.5rem', color: 'var(--sl-color-accent-high)' }}>
        {scramble}
      </div>
      
      <div 
        onClick={toggleTimer}
        style={{ 
            fontSize: '5rem', 
            fontWeight: 'bold', 
            fontFamily: 'monospace', 
            cursor: 'pointer',
            padding: '2rem',
            userSelect: 'none',
            color: isRunning ? 'var(--sl-color-white)' : 'var(--sl-color-accent)'
        }}
      >
        {formatTime(time)}
      </div>
      
      <div style={{ fontSize: '0.9rem', color: 'var(--sl-color-gray-3)' }}>
        {isRunning ? 'Click or Tap to Stop' : 'Click or Tap to Start'}
      </div>

      {history.length > 0 && (
          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
              <h3>Recent Times</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {history.map((t, i) => (
                      <li key={i} style={{ background: 'var(--sl-color-black)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>
                          {formatTime(t)}
                      </li>
                  ))}
              </ul>
          </div>
      )}
    </div>
  );
};

export default CubeTimer;
