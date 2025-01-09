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
