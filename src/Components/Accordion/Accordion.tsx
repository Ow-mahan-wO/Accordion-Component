import React, { useState } from "react";
import { PropsModel } from "../../model";

export const Accordion: React.FC<PropsModel> = ({ children, Question,Color,Bg_Color,FontSize}) => {
  const [Isopen, setIsopen] = useState(false);
  const OpenAndCloseHandher = () => {
    setIsopen(!Isopen);
  };
  const CustomStyle ={
    backgroundColor:Bg_Color,
    color:Color,
    fontSize:FontSize+'px'
  }
  return (
    <>
      <div className="flex justify-center mt-2 flex-col items-center">
        <div style={CustomStyle} className={`md:w-36 flex justify-between sm: p-5 border-b-2 border-gray-500 w-97`}>
          <div>
            <p className="font-mono">{Question}</p>
          </div>
          <div className="cursor-pointer" onClick={OpenAndCloseHandher}>
            <p className="font-bold">
              {Isopen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </p>
          </div>
        </div>
        {Isopen ? (
          <div style={CustomStyle} className="md:w-36 sm: w-97 p-5 ">
            <p className="font-mono">{children}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
