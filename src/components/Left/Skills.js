import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row, Radio } from "antd";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
//import MUIRichTextEditor from "mui-rte";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
//import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";

const { Panel } = Collapse;

const useStyles = makeStyles({
  root: {
    color: "#2196F3",
    float: "left",
  },
  label: {
    textTransform: "capitalize",
    // marginRight:'500px' ,
    float: "inline-start",
    justifyContent: "flex-start",
  },
});

function EducationNew() {
  const btnclass = useStyles();
  const { content, updateSkills, removeFakeData } =
    useContext(ResumeContext);
  const [addEdu, setEdu] = useState([]);
  useEffect(()=>{
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"))
    dataLocal && Object.keys(dataLocal.skills).length > 0 && handleAddSkills()
  },[])
  //const [characters, updateCharacters] = useState(addEdu);

  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };

  const handleAddSkills = () => {
    console.log("addEdu >>>>>>>>", addEdu);

    // setShowEdu(true);
    // const addEduValue = addEdu;
    // addEdu.push([...addEdu, addEdu + 1]);
    setEdu([...addEdu, addEdu + 1]);
    // setEdu([...addEdu, addEdu + 1]);
  };

  const handleUpdateSkills = (data) => {


    updateSkills(data);
  }

  // const handleOnDragEnd = (result) => {
  //   if (!result.destination) return;
  //   const items = Array.from(addEdu);
  //   const [reorderedItems] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItems);
  //   updateCharacters(items);
  // };


  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    <div className="">
      <h4 style={{fontSize:'1rem'}}>(Not Specified)</h4>
      <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
        Mar 2019 - Mar 2021
      </p>
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('skillName ==> ', data)

    // const addEduValue = [];
    // addEduValue.push(data);
    removeFakeData();
    handleUpdateSkills(data);
    // updateEducationData(data, addEdu.length);
  };
  const onSubmit2 = (val) => {
    console.log('level ==> ', val);
    removeFakeData();
    handleUpdateSkills({ ...content.skills, 'level': val });

  }

  const handleDelete = (delFile) => {
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-2 Main-title">
          <div>
            <DragIndicatorIcon className="pencilIcon-div" />
          </div>
          <div>
            <h2 className='MainPoints'>Skills </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Interpersonal Communication <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Leadership and Teamwork <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Effective Team Leader <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Ability to Multitask <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Creativity Thinking Skills
            <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Collaboration & Teamwork <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Customer Relation <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Creative Thinking <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
          <a className="btn btn-light btn-div m-1" href onClick={handleAddSkills}>
            Good Communication <AddIcon style={{ fontSize: '1.1rem', color: 'grey ', fontWeight: 'bold' }} />
          </a>
        </div>
      </div>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {addEdu.map((item, index) => (
                <>
                  <div className="d-flex Main-title">
                    <div>
                      <DragIndicatorIcon className="pencilIcon-div mt-4" />
                    </div>
                    <div className="w-100">
                      {addEdu.length === 1 && (
                        <>
                          <div className="d-flex">

                            <div className="w-100">
                              <Draggable
                                key={index}
                                draggableId={item}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                  >
                                    <div
                                      key={index}
                                      style={{
                                        border: "0.5px solid #b3d4fc",
                                        borderRadius: "5px",
                                        marginBottom: 10,
                                      }}
                                    >
                                      <Collapse
                                        accordion
                                        onChange={callback}
                                        expandIconPosition="right"
                                        ghost
                                        // defaultActiveKey={["1"]}
                                      >
                                        <Panel header={panelHeader} key={"1"}>
                                          <Row className={classes.rowWidth}>
                                            <Col span={11}>
                                              <span className={classes.title}>
                                                Skills
                                              </span>
                                              <TextField
                                                id="filled-basic"
                                                name="skillName"
                                                variant="filled"
                                                defaultValue={
                                                  content.skills.skillName ? content.skills.skillName : ''
                                                }
                                                inputRef={register}
                                                onChange={handleSubmit(
                                                  onSubmit
                                                )}
                                                style={{ width: "100%" }}
                                              />
                                            </Col>
                                            <Col span={2}></Col>
                                            <Col span={11}>
                                              <span className={classes.title}>
                                                Level
                                              </span>
                                              <Radio.Group defaultValue={content.skills.level ? content.skills.level : "a"} onChange={e => handleSubmit(
                                                onSubmit2(e.target.value))} buttonStyle='outline'>
                                                <Radio.Button value="Novice">Novice</Radio.Button>
                                                <Radio.Button value="Biggner">Biggner</Radio.Button>
                                                <Radio.Button value="SkillFull">SkillFull</Radio.Button>
                                                <Radio.Button value="Experienced">Experienced</Radio.Button>
                                                <Radio.Button value="Expert">Expert</Radio.Button>
                                              </Radio.Group>
                                            </Col>
                                          </Row>
                                        </Panel>
                                      </Collapse>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            </div>

                          </div>
                        </>
                      )}

                      {addEdu.length === 2 && (
                        <>
                          <Draggable
                            key={index}
                            draggableId={item}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <div
                                  key={index}
                                  style={{
                                    border: "0.5px solid #b3d4fc",
                                    borderRadius: "5px",
                                    marginBottom: 10,
                                  }}
                                >
                                  <Collapse
                                    accordion
                                    onChange={callback}
                                    expandIconPosition="right"
                                    ghost
                                    defaultActiveKey={["1"]}
                                  >
                                    <Panel header={panelHeader} key={"1"}>
                                      <Row className={classes.rowWidth}>
                                        <Col span={11}>
                                          <span className={classes.title}>
                                            Skills
                                          </span>
                                          <TextField
                                            id="filled-basic"
                                            name="school1"
                                            variant="filled"
                                            defaultValue={
                                              content.education.school1
                                            }
                                            inputRef={register}
                                            onChange={handleSubmit(onSubmit)}
                                            style={{ width: "100%" }}
                                          />
                                        </Col>
                                        <Col span={2}></Col>
                                        <Col span={11}>
                                          <span className={classes.title}>
                                            Level
                                          </span>
                                          <TextField
                                            id="filled-basic"
                                            name="degree1"
                                            variant="filled"
                                            defaultValue={
                                              content.education.degree1
                                            }
                                            inputRef={register}
                                            onChange={handleSubmit(onSubmit)}
                                            style={{ width: "100%" }}
                                          />
                                        </Col>
                                      </Row>
                                    </Panel>
                                  </Collapse>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        </>
                      )}
                    </div>
                    <div>
                      <DeleteOutlineOutlinedIcon
                        onClick={() => handleDelete(item)}
                        className="pencilIcon-div mt-4"
                      />
                    </div>
                  </div>
                </>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="">
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
      </div>
    </div>
  );
}

export default EducationNew;
