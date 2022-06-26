import { useContext, useEffect, useState } from "react"
import { socketContext } from "../context/socketContext"

export const BandList = () => {

    const [bands, setBands] = useState([])

    const {socket} = useContext(socketContext)

    useEffect(() => {
        socket.on('current-bands', (data) => {
            setBands(data)})
        return () => socket.off('current-bands')
    }, [socket])
    
    const cambioNombre = (event, id) => {
        const newName = event.target.value

        setBands(bands => bands.map(band => {
            if(band.id === id) {
                band.name = newName
            }
            return band
        }))
        console.log(id)
    }

    const onPerdioFoco = (id, name) => {
        socket.emit('change-name', {id, name} )
    }
    const votar = (id) => {
        socket.emit('votar-banda', id)
    }
     //borrar banda
    const borrar = (id) => {
        socket.emit('remove-band', id)
    }


    const crearRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button 
                            className="btn btn-primary"
                            onClick={() => votar( band.id)}
                        >+1</button>
                    </td>
                    <td>
                        <input 
                            className="form-control"
                            value={band.name} 
                            onChange={(event) => cambioNombre(event, band.id)}
                            onBlur={() =>  onPerdioFoco(band.id, band.name)}
                        />
                    </td>
                    <td><h3>{band.votes}</h3></td>
                    <td>
                        <button 
                            className="btn btn-danger"
                            onClick={() => borrar(band.id)}
                        >Borrar</button>
                    </td>
                </tr>
            ))
            
        )
    }

  return (
    <>
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Votos</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {crearRows()}
            </tbody>
        </table>
    </>
  )
}
