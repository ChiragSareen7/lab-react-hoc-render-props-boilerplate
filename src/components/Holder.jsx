import React, { useState } from 'react';

const Holder = (ComponentToWrap) => {
    function WrappedComponent() {
        const [counter, setCounter] = useState(0);

        const handleCounter = () => {
            setCounter(counter + 1);
        }
        return (
            <div>
                <ComponentToWrap counter={counter} handleCounter={handleCounter} />
            </div>
        )
    }

    return WrappedComponent;
}

export default Holder;
