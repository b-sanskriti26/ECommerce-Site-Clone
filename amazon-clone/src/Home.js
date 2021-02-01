import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                
                <img   
                className="home__image"
                src="backbg.png" alt="failed to load"
                />
            <div className ="home__row">
                <Product
                id="2094" 
                title="The Lean Startup"
                price={500}
                image="book.jpg"
                rating={3}
                />

                <Product
                id="4321" 
                title="Borosil Flower Series Opalware Dinner Set, 35 Pieces, White"
                price={1650}
                image="dinnerSet.jpg"
                rating={3}
                />

                <Product 
                id="1234" 
                title="The Alchemist"
                price={300}
                image="book2.jpg"
                rating={4}
                />
               

            </div>

            <div className="home__row">
                
                <Product 
                id="5678" 
                title="Urban Style Decore Bean Bag"
                price={1700}
                image="beanBag.jpg"
                rating={3}
                />

                <Product
                id="9012" 
                title="Wood Stylish Chair with White Cushions for Living Room"
                price={2100}
                image="chair.jpg"
                rating={4}
                />
                

                <Product
                id="3214" 
                title="LG 14 Place Settings Wi-Fi Dishwasher"
                price={23000}
                image="dishwasher.jpg"
                rating={4}
                />
            </div>

            <div className="home__row">
                <Product
                id="7689" 
                title="Sharpex Italian Plastic Sequare Planter Pot for All House Plants"
                price={860}
                image="houseplant.jpg"
                rating={3}
                />

                <Product
                id="9834" 
                title="Bajaj Rex Mixer Grinder"
                price={1900}
                image="mixer.jpg"
                rating={4}
                />

                <Product
                id="4098" 
                title="LG 80 cm (32 inches) HD Ready Smart LED TV "
                price={17000}
                image="tv.jpg"
                rating={4}
                />
            </div>

            <div>   
                <Product
                id="7049" 
                title="Fire-Boltt Full Touch Smart Watch "
                price={3000}
                image="watch.jpg"
                rating={4}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
