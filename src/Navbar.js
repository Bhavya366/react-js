import { navdata } from './data/dataset';
import './stylestwo.css';
import favicon from './favicon.ico';
const Navbar = () => {
    const datalist=navdata.map((item)=>{
        return (<li key={item.id}><a href={item.link} alt="alt text">{item.linkname}</a></li>)
    })

    return (
        <div className="navbar-section">
            <div className="name">
                <img src={favicon} alt="alt" style={{width:"30px",height:"30px"}}/>
                <a href="https://reactjs.org/" style={{color:"skyblue"}}>&nbsp;React</a>
            </div>
            <div style={{display:"flex",width:"300px"}}>{datalist}</div>
            {/* <div class="ui category search"> */}
                <div className="ui icon input">
                    <i className="search icon" style={{color:"white"}}></i>
                    <input className="prompt" type="text" placeholder="Search" style={{backgroundColor:"#20232a" , border:"none",fontSize:"17px"}}/>    
                </div>
                <div className="results"></div>
            {/* </div> */}
            <div className="end-part">
                <a href="https://reactjs.org/versions">v18.2.0</a>
                <a href="https://reactjs.org/languages"><i class="language icon"></i>&nbsp;&nbsp;Languages</a>
                <a href="https://github.com/facebook/react/">GitHub&nbsp;&nbsp;<i class="external alternate icon"></i></a>
            </div>
            
        </div>
    );
};

export default Navbar;