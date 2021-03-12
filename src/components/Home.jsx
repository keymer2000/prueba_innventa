import React, { Component } from 'react'
import './home.css'
import axios from 'axios'

const url = "https://restcountries.eu/rest/v2/all"

class Home extends Component{
    state={
        paises:[],
        form: {
            tipodoc: '',
            identificacion: '',
            nombres: '',
            apellidos: '',
            nacionalidad: '',
            celular: '',
            email: '',
            administrador: ''
        }
    }

    peticionGet = () => {
        axios.get(url).then(response=>{
            // console.log(response);
            this.setState({paises: response.data})
        })
        .catch(error=>{
            console.log(error)
        });
    }

    componentDidMount(){
        // axios.get("https://restcountries.eu/rest/v2/all")
        // .then(response=>{
        //     // console.log(response);
        //     this.setState({paises: response.data})
        // })
        // .catch(error=>{
        //     console.log(error)
        // });

        this.peticionGet();
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post("https://fuente-de-datos-geek-virtual-git-master-keymer2000.vercel.app/", this.state)
        .then(response=>{
            console.log(response);
            this.setState({paises: response.data})
        })
        .catch(error=>{
            console.log(error)
        });
        
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        });
        // console.log(this.state.form);
    }



    render(){
    const { form } = this.state;
    return (
        <div className="content">
            <h3>Registro de usuarios</h3>
            <div className="content-form">
                <form action="" onSubmit={this.handleSubmit}>
                    <p >
                        <label>Tipo de documento:</label>
                        <select name="tipodoc" onChange={this.handleChange}>
                            <option>--Seleccione--</option>
                            <option  value="CC">CEDULA CIUDADANIA</option>
                            <option  value="CE">CEDULA EXTRANJERIA</option>
                            <option  value="PP">PASAPORTE</option>
                        </select>
                    </p>
                    <p>
                        <label>Identificación</label>
                        <input type="number" name="identificacion" placeholder="Identificación" value={form.identificacion} onChange={this.handleChange} required />
                    </p>
                    <p>
                        <label>Nombre(s):</label>
                        <input type="text" name="nombres" placeholder="Nombre(s)" value={form.nombres} onChange={this.handleChange} required/>
                    </p>
                    <p>
                        <label>Apellidos:</label>
                        <input type="text" name="apellidos" placeholder="Apellidos" value={form.apellidos} onChange={this.handleChange} required/>
                    </p>
                    <p >
                        <label>Nacionalidad:</label>
                        <select name="nacionalidad"  onChange={this.handleChange}>
                            <option >--Seleccione--</option>
                            {this.state.paises.map(elemento=>(
                                <option key={elemento.numericCode} value={form.numericCode} >{elemento.name}</option>
                            )
                            )}
                        </select>
                    </p>
                    <p>
                        <label>Celular</label>
                        <input type="number" name="celular" placeholder="Celular" value={form.celular} onChange={this.handleChange} required/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={this.handleChange} required/>
                    </p>
                    <p>
                        <label>Administrador</label>
                        <input type="text" name="administrador" placeholder="Administrador" value={form.administrador} onChange={this.handleChange} required />
                    </p>
                    <p className="block">
                        <button  type="submit">+Agregar</button>
                    </p>
                </form>
            </div>
            <div className="content-table">
                <table className="table" border="1">
                    <thead>
                        <tr>
                            <th>Tipo Documento</th>
                            <th>Documento</th>
                            <th>Nombre Completo</th>
                            <th>Nacionalidad</th>
                            <th>Celular</th>
                            <th>Email</th>
                            <th>Administrador</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>cedula</td>
                            <td>1092334126</td>
                            <td>keymer jimenez</td>
                            <td>colombia</td>
                            <td>3014534664</td>
                            <td>keimer@gmail.com</td>
                            <td>keymer</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>

        </div>

    )}
}

export default Home