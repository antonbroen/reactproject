import React from "react";

class Home extends React.Component{
    render() {
        return ( 
        <main>
        <div className="main">
        <div className="main__container">
            <div className="main__content">
                <h1>Thai Thai</h1>
                <h2>FastFood - Take Away</h2>
                <p>Thai & Sushi Restaurang i Visby</p>
                <h3>ÖPPETTIDER</h3>
                <ul>
                    <li>Mån - Fre: 11.00 - 21.00</li>
                    <li>Lördag: 12.00 - 21.00</li>
                    <li>Söndag: 12.00 - 21.00</li>
                </ul>
                <h3>Tel Nr: 0498-210888</h3>
                <a href="https://sushibarvisby.se/thai%20thai%20restaurang/thai%20thai%20meny">Thai Thai Visby</a>
            </div>
            <div className="main__img--container">
                <img src={require("./images/pic3.jpg")} alt="pic" id="main__img"/>
            </div>
        </div>
    </div>
    </main>   
    )      
    }
}

export default Home; 