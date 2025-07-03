import { useState } from 'react';

const Exercise = () => {
  const [showExercise, setShowExercise] = useState(false);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [showHint, setShowHint] = useState(false);

  const exercise = {
    question: 'What React hook lets you add state to a functional component?',
    correct: 'useState',
    hint: 'It starts with "use" and is the most common one!'
  };

  const handleExercise = (e: React.FormEvent) => {
    e.preventDefault();
    setShowHint(false);
    if (answer.trim().toLowerCase() === exercise.correct.toLowerCase()) {
      setResult('🎉 Correct! You know your React!');
    } else {
      setResult('❌ Not quite! Try again or check the hint.');
    }
  };

  return (
    <div className="exercise-fixed">
      <button
        className="exercise-btn"
        onClick={() => {
          if (showExercise) {
            setAnswer('');
            setResult('');
            setShowHint(false);
          }
          setShowExercise(v => !v);
        }}
      >
        {showExercise ? 'Hide Fun Exercise' : 'Try a Fun Frontend Exercise!'}
      </button>
      {showExercise && (
        <div className="exercise-box">
          <button
            className="exercise-close"
            onClick={() => {
              setShowExercise(false);
              setAnswer('');
              setResult('');
              setShowHint(false);
            }}
            aria-label="Close Exercise"
          >
            ×
          </button>
          <p><strong>Frontend Riddle:</strong> {exercise.question}</p>
          <form onSubmit={handleExercise}>
            <input
              type="text"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              placeholder="Your answer..."
              className="exercise-input"
            />
            <button type="submit" className="exercise-submit">Check</button>
          </form>
          <button className="exercise-hint" onClick={() => setShowHint(v => !v)}>
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          {showHint && <div className="exercise-result">{exercise.hint}</div>}
          {result && !showHint && <div className="exercise-result">{result}</div>}
        </div>
      )}
    </div>
  );
};

export default Exercise;
