import { useNavigate } from "react-router-dom"
import { useState} from "react"
import Button from "./Layouts/Button"
import Span from "./Layouts/Span"
import Toast from "react-bootstrap/Toast"
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Register() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    function submit(event) {
        event.preventDefault()
        const { name, email, password, confirmpassword } = event.target.elements
        if (password.value === confirmpassword.value) {
            const user = {
                name: name.value,
                email: email.value,
                password: password.value,
                admin : 0
            }
           

            fetch('http://localhost:3001/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Nouvel utilisateur créé:', data);

                    if(data.message)
                        myAlert(data.message)
                    else {
                        setShow(true);
                        setTimeout(() => { navigate("/Login") }, 3000)
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la création de l\'utilisateur:', error);
                });

        } else {
            myAlert("No consistency between passwords");
        }
    }

    const myAlert = (text) => {
        const ele = document.getElementById("passwordHelp")
        ele.innerText = text
        ele.className = "alert alert-danger resize"
    }

    return (
        <section className="container d-flex justify-content-center" style={{marginTop:"90px"}}>
            <form onSubmit={submit} className="container">
                <div className="mb-3">
                    <label htmlFor="exampleInputName2" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputName2" name="name" minLength="3" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" name="password" minLength="8" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name="confirmpassword" required /><br />
                    <div id="passwordHelp" className="form-text"></div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="check" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <Button value="Register" />
                <p>Vous avez un compte <i onClick={() => { navigate("/Login") }}><Span value="Connectez-vous" /></i></p>
            </form>
            <ToastContainer position="top-end">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation={true}>
                    <Toast.Header closeButton={false}>
                        <span style={{ color: "blue", fontWeight: "bold" }}>Dst Espoir</span>
                    </Toast.Header>
                    <Toast.Body>You have successfully registered</Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    )
}