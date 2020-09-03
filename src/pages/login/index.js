import React,{useState} from 'react'
import './login.css'
import api from '../../services/api'

export default function Login(){
    
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    function login(event){
        event.preventDefault()
        
        console.log(email)
        console.log(senha)

        api.get('login').then(response=>
            console.log(response)
        )
  
    }
    return (
        <div className="signup-form">
        <form className = "col-sm-12" onSubmit={login}>
            <h2>Login</h2>
            <p className="hint-text">Para fazer login basta preencher os dados abaixo</p>
            
            <div className="form-group">
                <input type="email" className="form-control" onChange ={e=>setEmail(e.target.value)} name="email" placeholder="Email" required="required"/>
            </div>
    
            <div className="form-group">
                <input type="password" className="form-control" onChange ={e=>setSenha(e.target.value)} name="password" placeholder="Senha" required="required"/>
            </div>
            
            <div className="form-group">
                <button type="submit" className="btn btn-success btn-lg btn-block">Entrar</button>
            </div>
           
        </form>
        
    </div>
    )
}