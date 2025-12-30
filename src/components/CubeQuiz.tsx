import React, { useState } from 'react';

const questions = [
  {
    question: "What does 'F' stand for in notation?",
    options: ["Fast", "Front", "Face", "Flip"],
    answer: 1 // Front
  },
  {
    question: "Which method is most popular for speedcubing?",
    options: ["CFOP", "Beginner's", "Peeling Stickers", "Petrus"],
    answer: 0 // CFOP
  },
  {
    question: "How many edge pieces does a 3x3 cube have?",
    options: ["8", "10", "12", "20"],
    answer: 2 // 12
  },
  {
    question: "What is a 'DNF'?",
    options: ["Do Not Forget", "Did Not Finish", "Down Face", "Daily New Favorite"],
    answer: 1 // Did Not Finish
  },
  {
    question: "Who invented the Rubik's Cube?",
    options: ["Rubik Ernő", "Isaac Newton", "Feliks Zemdegs", "Elon Musk"],
    answer: 0 // Rubik Ernő
  },
  {
    question: "What is 'OLL'?",
    options: ["Only Left Layer", "Orientation of Last Layer", "One Last Look", "Over Long Legs"],
    answer: 1
  },
  {
    question: "In standard color scheme, what is opposite White?",
    options: ["Blue", "Red", "Yellow", "Green"],
    answer: 2 // Yellow
  },
  {
    question: "What is the penalty for inspecting longer than 15 seconds?",
    options: ["Disqualification", "+2 Seconds", "Start Over", "Public Shaming"],
    answer: 1
  }
];

const CubeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);
    const correct = index === questions[currentQuestion].answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    // Wait a bit before next question
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div style={{ 
      background: 'var(--sl-color-gray-6)', 
      padding: '2rem', 
      borderRadius: '1rem', 
      marginTop: '1rem',
      textAlign: 'center'
    }}>
      {showScore ? (
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Quiz Completed!</h2>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            You scored {score} out of {questions.length}
          </p>
          <button 
            onClick={resetQuiz}
            style={{
              background: 'var(--sl-color-accent)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '1rem', color: 'var(--sl-color-gray-3)' }}>
            Question {currentQuestion + 1} / {questions.length}
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            {questions[currentQuestion].question}
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {questions[currentQuestion].options.map((option, index) => {
              let bgColor = 'var(--sl-color-black)';
              if (selectedOption !== null) {
                if (index === questions[currentQuestion].answer) bgColor = 'var(--sl-color-green-low)'; // Correct
                else if (index === selectedOption) bgColor = 'var(--sl-color-red-low)'; // Wrong
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  style={{
                    background: bgColor,
                    color: 'white',
                    border: '1px solid var(--sl-color-gray-5)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    cursor: selectedOption === null ? 'pointer' : 'default',
                    fontSize: '1.1rem',
                    transition: 'background 0.2s'
                  }}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CubeQuiz;
