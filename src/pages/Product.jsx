import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";
import { Loading } from "../Components/Loading";
export default function Product(){
    let [data,setData]=useState([]);

    async function fetch(){
        let {data}=await axios.get('https://fakestoreapi.com/products');
        setData(data);
        
    }
   useEffect(()=>{
       fetch();
   },[])
    const [Page, setPage] = useState(1);
  const totalProducts = 10;
    return(
        <>
         <h1 style={{textAlign:"center"}}>TOP PRODUCTS</h1>
          <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center',marginTop:'20px'}}>
            { data.length==0?<Loading/>:data.map((item,Index)=>(
                <div key={Index} style={{
                    border:'2px solid black',
                    width:'300px',
                    height:'390px',
                    justifyItems:'center',
                    borderRadius:'5px'
                    }}>
                     <div><img src={item.image} alt={item.title} width={150} height={150} style={{marginTop:'20px'}}/></div>
                    <div style={{
                      textAlign:'center',
                     marginTop:'10px'
                    }}><div style={{marginBottom:'10px'}}><span style={{fontWeight:'bold'}}>Title</span>:{item.title.length>30?item.title.slice(0,31)+'...':item.title}</div>
                    <p style={{marginBottom:'10px'}}><span style={{fontWeight:'bold'}}>Details</span>:{item.description.length>50?item.description.slice(0,51)+'...':item.description}</p>
                    <div style={{marginBottom:'10px'}}><span style={{fontWeight:'bold'}}>Price</span>:${item.price}</div>
                    </div>
                    <button style={{
                    backgroundColor:" orange",
                    border:"2px solid orange",
                    borderRadius:'5px'
                    }} >Add to Cart</button>
                    <button style={{marginLeft:'10px',backgroundColor:'darksalmon',border:'2px solid darksalmon',borderRadius:'5px'}}>Details</button>
                </div>
            ))}
          </div>
          <div>
            
          </div>
          
        </>
    )
}