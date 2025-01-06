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
                <button onClick={handleEdit}> Editar </button>
                <button onClick={handleDelete}> Eliminar </button>
            </td>
        </tr>
    )
}

export default RestRow