import React, { useState, useEffect, useRef, useCallback } from 'react';

import Button from './Button';

const Counter = ({ delay }) => {

    // pour avoir une ref unique
    // l'objet son contenu peut changer
    // pour mettre mon setInterval
    const intervalRef = useRef(null);

    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0);

    const start = () => {
        // optimisation
        if(intervalRef.current !== null ) return ;
        setActive(!active);

        intervalRef.current = setInterval(() => {
            setCount(count => count + 1)
        }, delay);
    };

    const stop = () => {
        if(intervalRef.current == null ) return ;
        setActive(!active);
        clearInterval(intervalRef.current);

        intervalRef.current = null;
    }

    const reset = () => {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setCount(0);
            setActive(false);
    }

    // démontage et nettoyage du composant
    useEffect(() => {

        return () => {
            reset();
            console.log('demontage');
        }
    }, [])

    // TODO

    return (
        <>
            <p className="btn btn-block">Count : {count}</p>
            <Button
                handleClick={start}
                label="start"
                active={active}
             />
            <Button
                handleClick={stop}
                label="stop"
                active = {!active}
             />
            { (count > 1) == true && <Button handleClick={reset} label="reset" /> }       
        </>
    );
}

export default Counter;