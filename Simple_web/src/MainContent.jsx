import './Maincontent.css'
import './MainMediaQ.css'

export default function MainContent(){


    return(
        <main className="container">
            <div className="firstSide">
            <h2>Your feet deserve the best</h2>

            <div className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam iure enim repudiandae! Sint, impedit. Quibusdam sapiente totam, ducimus vitae in impedit illum natus.</div>

            <div className="connection">
                <button className='btn'>Shop Now</button>
                <button className='btn cate'>Category</button>
            </div>

            <div className="other_platforms">
                <p>Also available on:</p>
                <img src="/images/flip.jpg" alt="flipcart" className="ohterPlat" />
                <img src="/images/amazon.jpg" alt="amazon"  className="ohterPlat"/>
                <img src="/images/ali.jpg" alt="amazon"  className="ohterPlat"/>
            </div>
            </div>

            <div className="secondSide">
                <div className="serve">
                    <img src="/images/shoee.png" alt="latest Article" />
                </div>
            </div>
        </main>
    )
}