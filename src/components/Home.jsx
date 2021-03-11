import React from 'react'



export default function Home() {
    return (
        <div class="regitro-form">
            <h3>Registro de usuarios</h3>
            <form action="">
                <div >
                    <label>Tipo de documento:</label>
                    <select >
                        <option >--Seleccione--</option>
                        <option>CC</option>
                        <option>CE</option>
                        <option>PP</option>
                    </select>
                </div>
                <div>
                    <label>Identificación</label>
                    <input type="number" name="identificacion" placeholder="Identificación"/>
                </div>
                <div>
                    <label>Nombre(s):</label>
                    <input type="text" name="nombres" placeholder="Nombre(s)"/>
                </div>
                <div>
                    <label>Apellidos:</label>
                    <input type="text" name="apellidos" placeholder="Apellidos"/>
                </div>
                <div >
                    <label>Nacionalidad:</label>
                    <select >
                        <option>--Seleccione--</option>
                        <option>CC</option>
                        <option>CE</option>
                        <option>PP</option>
                    </select>
                </div>
                <div>
                    <label>Celular</label>
                    <input type="tel" name="celular" placeholder="Celular" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>
                <div>
                    <button type="submit">+Agregar</button>
                </div>
            </form>
        </div>

    )
}
