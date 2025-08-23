import appStyle from "./App.module.css";

function App() {

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <div className={appStyle.parallax}> 
        <div className={appStyle.scrollText}> 
          <span style={{fontFamily:'newiconscript'}}> Miguel & Elisua </span> 
          <span style={{fontFamily:'texgyrebonum', fontSize:'0.5em'}}> 14 de diciembre del 2025 </span> 
        </div> 
      </div> 
        
      <div className={appStyle.parallaxInvitation}> 

      </div>
    </>
  );
}

export default App;