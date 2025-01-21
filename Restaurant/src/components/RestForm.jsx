import { useState, useEffect } from 'react';

function RestForm({ onSubmit, initialRest }) {

  const [nombre, setNombre] = useState('');
  const [n_personas, setN_Personas] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [estado, setEstado] = useState('');
  const [mesa,setMesa] = useState('');

  useEffect(() => {
    if (initialRest) {
      setNombre(initialRest.nombre);
      setN_Personas(initialRest.n_personas);
      setFecha(initialRest.fecha);
      setHora(initialRest.hora);
      setEstado(initialRest.estado);
      setMesa(initialRest.mesa);
    }
  }, [initialRest]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const restData = { nombre, n_personas, fecha, hora, estado, mesa };
    onSubmit(restData); 
    setNombre('');
    setN_Personas('');
    setFecha('');
    setHora('');
    setEstado('');
    setMesa('');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded shadow-sm bg-light">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" placeholder="Nombre del cliente" value={nombre}  onChange={(e) => setNombre(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="n_personas" className="form-label">Número de personas</label>
        <input type="number" className="form-control" placeholder="Ingrese el número de personas" value={n_personas} onChange={(e) => setN_Personas(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">Fecha</label>
        <input type="date" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="hora" className="form-label">Hora</label>
        <input type="time" className="form-control" value={hora} onChange={(e) => setHora(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="estado" className="form-label">Estado</label>
        <select className="form-select" value={estado} onChange={(e) => setEstado(e.target.value)} required>
          <option value="">Seleccionar estado</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Cancelada">Cancelada</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="mesa" className="form-label">Mesa</label>
        <input type="number" className="form-control" placeholder='Ingrese el número de la mesa' value={mesa} onChange={(e) => setMesa(e.target.value)} required/>
      </div>
      <button type="submit" className="btn btn-primary w-100"> {initialRest ? 'Actualizar' : 'Agregar'} </button>
    </form>
  );
}

export default RestForm;
