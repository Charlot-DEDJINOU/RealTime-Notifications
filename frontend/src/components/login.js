import Button from "./Layouts/Button"
import Span from "./Layouts/Span"
import { useContext} from "react"
import { UserContext } from "./userContext"
import { useNavigate } from "react-router-dom"


export default function Login(){

    const {toggleLogin}=useContext(UserContext)

    const navigate=useNavigate()

    function submit(event){
        event.preventDefault()

        const {email,password}=event.target.elements
        const user = {
            "email" : email.value ,
            "password" : password.value
        }

        fetch('http://localhost:3001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Connection de l'utilisateur : ", data);

                    if(data.message)
                        myAlert(data.message)
                    else {
                        localStorage.setItem('user' , JSON.stringify(data))
                        toggleLogin();
                        setTimeout(() => { navigate("/") }, 1000)
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la création de l\'utilisateur:', error);
                });
    }

    const myAlert = (text) => {
        const ele = document.getElementById("passwordHelp")
        ele.innerText = text
        ele.className = "alert alert-danger resize"
    }

    return(
        <section className="container d-flex justify-content-center" style={{marginTop:"90px"}}>
            <form onSubmit={submit} className="container">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required /><br />
                    <div id="passwordHelp" className="form-text"></div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="check" required/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <Button value="Login" />
                <p>Vous n'avez pas un compte <i onClick={()=>{navigate("/Register")}}><Span value="Enregistrer vous"/></i></p>
            </form>
        </section>
    )
}