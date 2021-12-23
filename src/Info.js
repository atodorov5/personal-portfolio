import pic from "./images/nasko.jpg"

export default function Info(){
    return(
        <div>
            <img className="profilepic" src={pic} alt=""/>
            <h1> Atanas Todorov</h1>    
            <h4>Software Developer</h4>    
            <div className="buttons">
                <a href="mailto:atodorov98@gmail.com" >
                     <button className="emailBtn">Email</button> 
                </a>
                <a href="https://www.linkedin.com/in/atanas-todorov-517971182/">
                    <button className="linkedinBtn">Linkedin</button>
                </a>   
            </div>
        </div>
    )
}
