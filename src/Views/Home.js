import React, {useState, useEffect} from "react";
import axios from "axios";
import News from "../components/News";

function Home(){

    return(
        <div>
           <News/>
        </div>
    );
}

export default Home;