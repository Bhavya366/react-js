import './stylestwo.css' 
import {featuredata} from './data/dataset'

//use map for the imported featuredata and display the content
function Feature() {
    
        const datalist=featuredata.map((item)=>{
            return (
                <div className="feature-one" key={item.id}>
                <h2>{item.h2}</h2>
                <p>{item.p1}</p>
                <p>{item.p2}<a href={item.link}> {item.linkname}</a></p>
            </div>
            )
        })
    
        return(
            <div className='feature-section'>{datalist}</div>
            
        )
        
            
        
    
}

export default Feature

