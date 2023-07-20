import { useState } from 'react'
import './App.css'

function App() {

  const [email, setEmail] = useState('')
  const [words, setWords] = useState()

  // Handle text file function
  const handleFile = (e) => {
    e.preventDefault()

    const fileInput = document.getElementById('inputFile')
    const file = fileInput.files[0]

    // Check file is not empty
    if (!file) {
      alert('Selecciona un archivo de texto .txt')
      return
    }

    // Check if extension file is different from .txt
    if (!file.name.includes('.txt')) {
      alert('Formato de texto invalido, por favor ingresa unicamente archivos .txt ')
      return
    }

    const fr = new FileReader()
    fr.readAsText(fileInput.files[0])

    fr.addEventListener('load', () => {
      setWords(fr.result.split('\r\n'))
    })

  }

  return (
    <main>
      <h1>Formulario lector de archivos .txt</h1>
      <div className='container'>
        <div className='formsContainer'>
          <form className='form'>
            <label htmlFor='inputFile' >Subir archivo .txt</label>
            <input type="file" accept='.txt' id='inputFile' required />
          </form>
          <div className='form'>
            <label htmlFor='emailInput' >Introduce tu correo</label>
            <form onSubmit={(e) => handleFile(e)} className='email'>
              <input type="email" id='emailInput' placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button>
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className='table'>
          <div className='table__grid table__grid-title'>
            Palabra
          </div>
          <div className='table__grid table__grid-title'>
            Cantidad de letras
          </div>
          {words?.map(item => (
            <>
              <div className='table__grid'>
                {item}
              </div>
              <div className='table__grid'>
                {item.length}
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
