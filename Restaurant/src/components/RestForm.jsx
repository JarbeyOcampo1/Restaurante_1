import { useState } from "react";

function RestForm({ onSubmit }) {

    const [nombre, setNombre] = useState('');
    const [n_personas, setN_Personas] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [estado, setEstado] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleN_PersonasChange = (event) => {
        setN_Personas(event.target.value);
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
    };

    const handleHoraChange = (event) => {
        setHora(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ nombre,n_personas,fecha,hora,estado });
        setNombre('');
        setN_Personas('');
        setFecha('');
        setHora('');
        setEstado('');
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre del cliente"value={nombre}onChange={handleNombreChange}required/>
            </div>
            <div className="mb-3">
                <label htmlFor="n_personas" className="form-label">Número de personas</label>
                <input type="number"className="form-control" placeholder="Ingrese el número de personas" value={n_personas} onChange={handleN_PersonasChange}required/>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" className="form-control" value={fecha} onChange={handleFechaChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="hora" className="form-label">Hora</label>
                <input type="time" className="form-control" value={hora} onChange={handleHoraChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado</label>
                <select className="form-select" value={estado} onChange={handleEstadoChange} required>
                    <option value="">Seleccionar estado</option>
                    <option value="Confirmada">Confirmada</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Cancelada">Cancelada</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Agregar</button>
        </form>
    );
}

export default RestForm;
