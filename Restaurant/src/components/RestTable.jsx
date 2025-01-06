import RestRow from "./RestRow"

function RestTable ({rests,onEdit,onDelete}) {

    return(
        <table>
            <thead>
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
                        <td colSpan={"4"}>No hay reservar disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default RestTable
