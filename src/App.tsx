import appStyle from './App.module.css';

function App() {

  return (
    <>
      <div className={appStyle.parallax}>
        <div className={appStyle.scrollText}>
          <span style={{fontFamily:'newiconscript'}}>
            Miguel & Elisua
          </span>
          <span style={{fontFamily:'texgyrebonum', fontSize:'0.5em'}}>
            14 de diciembre del 2025
          </span>
        </div>
      </div>

    </>
  )
}

export default App