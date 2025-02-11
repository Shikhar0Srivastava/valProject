import PropTypes from "prop-types"

export function NoPopup({clicked}) {
    return <>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px] flex-col flex justify-center"> {/* min-w to set a minimum width */}
            <img src="/assets/bubuDudu/bubu-no.gif" alt="" />

            <div className="font-firstHead text-center font-semibold text-2xl p-4">
              {"No No No."}
              <br/>
              {"You can't say no. Go back and agree.(* ￣︿￣)"}
            </div>
            <button onClick={clicked} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              {"Okay Fine :)"}
            </button>
          </div>
        </div>
    </>
}

NoPopup.propTypes = {
  clicked: PropTypes.func
}