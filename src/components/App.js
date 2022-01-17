
import '../styles/App.scss';
import { useState } from "react";



function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState();
  const [correctLetters, setCorrectLetters] = useState('');
  const [incorrectLetters, setIncorrectLetters] = useState(['']);
  const [solution, setSolution] = useState('katakroker');
  const [userLetter, setUserLetter] = useState(['']);
  const solutionArray = solution.split('')
  const finalSolution = solutionArray.map(eachLetter => <li className='letter'>{eachLetter}</li>)

  const handleError = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1)
  }

  const handleLastLetter = (ev) => {
    setLastLetter(...ev.currentTarget.value);
    setUserLetter([...userLetter, ev.currentTarget.value])
    if (ev.target.value.match(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/)) {


    }
    handleCheckLetter(ev);
  }

  const handleCheckLetter = (ev) => {
    if (finalSolution.includes(lastLetter)) {
      setCorrectLetters([...correctLetters, lastLetter,])
    } else {
      setIncorrectLetters([...incorrectLetters, lastLetter,])
    }

  }
  /* Cuando el usuario introduzca una letra:
  1- Mirar si esta repetida
  2- Mirar si es acertada o fallada
  3.Fallada- Añadir al array de falladas, pintarla y pintar muñeco
  3.Acertada- Añadir al array de acertadas y pintar en solución 
  4- Reset vaciar arrays? borrar muñeco y refrescar para conseguir nueva palabra? */

  return (
    <div id="root">
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                {finalSolution}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">{incorrectLetters[0]}</li>
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">Escribe una letra:</label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                // value={lastLetter}
                onChange={handleLastLetter}
              />
            </form>
          </section>
          <button onClick={handleError}>test</button>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
