export function Dropdown() {
    return <div className="flex-col mb-8">
            <div className="font-firstHead text-center text-3xl p-4">
                {"You'll get"}
            </div>
            <div className="flex justify-around">
                <div className="font-firstHead text-center font-semibold">
                    <img src="/assets/bubuDudu/heart.png" alt="heart" className="py-2 w-[150px] h-[150px]" />
                    My heart
                </div>
                <div className="font-firstHead text-center font-semibold">
                    <img src="/assets/bubuDudu/hug.png" alt="hug" className="py-2 w-[150px] h-[150px]" />
                    A lot of hugs
                </div>
                <div className="font-firstHead text-center font-semibold">
                    <img src="/assets/bubuDudu/kiss.png" alt="kiss" className="py-2 w-[150px] h-[150px]" />
                    Even more kisses
                </div>
                <div className="font-firstHead text-center font-semibold">
                    <img src="/assets/bubuDudu/love.png" alt="love" className="py-2 w-[150px] h-[150px]" />
                    And all of my love
                </div>
        </div>
    </div>
}