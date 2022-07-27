import './Form.css';
import { useForm } from '../hooks/useForm';

export default function Form() {

    const {formState, onInputChange} = useForm ({
        nombre:'',
        email: '',
        password: ''
        
        
    });
    console.log(formState)
    const {nombre, email, password, onResetForm} = formState;

  return (
    <>
        <div className='form-container'>

            <h1>Formulario</h1>
            <hr/>
            <p>Nombre</p>
            <input type="text" className='form' placeholder='Digite su Nombre' name='nombre' value={nombre} onChange={onInputChange} />
            <p>Correo</p>
            <input type="email" className='form' placeholder='ejemplo@email.com' name='email' value={email} onChange={onInputChange} />
            <p>Contraseña</p>
            <input type="password" className='form' placeholder='contraseña' name='password' value={password} onChange={onInputChange} />
           
            <button onClick={onResetForm} className='btn btn-mora'>Enviar</button>

        </div>
    </>
  );
};
