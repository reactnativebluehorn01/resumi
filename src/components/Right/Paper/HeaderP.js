import React, { useContext, useState } from "react";
//import classes from "./Template.module.css";

import "./londontemplate.css";
import { ResumeContext } from "../../../contexts/ResumeContext";
import { Row, Col } from 'antd';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import onDrag from '../../../utils/OnDrag';
//const component = React.lazy(() => import('./component.jsx'));
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `${k}`,
  }));




function HeaderP() {
  const { content, control, contentFake } = useContext(ResumeContext);
  const [items, setItems] = useState(getItems(10));

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items1 = onDrag(items, result.source.index, result.destination.index);
    setItems(items1);
  };



  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }
  // console.log('contentUse................', contentUse);
  //let divider;
  // if (Object.keys(contentUse.header).length > 0) {
  //   divider = <hr className={classes.dividerRight} />;
  // } else {
  //   divider = "";
  // }

  return (
    <div>

      <div className="header">

        <p style={{ textAlign: 'center' }}> <strong>{contentUse.header.first_name}</strong> <strong>{contentUse.header.last_name}</strong> , <strong>{contentUse.header.job_title}</strong> </p>
        <p style={{ textAlign: 'center' }}>{contentUse.header.address}, {contentUse.header.city} , {contentUse.header.postal_code},{contentUse.header.country},{contentUse.header.phone},{contentUse.header.email}</p>
      </div>
      {/* <Divider /> */}
      <hr className="divideLine" />
      {/* ********************* Birth ***************** */}

      <Row className="row">
        <Col span={7}>Date of birth</Col>
        <Col span={5}> {contentUse.header.date_of_birth}</Col>
        <Col span={8}>Nationality</Col>
        <Col span={4}>{contentUse.header.nationality}</Col>
      </Row>
      <Row className="row">
        <Col span={7}>Place of birth</Col>
        <Col span={5}> {contentUse.header.place_of_birth}</Col>
        <Col span={8}>Driving License</Col>
        <Col span={4}>{contentUse.header.driving_license}</Col>
      </Row>

      <hr className="divideLine" />
      {/* ********************* PROFILE ***************** */}

      <Row className="row">
        <Col span={7}><strong>PROFILE</strong></Col>
        {/* <Col span={17}>Professional summery</Col> */}
        <Col span={5}> {contentUse.professional.professionalSummer}</Col>

      </Row>


      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {items.map((item, index) => {
                let myContent;
                if (item.content == 0) {
                  myContent = (
                    <div id="employmentHistoryDiv2">

                      <hr className="divideLine" />
                      {/* ********************* Employment History ***************** */}

                      <Row className="row">
                        <Col span={24}><strong>EMPLOYEMNT HISTORY</strong></Col>
                      </Row>
                      <Row className="row">
                        <Col span={7}><strong>{content.professional2.date1 ? content.professional2.date1 : ''} - {content.professional2.date2 ? content.professional2.date2 : ''}</strong></Col>
                        <Col span={13}>{content.professional2.jobTitle ? content.professional2.jobTitle : ''} , {content.professional2.employer ? content.professional2.employer : ''} </Col>
                        <Col span={4}>{content.professional2.city ? content.professional2.city : ''} </Col>

                      </Row>
                      <Row className="row">
                        <Col span={7}></Col>
                        <Col span={13}>{content.professional2.professionalDesription ? content.professional2.professionalDesription : ''} </Col>
                        <Col span={4}></Col>

                      </Row>
                    </div>
                  );
                } else if (item.content == 1) {
                  myContent = (
                    <div id="educationDiv2">

                      <hr className="divideLine" />
                      {/* ********************* Education ***************** */}

                      <>
                        <Row className="row">
                          <Col span={24}><strong>EDUCATION</strong></Col>
                        </Row>
                        <Row className="row">
                          <Col span={7}><strong>{content.education.startDate} - {content.education.endDate}</strong></Col>
                          <Col span={13}>  {contentUse.education.degree} ,{content.education.school}</Col>
                          <Col span={4}>{content.education.city}</Col>

                        </Row>
                        <Row className="row">
                          <Col span={7}></Col>
                          <Col span={13}>description {content.education.education_description}</Col>
                          <Col span={4}></Col>

                        </Row>
                      </>


                    </div>
                  );
                } else if (item.content == 2) {
                  myContent = <div>

                    <hr className="divideLine" />
                    {/* ********************* LINKS ***************** */}

                    <Row className="row">
                      <Col span={7}>
                        <strong>LINKS</strong>
                      </Col>
                      <Col span={17}>{content.socialLinks.link}</Col>
                    </Row>
                  </div>
                } else if (item.content == 3) {
                  myContent = (
                    <div id="skillDiv2">

                      {/* ********************* Skills ***************** */}

                      <Row className="row">
                        <Col span={7}><strong>SKILLS</strong></Col>
                        <Col span={10}>{content.skills.skillName} {content.skills.level}</Col>
                        <Col span={7}>Skill 5</Col>
                      </Row>

                      <Row className="row">
                        <Col span={7}><strong></strong></Col>
                        <Col span={10}>C++</Col>
                        <Col span={7}>JavaScript</Col>
                      </Row>
                    </div>
                  );
                } else if (item.content == 4) {
                  myContent = (
                    <div id="coursesDiv2">
                      {/* ********************* Courses ***************** */}
                      {content.addSection.courses ?
                        <>

                          <Row className="row">
                            <Col span={24}><strong>COURSES {content.courses.course ? content.courses.course + ' at ' + content.courses.institution : ''} </strong></Col>
                          </Row>
                          <Row className="row">
                            <Col span={7}><strong>{content.courses.startDate ? content.courses.startDate + " - " + content.courses.endDate : ''}</strong></Col>

                          </Row>


                          <hr className="divideLine" />
                        </>
                        : ''

                      }
                    </div>
                  );
                } else if (item.content == 5) {
                  myContent = (
                    <div id="activitiesDiv2">
                      <hr className="divideLine" />
                      {/* ********************* Extra Curricular Activities ***************** */}
                      {content.addSection.activities ?
                        <>
                          <Row className="row">
                            <Col span={24}><strong>EXTRA-CURRICULAR ACTIVITIES</strong></Col>
                          </Row>
                          <Row className="row">
                            <Col span={7}><strong> {content.extraCurricularActivity.startDate ? (content.extraCurricularActivity.startDate + ' - ' + content.extraCurricularActivity.endDate) : ''}</strong></Col>
                            <Col span={13}>{content.extraCurricularActivity.functionTitle ? content.extraCurricularActivity.functionTitle + ' , ' + content.extraCurricularActivity.employer : ''}</Col>
                            <Col span={4}>{content.extraCurricularActivity.city}</Col>

                          </Row>
                          <Row className="row">
                            <Col span={7}></Col>
                            <Col span={13}>{content.extraCurricularActivity.extraCurricularActivity_description}</Col>
                            <Col span={4}></Col>

                          </Row>
                          <hr className="divideLine" />
                        </>
                        : ''

                      }

                    </div>
                  );
                } else if (item.content == 6) {
                  myContent = (
                    <div id="hobbiesDiv2">

                      <hr className="divideLine" />
                      {/* ********************* Hobbies ***************** */}

                      {content.addSection.hobbies ?
                        <>
                          <Row className="row">
                            <Col span={7}><strong>HOBBIES</strong></Col>
                            <Col span={17}>{content.hobbies.hobby}</Col>
                          </Row>
                          <hr className="divideLine" />
                        </>
                        : ''

                      }
                    </div>
                  );
                } else if (item.content == 7) {
                  myContent = (
                    <div id="languagesDiv2">

                      {/* ********************* language ***************** */}
                      {content.addSection.languages ?
                        <>
                          <Row className="row">
                            <Col span={7}><strong>LANGUGAE</strong></Col>
                            <Col span={17}>{content.languages.language}</Col>
                          </Row>
                          <hr className="divideLine" />
                        </> : ''}
                    </div>
                  );
                } else if (item.content == 8) {
                  myContent = (
                    <>

                      {/* ********************* Internship ***************** */}
                      {content.addSection.internship ?
                        <>
                          <Row className="row">
                            <Col span={7}><strong>INTERNSHIP</strong></Col>
                          </Row>
                          <Row className="row">
                            <Col span={7}><strong>{content.intrenship.startDate ? content.intrenship.startDate : ''} - {content.intrenship.endDate ? content.intrenship.endDate : ''}</strong></Col>
                            <Col span={13}>{content.intrenship.jobTitle ? content.intrenship.jobTitle : ''} , {content.intrenship.employer ? content.intrenship.employer : ''} </Col>
                            <Col span={4}>{content.intrenship.city ? content.intrenship.city : ''} </Col>

                          </Row>
                          <Row className="row">
                            <Col span={7}></Col>
                            <Col span={13}>{content.intrenship.intrenship_description ? content.intrenship.intrenship_description : ''} </Col>
                            <Col span={4}></Col>

                          </Row>
                        </> : ''}

                    </>
                  );
                } else {
                  myContent = (
                    <>
                      {/* ********************* Refrence ***************** */}
                      {content.addSection.refrences ?
                        <>
                          <Row className="row">
                            <Col span={7}><strong>REFRENCE</strong></Col>
                            <Col span={17}>{content.refrences.referent ? content.refrences.referent + ' , ' + content.refrences.phone : ''}</Col>
                          </Row>
                          <hr className="divideLine" />
                        </>
                        : ''}
                    </>
                  );
                }

                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                      >

                        {myContent}

                      </div>

                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>

















    </div>
  );
}

export default HeaderP;







// import React, { useContext } from "react";
// import classes from "./Template.module.css";
// import { ResumeContext } from "../../../contexts/ResumeContext";

// function HeaderP() {
//   const { content, control, contentFake } = useContext(ResumeContext);

//   //If the "control" is TRUE - use "Fake State" to show the example on the page
//   let contentUse;
//   if (control) {
//     contentUse = contentFake;
//   } else {
//     contentUse = content;
//   }
//   console.log('contentUse................', contentUse);

//   let divider;
//   if (Object.keys(contentUse.header).length > 0) {
//     divider = <hr className={classes.dividerRight} />;
//   } else {
//     divider = "";
//   }

//   return (
//     <div>
//       <div className={classes.headerResume}>
//         <div className={classes.contentHeader}>
//           <h1 className={classes.h1Name}>{contentUse.header.job_title}</h1>
//           <p>
//             {/* {contentUse.header.address} */}
//             <br />
//             {contentUse.header.first_name} {contentUse.header.last_name}
//             {/* {"  "}
//             {contentUse.header.email} */}
//             <br />
//             {contentUse.header.phone}
//             <br />

//             {contentUse.header.email}
//           </p>
//           {divider}

//           <br />
//           <p>{contentUse.header.country}</p>
//           <br />
//           <p>{contentUse.header.city}</p>
//           <br />
//           <p>{contentUse.header.address}</p>
//           <br />
//           <p>{contentUse.header.postal_code}</p>
//           <br />
//           <p>{contentUse.header.driving_license}</p>
//           <br />
//           <p>{contentUse.header.nationality}</p>
//           <br />
//           <p>{contentUse.header.place_of_birth}</p>
//           {divider}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeaderP;
