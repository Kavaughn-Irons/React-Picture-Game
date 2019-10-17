import React from "react";

const containerStyle = {
marginTop : '50px'
}

const imageStyle = {
width : '300px',
height : '300px' 
}

function Home() {
  return (
    <div>
    <div style={containerStyle} className="container">

      <div className="row">

        <div className="col-xl-4">
        <img style={imageStyle} src="https://bit.ly/2V8ZWjE" alt='Game Image'></img>
        </div>

        <div className="col-xl-4">
        <img style={imageStyle} src="https://bit.ly/2OrbCx5" alt='Game Image'></img>
        </div>

        <div className="col-xl-4">
        <img style={imageStyle} src="https://bit.ly/2VeKzX8" alt='Game Image'></img>
        </div>

      </div>

      <div className="row">

        <div className="col-xl-4">

        </div>

        <div className="col-xl-4">

        </div>

        <div className="col-xl-4">

        </div>

      </div>

      <div className="row">

        <div className="col-xl-4">

        </div>

        <div className="col-xl-4">

        </div>

        <div className="col-xl-4">

        </div>

      </div>

    </div>

    </div>
  );
}

export default Home;
