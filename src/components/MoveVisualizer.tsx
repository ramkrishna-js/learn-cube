import React from 'react';

interface MoveVisualizerProps {
  move: string;
}

export const MoveVisualizer: React.FC<MoveVisualizerProps> = ({ move }) => {
  // Normalize move: 'R2' -> 'R', "R'" -> "R'" (keep prime)
  // Actually, for visualization, 'R2' path is often shown as 'R' or a longer arrow.
  // We'll map 'R2' to 'R' path for now, but label it R2.
  
  const baseMove = move.replace('2', ''); // Remove '2' for path selection
  const isDouble = move.includes('2');

  const getPath = (m: string) => {
    // Note: Arrows are drawn to indicate the face movement direction.
    // Standard convention: View from front.
    switch (m) {
      case 'R': return <path d="M 70 20 Q 90 50 70 80" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case "R'": return <path d="M 70 80 Q 90 50 70 20" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case 'L': return <path d="M 30 20 Q 10 50 30 80" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case "L'": return <path d="M 30 80 Q 10 50 30 20" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case 'U': return <path d="M 20 30 Q 50 10 80 30" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case "U'": return <path d="M 80 30 Q 50 10 20 30" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case 'D': return <path d="M 20 70 Q 50 90 80 70" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case "D'": return <path d="M 80 70 Q 50 90 20 70" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" />;
      case 'F': return <path d="M 35 35 A 20 20 0 1 1 65 35" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" transform="rotate(90, 50, 50)" />; 
      case "F'": return <path d="M 65 35 A 20 20 0 1 1 35 35" fill="none" stroke="red" strokeWidth="4" markerEnd="url(#arrowhead)" transform="rotate(90, 50, 50)" />;
      case 'B': return <path d="M 75 25 A 35 35 0 1 1 25 25" fill="none" stroke="red" strokeWidth="4" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />; // Dashed for back
      case "B'": return <path d="M 25 25 A 35 35 0 1 1 75 25" fill="none" stroke="red" strokeWidth="4" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />;
      default: return null;
    }
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: '0.5rem' }}>
      <svg width="60" height="60" viewBox="0 0 100 100">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="red" />
          </marker>
        </defs>
        {/* Cube Face Outline */}
        <rect x="15" y="15" width="70" height="70" rx="5" fill="#f3f4f6" stroke="#374151" strokeWidth="3" />
        <line x1="38.33" y1="15" x2="38.33" y2="85" stroke="#9ca3af" strokeWidth="1" />
        <line x1="61.66" y1="15" x2="61.66" y2="85" stroke="#9ca3af" strokeWidth="1" />
        <line x1="15" y1="38.33" x2="85" y2="38.33" stroke="#9ca3af" strokeWidth="1" />
        <line x1="15" y1="61.66" x2="85" y2="61.66" stroke="#9ca3af" strokeWidth="1" />
        
        {/* The Move Arrow */}
        {getPath(baseMove)}
      </svg>
      <span style={{ 
        marginTop: '4px', 
        fontFamily: 'monospace', 
        fontSize: '1.2rem', 
        fontWeight: 'bold',
        color: 'var(--sl-color-white)'
      }}>
        {move}
      </span>
    </div>
  );
};

interface AlgorithmProps {
  formula: string;
}

export const Algorithm: React.FC<AlgorithmProps> = ({ formula }) => {
  const moves = formula.trim().split(/\s+/);
  
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      gap: '0.5rem', 
      padding: '1rem', 
      background: 'var(--sl-color-gray-6)', 
      borderRadius: '0.5rem',
      margin: '1rem 0'
    }}>
      {moves.map((m, i) => (
        <MoveVisualizer key={`${m}-${i}`} move={m} />
      ))}
    </div>
  );
};

export default MoveVisualizer;