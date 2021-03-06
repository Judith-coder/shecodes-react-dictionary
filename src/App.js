import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App" id="page-container">
      <div id="content-wrap">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main></div>
      <footer className="App-footer">This page was coded by <a href="https://www.linkedin.com/in/judith-charpentier-573b1b155/" target="_blank" rel="noreferrer">Judith Charpentier</a> and is open-source at <a href="https://github.com/Judith-coder/shecodes-react-dictionary" target="_blank" rel="noreferrer">Github</a>
      <div>Background customized from SVGBackgrounds.com</div>
      </footer>
    </div>
  );
}

export default App;
