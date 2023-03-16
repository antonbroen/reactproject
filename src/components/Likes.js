import React from "react";


class Likes extends React.Component {

    state = {
        likes: 0

    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render(){
        return(

           <main>
            <div class="likes__container">
            <div>
                <button onClick={this.handleClick}>Gilla! {this.state.likes}</button>

            
            </div>

            </div>
            </main>
        )
    }
}

export default Likes;