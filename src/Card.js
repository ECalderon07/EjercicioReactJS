import React from 'react';
import logo from './gym.png';
import './Card.css';

class Card extends React.Component { //Componentes de clases  


    render() {
        const { tittle, description,img,leftColor,rightColor} = this.props;
        return (
            <div className="card mx-auto Fitness-Card" style={{ background:`linear-gradient(to right,${leftColor},${rightColor})` }}
            >
                <div className="card-body">

                    <div className="row center ">

                        <div className="col-6">

                            <img src={img} className="float-rigth " id="Imagen" />

                        </div>

                        <div className="col-6 Fitness-Card-Info">

                            {/* <h1>Tecnologia </h1> */}
                            <h1>{tittle}</h1>
                            <p>{description}</p>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Card;