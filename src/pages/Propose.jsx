// TODO: Complete it

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import { NoPopup } from "../components/NoPopup";

export function Propose() {

    const [why, setWhy] = useState(false);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
    setShowPopup(!showPopup);
    };

    return <div className="flex min-w-screen min-h-screen justify-center items-center bg-[#F4F8D3]">
        <div className="flex-col">
            <div className="text-8xl text-center font-firstHead text-[#FF76CE] font-bold p-8 mt-8">
                Hemlo Baby
            </div>
            
            <div className="flex justify-center">
                <img src="../src/assets/bubuDudu/lieOnTop.png" alt="lieOnTop" className="w-[150px] h-[150px]"/>
            </div>

            <div className="p-8 text-3xl text-center font-firstHead">
                I just wanted to ask...
            </div>
            <div className="font-rollingBeat font-semibold text-6xl p-8 text-center">
                Will You Be My Valentine?
            </div>

            {why && <Dropdown />}

            <div className="flex justify-center items-center">
                <div className="flex justify-around w-[400px]">
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => {
                        navigate("/accepted")
                    }}>{"Yes <3"}</button>
                    
                    <button type="button" id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={()=>{
                        setWhy(x => !x);
                    }} hidden={why} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Why should I?</button>
                    
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={togglePopup}>{"No :("}</button>
                    {showPopup && <NoPopup clicked={togglePopup}/>}
                </div>
            </div>
        </div>
    </div>
}