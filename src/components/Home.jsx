import React from 'react'
import './home.css'



export default function Home() {
    return (
        <div className="content">
            <h3>Registro de usuarios</h3>
            <div className="content-form">
                <form action="">
                    <p >
                        <label>Tipo de documento:</label>
                        <select >
                            <option >--Seleccione--</option>
                            <option>CC</option>
                            <option>CE</option>
                            <option>PP</option>
                        </select>
                    </p>
                    <p>
                        <label>Identificación</label>
                        <input type="number" name="identificacion" placeholder="Identificación" />
                    </p>
                    <p>
                        <label>Nombre(s):</label>
                        <input type="text" name="nombres" placeholder="Nombre(s)" />
                    </p>
                    <p>
                        <label>Apellidos:</label>
                        <input type="text" name="apellidos" placeholder="Apellidos" />
                    </p>
                    <p >
                        <label>Nacionalidad:</label>
                        <select >
                            <option>--Seleccione--</option>
                            <option>CC</option>
                            <option>CE</option>
                            <option>PP</option>
                        </select>
                    </p>
                    <p>
                        <label>Celular</label>
                        <input type="tel" name="celular" placeholder="Celular" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" />
                    </p>
                    <p>
                        <button type="submit">+Agregar</button>
                    </p>
                </form>
            </div>

        </div>

    )
}
