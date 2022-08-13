import React from "react";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education";
import Success from "./Success";
import Extras from "./Extras";
import { useGlobalContext } from "./GlobalContext";
const UserForm = () => {
  const { state, step, status, setState, setStatus, setStep,prevStep,nextStep,submitted,handleChange } = useGlobalContext();
  switch (step) {
    case 1:
      return (
        <div className="App pt-5 mt-5">
          <div className="container col-lg-8 mx-auto text-center">
            <PersonalDetails
              values={state}
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );
    case 2:
      return (
        <div className="pt-5 mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <Experience
              values={state}
              prevStep={prevStep}
              /*submitted={this.submitted}*/
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );
    case 3:
      return (
        <div className="App pt-5 mt-5">
          <div className="container col-lg-8 mx-auto text-center">
            <Project
              values={state}
              prevStep={prevStep}
              /*submitted={this.submitted}*/
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );
    case 4:
      return (
        <div className="App pt-5 mt-5">
          <div className="container col-lg-8 mx-auto text-center">
            <Education
              values={state}
              prevStep={prevStep}
              /*submitted={this.submitted}*/
              nextStep={nextStep}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );
    case 5:
      return (
        <div className="App pt-5 mt-5">
          <div className="container col-lg-8 mx-auto text-center">
            <Extras
              values={state}
              prevStep={prevStep}
              nextStep={nextStep}
              submitted={submitted}
              handleChange={handleChange}
            />
          </div>
          <br />
        </div>
      );
    case 6:
      return (
        <div className="App pt-5 mt-5">
          <div className="container col-lg-8 mx-auto text-center">
            <Success />
          </div>
          <br />
        </div>
      );

    default:
      break;
  }
};

export default UserForm;
