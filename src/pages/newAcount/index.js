import React,{useState} from 'react'
import './newAcount.css'
import {Link} from 'react-router-dom'

export default function Login(){
    
    const [nome,setNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha]  = useState('')
    const [confirmacaoSenha,setConfirmacaoSenha] = useState('')
    
    // const [dados,setDados] = useState('')
    
    // Função responsável por fazer o registro do usuário

    // var dados = [1,2,3,4]
    var dados = [{
        "id":"1",
        "nome":"Victor"
    },{
        "id":"2",
        "nome":"adriele"
    }]
    
    function register(event){
        event.preventDefault()        
        
        console.log(nome)
        console.log(sobrenome)
        console.log(email)
        console.log(senha)
        console.log(confirmacaoSenha)

        if(senha !== confirmacaoSenha){
            alert("As senhas não são iguais")
        }

    }

    return (
        <div className="signup-form">
        <form className = "col-sm-12" onSubmit={register}>
            {/* {dados.map(dado =>(
                <p key = {dado.id}>{dado.nome}</p>
            ))} */}
            <h2>Nova Conta</h2>
            <p className="hint-text">Crie sua conta. Não vai levar nem 5 minutos.</p>
            
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" onChange ={e=>setNome(e.target.value)} placeholder="Nome" required="required"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" onChange = {e=>setSobrenome(e.target.value)}  placeholder="Sobrenome" required="required"/>
                    </div>
                </div>        	
            </div>
            
            <div className="form-group">
                <input type="email" className="form-control" onChange = {e=>setEmail(e.target.value)} name="email" placeholder="Email" />
            </div>
    
            <div className="form-group">
                <input type="password" className="form-control" onChange = {e=>setSenha(e.target.value)} name="password" placeholder="Senha"/>
            </div>
    
            <div className="form-group">
                <input type="password" className="form-control" onChange = {e=>setConfirmacaoSenha(e.target.value)} placeholder="Confirmação Senha"/>
            </div>        
    
            <div className="form-group text-center">
                <label className="form-check-label"><input  type="checkbox" /> I accept the <a href="/">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
            </div>
            
            <div className="form-group">
                <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
            <div className="text-center">Já tem uma conta?<Link to="/login">Login</Link></div>
        </form>
        
    </div>
    )
}