import React from 'react';

const UniversityCard: React.FC = () => {
  return (
    <div className="dorm-room w-4/5 m-28 p-3 h-[250px] bg-gray-300 flex  shadow-sm">
      <div className="bg-neutral-400 w-1/4 ">
        {/* Uncomment the image if needed */}
        <img
          src="https://i.pinimg.com/564x/dc/05/59/dc05592520168c42bb7b04630422637b.jpg"
          className="w-full h-full object-cover"
          alt="Dorm Room"
        />
      </div>

      <div className="ml-3 w-3/4">
        <div className="flex justify-between">
          <div>
            <h1 className="col font-bold text-2xl">University A</h1>
            <span>0.5 miles from city</span> <br />
            <span>Scholarship</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Financial</span>
          </div>
          <div className="flex items-center place-self-start">
            <div className="place-self-start">
              <h1>
                <b>Outstanding</b>
              </h1>
              <span>2340 reviews</span>
            </div>
            <div className="rate bg-blue-500 text-center p-2 text-white ml-2 w-14">
              9.8
            </div>
          </div>
        </div>

        <div className="flex mt-3">
          <div className="w-3/4">
            <h1 className="col font-semibold text-xl">Dormitory Room</h1>
            <span>1x twin size bed</span> <br />
            <span>1x shared bathroom</span>
          </div>
          <div className="flex justify-end place-self-end w-1/4">
            {/* Adjusted to right end */}
            <div className="w-100">
              <div className="flex justify-end  font-bold text-2xl">$200</div>
              <span>4 years, 1 student</span> <br />
            </div>
          </div>
        </div>

        {/* -----Tags ----------- */}
        <div className="flex items-center mt-5 justify-between">
          <div className="tag">
            <span className="border border-black p-1">#Scholarship</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="border border-black p-1">#Top Choice</span>
          </div>
          <div className="bg-blue-500 w-1/4 flex justify-center items-center text-white text-lg">
            View Option
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
