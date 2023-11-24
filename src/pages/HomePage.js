import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

import '../css/transportes.css';

const HomePage = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true
    };

    return (
        <main className="holder">
            <div className="homeimg">
                <Slider {...settings}>
                <img src="/img/home/img01.jpg" alt="imagen 01" />
                <img src="/img/home/img02.jpg" alt="imagen 02" />
                <img src="/img/home/img03.jpg" alt="imagen 03" />
                <img src="/img/home/img04.jpg" alt="imagen 04" />
                <img src="/img/home/img05.jpg" alt="imagen 05" />
                </Slider>
            </div>

            <div className="columnas">

                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum reiciendis laborum unde dolorem expedita excepturi atque veniam, vel itaque voluptatibus aliquid rem possimus deserunt veritatis esse, cumque laboriosam natus.</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div class="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Gómez</span>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomePage;