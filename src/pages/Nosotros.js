import '../css/transportes.css';

const Nosotros = (props) => {

    return(
        <main className="holder">
        <section className="historia">
            <h2>Historia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi minus similique in maiores optio voluptatem maxime. Vel accusamus voluptas harum dolor ab possimus et? Veniam fugiat optio adipisci eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quaerat quos. Eum, libero dignissimos cum, exercitationem voluptatibus aliquid amet accusamus natus, sapiente obcaecati eveniet repudiandae et nemo voluptates aliquam laborum?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi minus similique in maiores optio voluptatem maxime. Vel accusamus voluptas harum dolor ab possimus et? Veniam fugiat optio adipisci eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quaerat quos. Eum, libero dignissimos cum, exercitationem voluptatibus aliquid amet accusamus natus, sapiente obcaecati eveniet repudiandae et nemo voluptates aliquam laborum?</p>
        </section>
        <section>
            <h2>Staff</h2>
            <div className="personas">
                {/* <!-- Persona 1 --> */}
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="" />
                    <h5>Juan Gómez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                {/* <!-- Persona 2 --> */}
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="" />
                    <h5>Juan Gómez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                {/* <!-- Persona 3 --> */}
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt="" />
                    <h5>Juan Gómez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                {/* <!-- Persona 4 --> */}
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="" />
                    <h5>Juan Gómez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>
                {/* <!-- Persona 5 --> */}
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt="" />
                    <h5>Juan Gómez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam temporibus ad aut optio doloribus doloremque iste fuga vitae, deserunt explicabo. Adipisci labore, repellat esse molestias sapiente modi reprehenderit eaque!</p>
                </div>

            </div>
        </section>

    </main>

    )
}

export default Nosotros;