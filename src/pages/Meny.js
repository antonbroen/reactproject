import React from "react";

class Meny extends React.Component {
    render() {
        return(
            <main>
                <div class="menu__container">
            <div class="menu">
            <h2 class="menu-group-heading">
                Förrätter
            </h2>
            <div class="menu-group">
                <div class="menu-item">
                    <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">1. Vegetariska Vårrullar 6st.</span>
                            <span class="menu-item-price">70:-</span>
                        </h3>
                        <p>
                            Med sweet chilisås
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">2. Tom Yam Goong</span>
                            <span class="menu-item-price">95:-</span>
                        </h3>
                        <p>
                            Thaisoppa med räkor
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">3. Tom Kha Gai</span>
                            <span class="menu-item-price">90:-</span>
                        </h3>
                        <p>
                            Thai kycklingsoppa med kokosmjölk
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            <h2 class="menu-group-heading">
                Huvudrätter
            </h2>
            <div class="menu-group">
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">4. Gaeng Kaew Wan Goong</span>
                            <span class="menu-item-price">130:-</span>
                        </h3>
                        <p>
                            Räkor i grön curry & kokosmjölk   
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">5.Gaeng Kaew Wan Gai</span>
                            <span class="menu-item-price">110:-</span>
                        </h3>
                        <p>
                            Kyckling i grön curry & kokosmjölk
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">6. Lorem ipsum dolor</span>
                            <span class="menu-item-price">110:-</span>
                        </h3>
                        <p>
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">7. Lorem ipsum dolor</span>
                            <span class="menu-item-price">110:-</span>
                        </h3>
                        <p>
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">8. Lorem ipsum dolor</span>
                            <span class="menu-item-price">110:-</span>
                        </h3>
                        <p>
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">9. Lorem ipsum dolor</span>
                            <span class="menu-item-price">110:-</span>
                        </h3>
                        <p>
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    
                    
                </div>
                <div class="menu-item">
                <img src={require("./images/template.jpg")} alt="Temp" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <span class="menu-item-name">10. Lorem ipsum dolor</span>
                            <span class="menu-item-price">110:-</span>
                        </h3>
                        <p>
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
            </main>
        )
    }
}

export default Meny;