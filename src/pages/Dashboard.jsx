import React,{useState} from "react";
import { 
    Background,
    Section,
    Button
 } from "../styles/Dashboard.style";
import Products from "../components/Products";
import axios from "axios";
import LoadingSpinnerComponent from "../components/LoadingSpinner";



const Dashboard=()=>{

    const [products,setProducts]=useState([])
    const [isLoading, setIsLoading] = useState(false);
    

    const fetchProductsHandler= async ()=>{
        setIsLoading(true);
        try{
            let result = await axios.get("https://fakestoreapi.com/products")
            console.log(result.data)
            setProducts(result.data)
            setIsLoading(false)
        }catch (error){
            console.log(error)
        }
        console.log();


        

    }


    return(
        <Background>
            
            <Section>
                <Button onClick={fetchProductsHandler} disabled={isLoading}>Get Products</Button>
            </Section>
            <Section>
            {isLoading && <LoadingSpinnerComponent />}
                <Products products={products}/>
            </Section>
        </Background>
    )
}

export default Dashboard