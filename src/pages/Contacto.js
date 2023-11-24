import '../css/transportes.css';

const Contacto = (props) => {

    return(
        <main className="holder contacto">
        <div className="formulario">
            <h2>Contacto Rápido</h2>
            <form action="">
                <p>
                    <label for="">Nombre</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email" />
                </p>
                <p>
                    <label for="">Teléfono</label>
                    <input type="text" />
                </p>
                <p>
                    <label for="" className="arriba">Mensaje</label>
                    <textarea></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vías de contacto</h2>
            <p>También puede contactarse con nosotros a través de:</p>
            <ul>
                <li>Teléfono: (011) 1234-5555</li>
                <li>Email: <a href="mailto:contacto@transportesx.com" target="_blank">contacto@transportesx.com</a></li>
                <li>Facebook: <a href="#" target="_blank">Link</a></li>
                <li>Twitter: <a href="#" target="_blank">Link</a></li>
                <li>Skype: <a href="#" target="_blank">Link</a></li>
            </ul>
        </div>
        
    </main>
    )
}

export default Contacto;