### PROYECTO DE UN RESTAURANTE 

- **Nombre del proyecto:** Restaurante "Jardin"
- **Objetivo:** Diseñar un App que ofrezca una experiencia de reserva de mesa de manera rápida para los empleados del restaurante y para los clientes.
- **Funcionalidades:**
- **Reserva de mesa:** Los empleados podrán reservar una mesa con el nombre del cliente, Numero de personas, Fecha, Hora, Estado conformado por 3 estados: Confirmada, Pendiente, Cancelada y Acciones para eliminar o editar la reserva.
- **Listado de reservas:** Los empleados podrán ver el listado de todos los clientes

----------------------------------------------------------------------------------------------

#  Tecnologias utilizadas en el proyecto

- **Frontend:**

## React
![React Logo](https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png)

## JavaScript
![JavaScript Logo](https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png)

## CSS
![CSS Logo](https://e7.pngegg.com/pngimages/603/759/png-clipart-css3-cascading-style-sheets-logo-html-world-wide-web-blue-angle-thumbnail.png)

## HTML
![HTML Logo](https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5-thumbnail.png)
- **Backend:**

## Firebase
![Firebase Logo](https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png)


----------------------------------------------------------------------------------------------

#  Explicacion del codigo 

// Utilice una carpeta components para separar los componentes del App.jsx principal

* Este codigo Firebase es utilizado para poder interactuar con la base de datos de Firebase y el front

```Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwfaI9_goKKpHrIa7UU3kUGiLjGg0bU6Q",
  authDomain: "restaurant-f0bdc.firebaseapp.com",
  projectId: "restaurant-f0bdc",
  storageBucket: "restaurant-f0bdc.firebasestorage.app",
  messagingSenderId: "1096184748798",
  appId: "1:1096184748798:web:eb771244f3ba64063f23af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

------

* Este codigo se utiliza para la interfaz del restaurante 
``` React
import './App.css';
import RestTable from './components/RestTable';
import RestForm from './components/RestForm';
import { db } from './components/firebase';
import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [rest, setRest] = useState([]);
  const [editingRest, setEditingRest] = useState(null); 

  useEffect(() => {
    fetchRest();
  }, []);

  const fetchRest = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'rest'));
      const restArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRest(restArray);
    } catch (error) {
      console.error('Error al cargar las reservas: ', error);
    }
  };

  const handleCreateOrUpdateRest = async (restData) => {
    if (editingRest) {
      const restDocRef = doc(db, 'rest', editingRest.id); 
      await updateDoc(restDocRef, restData);
    } else {
      await addDoc(collection(db, 'rest'), restData); 
    }
    setEditingRest(null);
    fetchRest();
  };

  const handleEditRest = (rest) => {
    setEditingRest(rest); 
  };

  const handleDeleteRest = async (id) => {
    const restDocRef = doc(db, 'rest', id);
    await deleteDoc(restDocRef);
    fetchRest(); 
  };

  return (
    <div>
      <h1>Restaurante</h1>
      <h2>Lista clientes</h2>
      <RestTable rests={rest} onEdit={handleEditRest} onDelete={handleDeleteRest} />
      <h2>{editingRest ? 'Editar reserva' : 'Crear reserva'}</h2>
      <RestForm onSubmit={handleCreateOrUpdateRest} initialRest={editingRest} />
    </div>
  );
}

export default App;

 ```

 ------

 * Este codigo permite editar y eliminar reservas incluyendo un formulario para ingresar datos 

 ``` React
 import { useState, useEffect } from 'react';

function RestForm({ onSubmit, initialRest }) {

  const [nombre, setNombre] = useState('');
  const [n_personas, setN_Personas] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    if (initialRest) {
      setNombre(initialRest.nombre);
      setN_Personas(initialRest.n_personas);
      setFecha(initialRest.fecha);
      setHora(initialRest.hora);
      setEstado(initialRest.estado);
    }
  }, [initialRest]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const restData = { nombre, n_personas, fecha, hora, estado };
    onSubmit(restData); 
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
        <input type="text" className="form-control" placeholder="Nombre del cliente" value={nombre}  onChange={(e) => setNombre(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="n_personas" className="form-label">Número de personas</label>
        <input type="number" className="form-control" placeholder="Ingrese el número de personas" value={n_personas} onChange={(e) => setN_Personas(e.target.value)} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">Fecha</label>
        <input type="date" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} require/>
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
      <button type="submit" className="btn btn-primary w-100"> {initialRest ? 'Actualizar' : 'Agregar'} </button>
    </form>
  );
}

export default RestForm;

  ```

  --------

* Este componente sirve para mostrada una fila con informacion de cada cliente
  ``` React 
  const RestRow = ({rest,onEdit,onDelete}) =>{

    const handleEdit = () =>{
        console.log("Click para editar: ",rest);
        onEdit(rest);
    }

    const handleDelete = () => {
        console.log("Click para eliminar por id",rest.id);
        onDelete(rest.id);
    }

    return (
        <tr>
            <td>{rest.nombre}</td>
            <td>{rest.n_personas}</td>
            <td>{rest.fecha}</td>
            <td>{rest.hora}</td>
            <td>{rest.estado}</td>
            <td>
                <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={handleEdit}> Editar </button>
                <button className="btn btn-danger" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    )
}

export default RestRow
  ```

--------

* Se encarga de renderizar cada fila de la tabla con la informacion de cada cliente y sus acciones
``` React
import RestRow from "./RestRow"

function RestTable ({rests,onEdit,onDelete}) {

    return(
        <div className="container mt-4">
            <table className="table table-striped table-bordered">
                <thead  className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Numero personas</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { rests && rests.length > 0 ? (
                        rests.map((rest) => (
                            <RestRow key={rest.id} rest={rest} onEdit={onEdit} onDelete={onDelete} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={"4"} className="text-center">No hay reservar disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RestTable

 ````
