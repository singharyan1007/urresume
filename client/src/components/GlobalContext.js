import React, { useState,useContext } from 'react'

const AppContext = React.createContext();

const  GlobalContextProvider=({children})=> {
    
         const [step, setStep] = useState(1);
        const [status, setStatus] = useState(0);
        const [state, setState] = useState({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          skills: "",
        
          exp1_org: "",
          exp1_pos: "",
          exp1_desc: "",
          exp1_dur: "",
        
          exp2_org: "",
          exp2_pos: "",
          exp2_desc: "",
          exp2_dur: "",
        
          proj1_title: "",
          proj1_link: "",
          proj1_desc: "",
        
          proj2_title: "",
          proj2_link: "",
          proj2_desc: "",
        
          edu1_school: "",
          edu1_year: "",
          edu1_qualification: "",
          edu1_desc: "",
        
          edu2_school: "",
          edu2_year: "",
          edu2_qualification: "",
          edu2_desc: "",
        
          extra_1: "",
          extra_2: "",
          extra_3: "",
          extra_4: "",
          extra_5: "",
        });
    const nextStep = () => {
      setStep(step + 1);
    };
    const prevStep = () => {
      setStep(step - 1);
    };
    const submitted = () => {
      setStatus(status + 1);
    };
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({ ...state, [name]: value });
      };
   
    return (
        <AppContext.Provider value={{ state, step, status, setState, setStatus, setStep,prevStep,nextStep,submitted,handleChange }}>
            {children}
      </AppContext.Provider>

  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, GlobalContextProvider}

