import React, { createContext, useReducer } from 'react';

const initialState = {
    result: 0,
    number1: "",
    number2: "",
    hasError: false,
};

const reducer = (state, action) => {
    // TODO
}

export const CalculateContext = createContext(initialState);

export const CalculateProvider = ({ children }) => {
    // création du reducer et des deux proprietes state et dispatch (logique algo)
    const [state, dispatch] = useReducer(reducer, initialState);

    // Je passe un tableau plus simple à destructurer par la suite
    return (
        <CalculateContext.Provider value={[state, dispatch]}>
            {children}
        </CalculateContext.Provider>
    )
}