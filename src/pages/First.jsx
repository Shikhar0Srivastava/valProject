import PropTypes from 'prop-types'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function First() {

    const [noOfImages, setNoOfImages] = useState(0);
    const navigate = useNavigate();

    return <div className="flex w-full h-full justify-center items-center bg-[#F4F8D3]">
        <div className="flex-col">

            <div className="text-center text-6xl font-rollingBeat p-8 pb-4 text-[#FF76CE]">
                This website is only for my baby
            </div>

            <div className="text-center text-3xl font-firstHead py-4 font-bold">
                {noOfImages < 1 ? "Is this you?" : noOfImages < 2 ? "What about now?" : "Final Hint!"} 
            </div>

            <div className="flex flex-col justify-center items-center min-w-[200px]">
                <div className="flex h-auto justify-center mb-2">
                    <img src="/assets/her/first.jpg" alt="firstImage" hidden={noOfImages != 0} className="w-50 h-90 rounded-md mx-4"/>
                    
                    <img src="/assets/her/second.jpg" alt="secondImage"  hidden={noOfImages != 1} className="w-50 h-90 rounded-md"/>
                    
                    <img src="/assets/her/third.jpg" alt="thirdImage" hidden={noOfImages != 2} className="w-55 h-90 rounded-md mx-4"/>
                </div>
                <div className="flex justify-around w-[400px] py-4">
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => {
                        navigate("/yesHer")
                    }}>Yes, this is me</button>
                    
                    <button type="button" onClick={()=>{
                        setNoOfImages(x => x + 1);
                    }} hidden={noOfImages >= 2} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Not sure</button>
                    
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => {
                        navigate("/notHer")
                    }}>Not me</button>
                </div>
            </div>
        </div>
    </div>
}

First.propTypes = {
    noOfImages: PropTypes.number,
    setNoOfImages: PropTypes.func
}