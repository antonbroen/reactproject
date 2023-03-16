import React from "react";

class Information extends React.Component{
    render() {
        return ( 
        <main>
            <div class="information__container">
            <div class="information__content">
            <h2>Om Oss, vår historia</h2>
            <div class="information__img--container">
                <img src={require("./images/pic5.jpg")} alt="pic5" id="information__img"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper rhoncus dapibus.</p>
            <p>Duis non ultrices leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, </p>
            <p>per inceptos himenaeos. Integer eu lacus tempor, varius turpis eu, laoreet risus. Quisque dictum dapibus ultrices.</p>
            <p>Maecenas sed massa sed sapien convallis ultricies. Integer pulvinar orci ac ex scelerisque, in imperdiet metus efficitur.</p>
            </div>
            </div>
        </main>
          
        )      
    }
}

export default Information; 