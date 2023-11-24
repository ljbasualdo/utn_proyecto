import '../css/transportes.css';

const Servicios = (props) => {

    return(
        <main className="holder">
        <h2>Servicios</h2>
        <section className="servicios">

            {/* <!-- servicio --> */}
            <div className="servicio">
                <div className="descripcion">
                    <h3>Transporte Aéreo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                <img src="img/servicios/aereo.jpg" alt="Transporte Aéreo" />
            </div>

            {/* <!-- servicio --> */}
            <div className="servicio">
                <div className="descripcion">
                    <h3>Transporte Ferroviario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                <img src="img/servicios/ferroviario.jpg" alt="Transporte Ferroviario" />
            </div>

            {/* <!-- servicio --> */}
            <div className="servicio">
                <div className="descripcion">
                    <h3>Transporte Marítimo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                <img src="img/servicios/maritimo.jpg" alt="Transporte Marítimo" />
            </div>

            {/* <!-- servicio --> */}
            <div className="servicio">
                <div className="descripcion">
                    <h3>Transporte Terrestre</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                <img src="img/servicios/terrestre.jpg" alt="Transporte Terrestre" />
            </div>

        </section>

    </main>

    )
}

export default Servicios;