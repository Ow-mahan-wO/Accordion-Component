import React from "react";

import {Accordion} from './Components/Accordion/Accordion';
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Accordion
      //Your Answer
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
      // 
      //Your Question
        Question="Lorem ipsum dolor sit amet?"
      //
      //TextColor
        Color="white"
      //
      //backGroundColor
        Bg_Color="gray"
      //
      //Text FontSize
        FontSize="14"
      //
      />
       
    </>
  );
};

export default App;
