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