import React from "react";
import { ReactDOM } from "react";
import QuotesConroller from "../controller/QuotesController";
import Navbar from './Navbar';


const Quotes = () =>{
    return(
        <div> 
       <Navbar/>
         <h1>Displaying Quotes</h1>
            <QuotesConroller/>
        </div>
    )
}

export default Quotes