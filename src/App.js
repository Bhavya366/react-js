import './stylestwo.css';
import Features from './features';
import Display from './Display';
import Navbar from './Navbar';

function App(){
    return (
        <>
                <div className='above-navbar'><b>Try out a preview of the new React Docs!&nbsp;&nbsp;</b>
                <i className="hand point right icon" style={{color:"yellow"}}></i>
                <a href="https://beta.reactjs.org/" style={{color:"skyblue"}}>&nbsp;beta.reactjs.org</a>
                </div>
                <Navbar />
                <Display />
                <Features/>
        </>
    )
}

export default App;