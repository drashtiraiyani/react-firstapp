import React from "react";

function BoxModel() {
    return (
        <div>
            <header className="header">Headers</header>
            <nav>NavBar</nav>
            <slider>Slider</slider>
            {/* XML <drashti style = {{"color" : "Red", "display" : "Block"}}>Custom Tag[Content]</drashti> */}
            <section className="con-1">
                <div className="card">
                    <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height={"50%"} width={"100%"} />
                    <h2>Title</h2>
                    <p>Picture</p>
                </div>
                <div className="card">Cards</div>
                <div className="card">Cards</div>
                <div className="card">Cards</div>
            </section>
            <footer>Footer</footer>
        </div>
    )
}
export default BoxModel