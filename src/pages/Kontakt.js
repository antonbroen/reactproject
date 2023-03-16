import React from "react";

class Kontakt extends React.Component{
    render() {
        return ( 
        <main>
            <div class="contact__container">
        <div class="contact-box">
            <div class="left">
            </div>
            <div class="right">
                <h2>Kontakta Oss</h2>
                <h1>Vi tar inte emot beställningar via mejl</h1>
                <input type="text" class="field" placeholder="Namn"/>
                <input type="email" class="field" placeholder="Mejladress"/>
                <textarea class="field area" placeholder="Meddelande"></textarea>
                <button class="btn">Send</button>
            </div>
            <h2>ÖPPETTIDER</h2>
                <ul>
                    <li>Mån - Fre: 11.00 - 21.00</li>
                    <li>Lördag: 12.00 - 21.00</li>
                    <li>Söndag: 12.00 - 21.00</li>
                </ul>
                <h3>Tel Nr: 0498-210888</h3>
        </div>
        
    </div>

        </main>
          
        )      
    }
}

export default Kontakt; 