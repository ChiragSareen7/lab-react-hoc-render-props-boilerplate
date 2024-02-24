import React, { useState } from 'react';
function HolderRender(props) {
        const [counter, setCounter] = useState(0);

        const Count = () => {
            setCounter(counter + 1);
        }

        return (
            <div>
               {props.render(counter,Count)}
            </div>
        );
    }


export default HolderRender;