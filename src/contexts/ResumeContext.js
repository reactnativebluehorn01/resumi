import React, { createContext, useState, useEffect } from "react";
import fakeData from "../utils/fake_data";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  //If there is no data stored in localStorage, then use the default object.
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || {
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      professional2: {},
      education: {},
      additional: [],
      socialLinks: {},
      courses: {},
      hobbies: {},
      languages: {},
      refrences: {},
      intrenship: {},
      extraCurricularActivity: {},
      addSection: {},
      skills: {},
      contextArray: [],
      barComplet: { 'percent': 18, 'headerData': true, 'professionalData': true }

    }
  );

  const [contentFake, setContentFake] = useState();

  //Used to "Right" components know when to use the original state or the fake one (for the "example")
  const [control, setControl] = useState(false);

  function updateAddSection(data) {


    setContent({ ...content, addSection: data });
  }

  function updateTopBarPercentage(data) {


    setContent({ ...content, barComplet: data });
  }

  function updateSkills(data) {


    setContent({ ...content, skills: data });
  }

  function updateHeaderData(data) {
    // console.log('updateHeaderData data is =======>>>', data);

    setContent({ ...content, header: data });

    if (content.barComplet.headerData && data) {
      let top_per = content.barComplet.percent + 8;
      updateTopBarPercentage({ ...content.barComplet, 'percent': top_per, 'headerData': !content.barComplet.headerData });

    }


  }


  function updateProfessionalData(data) {

    setContent({ ...content, professional: data });

    if (content.barComplet.professionalData && data.professionalSummer) {
      let top_per1 = content.barComplet.percent + 10;
      updateTopBarPercentage({ ...content.barComplet, 'percent': top_per1, 'professionalData': !content.barComplet.professionalData });

    }

  }

  function updateExtraCurricularActivity(data) {


    setContent({ ...content, extraCurricularActivity: data });
  }

  function updateIntrenshipData(data) {
    // console.log('updateHeaderData data is =======>>>', data);

    setContent({ ...content, intrenship: data });
  }

  function updateRefrencesData(data) {
    // console.log('updateHeaderData data is =======>>>', data);

    setContent({ ...content, refrences: data });
  }

  function updateCoursesData(data) {

    setContent({ ...content, courses: data });
  }

  function updateLanguagesData(data) {

    setContent({ ...content, languages: data });
  }


  function updateProfessionalData2(data) {
    // console.log('updateProfessionalData2 data is =======>>>', data);

    setContent({ ...content, professional2: data });
  }

  function updateEducationData(data, index) {

    // console.log('updateEducationData data is =======>>>', data);

    // let alldata = {
    //   data: data,
    //   index: index
    // }

    console.log('updateEducationData data ', index)
    setContent({ ...content, education: data });
    // setContent({ ...content, education: data });
  }

  function updateHobbies(data) {

    setContent({ ...content, hobbies: data });
    // setContent({ ...content, education: data });
  }

  function updateSocialLinks(data) {

    setContent({ ...content, socialLinks: data });
    // setContent({ ...content, education: data });
  }



  function updateAdditionalData(data) {
    setContent({ ...content, additional: Object.values(data) }); //Converting the object to an Array in order to iterate in AdditionalSkillsP.js
  }

  function addFakeData() {
    setControl(true);
    setContentFake(fakeData);
  }

  function removeFakeData() {
    setControl(false);
    setContentFake({
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      professional2: {},
      education: {},
      additional: [],
      // added now
      socialLinks: {},
      courses: {},
      hobbies: {},
      languages: {},
      refrences: {},
      intrenship: {},
      extraCurricularActivity: {},
      addSection: {},
      skills: {},
      contextArray: [],
      barComplet: { 'percent': 18, 'headerData': true, 'professionalData': true }

    });
  }
  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(content));

  }, [content]);

  return (
    <ResumeContext.Provider
      value={{
        content,
        control,
        contentFake,
        setContent,
        updateHeaderData,
        updateProfessionalData,
        updateProfessionalData2,
        updateEducationData,
        updateAdditionalData,
        addFakeData,
        removeFakeData,
        updateSocialLinks,
        updateCoursesData,
        updateHobbies,
        updateLanguagesData,
        updateRefrencesData,
        updateIntrenshipData,
        updateExtraCurricularActivity,
        updateAddSection,
        updateSkills,
        updateTopBarPercentage
      }}
    >
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
