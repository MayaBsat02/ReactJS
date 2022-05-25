import React from "react";
import {
    SpinnerContainer,
    LoadingSpinner
} from '../styles/LoadingSpinner.style.js';

const LoadingSpinnerComponent=()=> {
  return (
    <SpinnerContainer>
      <LoadingSpinner></LoadingSpinner>
    </SpinnerContainer>
  );
}


export default LoadingSpinnerComponent