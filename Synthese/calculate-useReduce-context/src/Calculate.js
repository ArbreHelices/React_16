import React, { useContext } from 'react';
import { CalculateContext } from './reducer/Reducer';

const Calculate = () => {

  // je récupère le state et la logique dispatch du reducer
  // j'ai tout passé dans un tableau donc je destructure comme suit
  const [ state, dispatch ] = useContext(CalculateContext);

  // Todo

  return (
    <>
      {/* todo */}
    </>
  )
}

export default Calculate;