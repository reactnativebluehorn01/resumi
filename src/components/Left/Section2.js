import React, { useState, useContext } from "react";
//import { Collapse } from "antd";
//import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
//import MUIRichTextEditor from "mui-rte";
//import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import BallotIcon from "@material-ui/icons/Ballot";
import CustomSection from "./CustomSection";
// import LocalMallIcon from "@material-ui/icons/LocalMall";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import GTranslateIcon from "@material-ui/icons/GTranslate";
// import SpeakerPhoneOutlinedIcon from "@material-ui/icons/SpeakerPhoneOutlined";
// import MergeTypeIcon from "@material-ui/icons/MergeType";
// import LayersIcon from "@material-ui/icons/Layers";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
// import React, { useContext,useState } from "react";
//import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
//import { makeStyles } from "@material-ui/core/styles";

//import classes from "./Left.module.css";
//import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
//import { TramRounded } from "@material-ui/icons";
//import TextField from "@material-ui/core/TextField";
//import { createMuiTheme } from "@material-ui/core/styles"; //MuiThemeProvider

//const { Panel } = Collapse;

// const useStyles = makeStyles({
//   root: {
//     color: "#2196F3",
//     float: "left",
//   },
//   label: {
//     textTransform: "capitalize",
//     // marginRight:'500px' ,
//     float: "inline-start",
//     justifyContent: "flex-start",
//   },
// });

function EducationNew() {
  //  const [contextArray, setContextArray] = useState([]);
  // const btnclass = useStyles();
  const { content, updateAddSection, removeFakeData } =
    useContext(ResumeContext);

  const [activitiesFlag, setActivitiesFlag] = useState(
    content.addSection.activities ? content.addSection.activities : false
  ); //https://resume.io/packs/media/resume-editor/section-activities-gray-7e85425b.svg
  const onChangeActivitiesFlag = () => {
    setActivitiesFlag(!activitiesFlag);
    onSubmit2({ ...content.addSection, activities: false });//!activitiesFlag
  };

  const [internshipFlag, setInternshipFlag] = useState(
    content.addSection.internship ? content.addSection.internship : false
  ); //https://resume.io/packs/media/resume-editor/section-activities-gray-7e85425b.svg

  const onChangeInternshipFlag = () => {
    setInternshipFlag(!internshipFlag);
    onSubmit2({ ...content.addSection, internship: true });//!internshipFlag
  };

  const [languagesFlag, setLanguagesFlag] = useState(
    content.addSection.languages ? content.addSection.languages : false
  ); //https://resume.io/packs/media/resume-editor/section-activities-gray-7e85425b.svg

  const onChangeLanguagesFlag = () => {
    setLanguagesFlag(!languagesFlag);
    onSubmit2({ ...content.addSection, languages: true });//!languagesFlag
  };
  const [coursesFlag, setCoursesFlag] = useState(
    content.addSection.courses ? content.addSection.courses : false
  );

  const onChangeCoursesFlag = () => {
    setCoursesFlag(!coursesFlag);
    onSubmit2({ ...content.addSection, courses: true }); // !coursesFlag
  };
  const [refrencesFlag, setRefrencesFlag] = useState(
    content.addSection.refrences ? content.addSection.refrences : false
  );

  const onChangeRefrencesFlag = () => {
    setRefrencesFlag(!refrencesFlag);
    onSubmit2({ ...content.addSection, refrences: !refrencesFlag });
  }; //refrences
  const [hobbiesFlag, setHobbiesFlag] = useState(
    content.addSection.hobbies ? content.addSection.hobbies : false
  ); //https://resume.io/packs/media/resume-editor/section-activities-gray-7e85425b.svg

  const onChangeHobbiesFlag = () => {
    setHobbiesFlag(!hobbiesFlag);
    onSubmit2({ ...content.addSection, hobbies: true }); //!hobbiesFlag 
  }; //hobbies

  const [customSectionCount, setCustomSectionCount] = useState(
    content.addSection.customSectionId ? content.addSection.customSectionId : 0
  ); //https://resume.io/packs/media/resume-editor/section-activities-gray-7e85425b.svg
  let temp = content.contextArray;
  const onChangesCustomSection = () => {
    let val = parseInt(customSectionCount) + 1;
    setCustomSectionCount(val);
    temp.push({ customSectionId: val });
    onSubmit2({ ...content.addSection, customSectionId: temp });
  };

  const onSubmit2 = (data) => {
    // const addEduValue = [];
    // addEduValue.push(data);
    removeFakeData();
    updateAddSection(data);
  };

  // const [btnText, setBtnText] = useState("Add");
  // const handleDelete = (delFile) => {
  //   const newEdu = contextArray.filter((items) => items !== delFile);
  //   setContextArray(newEdu);
  // };
  return (
    <div>
      {content.contextArray.length
        ? content.contextArray.map((item) => {
          console.log("item ==> ", item);
          return (
            <>
              <div className="d-flex align-items-center  Main-title">
                <div>
                  <DragIndicatorIcon className="pencilIcon-div mt-5" />
                </div>
                <div className="w-100">
                  <div key={item.customSectionId}>
                    <CustomSection data={item} id={item.customSectionId} />
                  </div>
                </div>
                {/* <div>
                    <DeleteOutlineOutlinedIcon
                      onClick={() => handleDelete(item)}
                      className="pencilIcon-div mt-5"
                    />
                  </div> */}
              </div>
            </>
          );
        })
        : ""}

      <div className="header">
        <div className="d-flex align-items-center py-1 Main-title">

          <div>
            <h2 className="MainPoints">Add Section </h2>
          </div>

        </div>

        <div className="container-fluid align-content-center p-0">
          <div className="row m-0 p-0">
            <div className="col-6" style={{ margin: '0px 0px 0px -24px ' }}>
              <div
                onClick={onChangesCustomSection}
                style={{ cursor: "pointer" }}
                className=" section-div py-2"
              >
                <div>
                  <img
                    className="imgSec"
                    src="https://resume.io/packs/media/resume-editor/section-custom-9a5c47fa.svg"
                    alt=""
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">Custom Section</h6>
                </div>
              </div>
              <div
                onClick={onChangeActivitiesFlag}
                style={{ cursor: "pointer" }}
                className=" section-div py-2"
              >
                <div>
                  <img
                    className="imgSec"
                    src={
                      content.addSection.activities
                        ? "https://resume.io/packs/media/resume-editor/section-activities-gray-7e85425b.svg"
                        : "https://resume.io/packs/media/resume-editor/section-activities-6d0a105b.svg"
                    } //"https://resume.io/packs/media/resume-editor/section-activities-6d0a105b.svg"
                    alt="section-activities"
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">Extra-curricular Activities</h6>
                </div>
              </div>
              <div
                onClick={onChangeHobbiesFlag}
                style={{ cursor: "pointer" }}
                className=" section-div py-2"
              >
                <div>
                  <img
                    className="imgSec"
                    src={
                      content.addSection.hobbies
                        ? "https://resume.io/packs/media/resume-editor/section-hobbies-gray-16eeda80.svg"
                        : "https://resume.io/packs/media/resume-editor/section-hobbies-155dd390.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">Hobbies</h6>
                </div>
              </div>
              <div
                onClick={onChangeRefrencesFlag}
                className=" py-2 section-div"
              >
                <div>
                  <img
                    className="imgSec"
                    src={
                      content.addSection.refrences
                        ? "https://resume.io/packs/media/resume-editor/section-references-gray-e4ee4dd2.svg"
                        : "https://resume.io/packs/media/resume-editor/section-references-276c7a8e.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">References</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                onClick={onChangeCoursesFlag}
                style={{ cursor: "pointer" }}
                className=" section-div py-2"
              >
                <div>
                  <img
                    className="imgSec"
                    src={
                      content.addSection.courses
                        ? "https://resume.io/packs/media/resume-editor/section-courses-gray-4d8b41f5.svg"
                        : "https://resume.io/packs/media/resume-editor/section-courses-ac242920.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">Courses</h6>
                </div>
              </div>
              <div
                onClick={onChangeInternshipFlag}
                style={{ cursor: "pointer" }}
                className=" section-div py-2"
              >
                <div>
                  <img
                    className="imgSec"
                    src={
                      content.addSection.internship
                        ? "https://resume.io/packs/media/resume-editor/section-internships-gray-bee0baf0.svg"
                        : "https://resume.io/packs/media/resume-editor/section-internships-c5602363.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">Intrenship</h6>
                </div>
              </div>
              <div
                onClick={onChangeLanguagesFlag} //Languages
                style={{ cursor: "pointer" }}
                className=" section-div py-2"
              >
                <div>
                  <img
                    className="imgSec"
                    src={
                      content.addSection.languages
                        ? "https://resume.io/packs/media/resume-editor/section-languages-gray-0bf8f846.svg"
                        : "https://resume.io/packs/media/resume-editor/section-languages-789a5748.svg"
                    }
                    alt=""
                  />
                </div>
                <div className="mt-4 mx-1">
                  <h6 className="title-section">Languages</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <Button
          classes={{
            root: btnclass.root,
            label: btnclass.label,
          }}
          startIcon={<AddIcon />}
          onClick={handleAddSkills}
          fullWidth={true}
        >
          Add Skills
        </Button>
      </div> */}
    </div>
  );
}

export default EducationNew;
