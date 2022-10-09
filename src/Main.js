import React, { useEffect, useState } from "react";
import './Main.css';
function Main(){
    const [data,setdata] = useState(null);
    const [cityname , setcity ] = useState("Kurnool");
    function gayathris(){
        var city = document.getElementById("gd").value
        setcity(city)
    }
    useEffect(()=>{
                        fetch(
                                `https://api.weatherapi.com/v1/current.json?key=c8ce453d511d4d989a2181008220510&q=${cityname}&aqi=no`)
                                            .then((res) => res.json())
                                            .then((json) => {
                                                setdata(json)
                                                console.log(json)
                                            })
                    
    },[cityname])
    return(
        <div className="Main">
            <div className="weather">
                <div className="one">
                    <img className="image" src={data?data.current.condition.icon:"url"} alt="Weather Image"/>
                </div>
                <div className="two">
                    <div >
                    <table >
                        <tr>
                            <td className="class1">City Name</td>
                            <td>: {data?data.location.name:"Not Set"}</td>
                        </tr>
                        <tr>
                            <td className="class1">Temperature in C</td>
                            <td>: {data?data.current.temp_c:"Not Set"}</td> 
                        </tr>
                        <tr>
                            <td className="class1">Temperature in F</td>
                            <td>: {data?data.current.temp_f:"Not Set"}</td>
                        </tr>
                        <tr>
                            <td className="class1">Condition</td>
                            <td>: {data?data.current.condition.text:"Not Set"}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className="three">
                    <div >
                        <input id="gd" type="text" placeholder ="Enter the city name"/>
                    </div>
                    <div>
                        <button type="submit" onClick = {gayathris}>
                        Submit
                        </button>
                    </div>
                </div>

            </div>
           
        </div>
    )
}
export default Main;