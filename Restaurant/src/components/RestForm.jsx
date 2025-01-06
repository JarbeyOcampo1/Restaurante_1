import { useState } from "react"

function RestForm ({onSubmit}) {

    const [nombre,setNombre] = useState ('')
    const [n_personas,setN_Personas] = useState ('')
    const [fecha,setFecha] = useState ('')
    const [hora,setHora] = useState ('')
    const [estado,setEstado] = useState ('')

    const handleNombreChange = (event) => {
        setNombre(event.target.value)
    }

    const handleN_PersonasChange = (event) => {
        setN_Personas(event.target.value)
    }

    const handleFechaChange = (event) => {
        setFecha(event.target.value)
    }

    const handleHoraChange = (event) => {
        setHora(event.target.value)
    }

    const handleEstadoChange = (event) => {
        setEstado(event.target.value)
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit({nombre,n_personas,fecha,hora,estado})
        setNombre('')
        setN_Personas('')
        setFecha('')
        setHora('')
        setEstado('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} required/>
            <input type="text" placeholder="Numero personas" value={n_personas} onChange={handleN_PersonasChange} required/>
            <input type="text" placeholder="Fecha" value={fecha} onChange={handleFechaChange} required/>
            <input type="text" placeholder="Hora" value={hora} onChange={handleHoraChange} required/>
            <input type="text" placeholder="Estado" value={estado} onChange={handleEstadoChange} required/>
            <button type="submit"> Agregar </button>
        </form>
    )
}

export default RestForm