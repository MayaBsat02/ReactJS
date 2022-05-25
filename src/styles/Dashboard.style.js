import styled from "styled-components"


export const Background =styled.div`
height: 100%;
margin: 0;

@media (max-width: 700px) {
    height:100%;
  }
`

export const Section=styled.section`
  margin: 1rem auto;
  width: 100%;
  max-width: 50rem;
  text-align: center;
  background-color:transparent;
  margin: 2rem auto;

  @media (max-width: 700px) {
    max-width:60rem;
    
  }
`
export const Button=styled.button`
 cursor: pointer;
  background: #483D8B;
  border: 1px solid #483D8B;
  color: white;
  font-size: large;
  padding: 1rem 4rem;
  border-radius: 20px;
  font-weight: bold;
 
`