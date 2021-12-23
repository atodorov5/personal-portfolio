import github from "./images/github.png"
import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"

export default function Footer(){
    return(
        <div className="Footer">
            <a href="https://github.com/atodorov5"><img src={facebook} alt=""></img></a>
            <a href="https://www.instagram.com/atanas.t/"><img src={instagram} alt=""></img></a>
            <a href="https://github.com/atodorov5"> <img src={github} alt=""></img> </a>
        </div>
    )
}