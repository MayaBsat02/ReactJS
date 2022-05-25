import styled from "styled-components"


export const Background =styled.div`
height: 100vh;
margin: 0%;

`

export const Form=styled.form`
    background-color: white;
    border-radius: 10px;
    width: 50%;
    margin: 7% auto;
    padding: 20px;
    background-color: transparent;

    @media (max-width: 700px) {
    width:100%;
    margin: 2% auto;
  }
    
`
export const FormTitle=styled.h1`
    text-align: center;
    margin: auto;
    color: white;

`
export const FormBody=styled.div`
   
    padding: 20px 10px;
`

export const FormGroup=styled.div`
    margin-bottom:2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`

export const FormLabel=styled.label`
    margin-bottom: 2%;
    width: 60%;
    text-align: left;
    font-size: 18px;
    font-style: italic;

`

export const FormInput=styled.input`
  width: 60%;
  border-radius: 50px;
  font-size: 18px;
  border: 1px solid gray;
  padding: 2%;
  opacity: 0.7;

  
`
export const Footer=styled.div`
  text-align: center;
 `

export const FormButton=styled.button`
    width: 65%;
    padding: 2.5% 0%;
    margin-bottom: 7%;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background-color: #2f4553;
background: linear-gradient(70deg, #2f4353 2%, #d2ccc4 74%);
  
`
