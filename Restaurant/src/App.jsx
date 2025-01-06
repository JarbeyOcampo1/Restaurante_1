import './App.css'
import RestTable from './components/RestTable';
import RestForm from './components/RestForm';
import { db } from './components/firebase';
import {useState, useEffect} from 'react';
import { collection,addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';

function App() {
  const [rest,setRest] = useState([]);
  const [editingRest,setEditingRest] = useState (null);

  useEffect (() =>{
    fetchRest();
  },[]);

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
      const RestDocRef = doc(db, 'rest', editingRest.id);
      await updateDoc(RestDocRef, restData);
    } else {
      await addDoc(collection(db, 'rest'), restData);
    }
    setEditingRest(null);
    fetchRest();
  };

  const handleEditRest = (rest) =>{
      setEditingRest(rest);
  }

  const handleDeleteRest = async (id) => {
    const RestDocRef = doc(db, 'rest', id);
    await deleteDoc(RestDocRef);
    fetchRest();
  };

return (
  <div>
    <h1>Restaurante</h1>
    <h2>Lista clientes</h2>
    <RestTable rests={rest} onEdit={handleEditRest} onDelete={handleDeleteRest}/>
    <h2>{editingRest ? 'editar reserva' : 'crear reserva'}</h2>
    <RestForm onSubmit={handleCreateOrUpdateRest} initialRest={editingRest}/>
  </div>
)
}

export default App
