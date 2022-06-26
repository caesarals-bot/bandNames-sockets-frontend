import { useContext, useState } from "react"
import { socketContext } from "../context/socketContext"

export const BandAdd = () => {
  const [valor, setValor] = useState('')
  const {socket} = useContext(socketContext)

  const onSubmit = (ev) => {
    ev.preventDefault()
    if(valor.trim().length > 0){
      socket.emit('new-band', {name: valor})
      setValor('')
    }
    console.log(valor)
  }
  return (
    <>
        <h3>Agregar Banda</h3>
        <form onSubmit={ onSubmit }>
            <input 
                className="form-control"
                placeholder="Nuevo nombre de banda"
                value={ valor }
                onChange={(ev) => setValor(ev.target.value)}    
            />
        </form>
    </>
  )
}
