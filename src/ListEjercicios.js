import React from 'react';
import Card from './Card';

function ListEjercicios(props) {
    return(
        <div>
        {
            props.ejerc.map((ejercicio) => {
                return (
                    <Card
                        tittle={ejercicio.title}
                        description={ejercicio.description}
                        img={ejercicio.img}
                        leftColor={ejercicio.leftColor}
                        rightColor={ejercicio.rightColor}
                    />
                )
            })
        }
    </div>
    )
}

export default ListEjercicios