import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row, Space } from "antd";
//import MUIRichTextEditor from "mui-rte";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";

import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { createMuiTheme } from "@material-ui/core/styles";

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

function Courses() {
  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal && Object.keys(dataLocal.courses).length > 0 && addCourses();
  }, []);
  // const save = (data) => {
  //   console.log(data);
  // };
  const addCourses = () => {
    setEdu([...addEdu, " "]);
  };
  const defaultTheme = createMuiTheme();

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginLeft: 5,
          marginTop: 10,
          width: "100%",
          backgroundColor: "#F2F5FA",
          borderRadius: "5px",
          padding: "5px",
        },
        editor: {
          overFlow: "wrap",
          minHeight: "200px",
          textIndent: "15px",
        },
      },
    },
  });
  const { content, updateCoursesData, removeFakeData } =
    useContext(ResumeContext);
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
   
    <div className="">
    {content.courses.course ? (
      <h4 style={{ fontSize: "1rem" }}>
        {content.courses.course} at {content.courses.institution}
      </h4>
    ) : (
      <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
    )}

    {content.courses.startDate? (
      <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
        {content.courses.startDate} - {content.courses.endDate} 
      </p>
    ) : null}
  </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateCoursesData(data);
    // setBtnText("Update");
  };
  const handleDelete = (delFile) => {
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <DragIndicatorIcon className="pencilIcon-div" />
          </div>
          <div>
            <h2 className="MainPoints">Courses </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
        {/* <p  style={{marginTop: -15,fontSize: 14,color: '#98A1B3',}}>Include your 10 years of relevant experience and date in this section. List Your most recent position here.</p> */}
      </div>
      {addEdu.map((item, index) => (
        <>
          <div className='d-flex Main-title'>
            <div>
              <DragIndicatorIcon className="pencilIcon-div mt-4" />
            </div>
            <div className='w-100'>
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
                >
                  <Panel header={panelHeader} key="1">
                    <Row className={classes.rowWidth}>
                      <Col span={11}>
                        <span className={classes.title}>Course</span>
                        <TextField
                          id="filled-basic"
                          // label="City"
                          name="course"
                          variant="filled"
                          defaultValue={content.courses.course}
                          inputRef={register}
                          onChange={handleSubmit(onSubmit)}
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col span={2}></Col>
                      <Col span={11}>
                        <span className={classes.title}>Institution</span>

                        <TextField
                          id="filled-basic"
                          // label="State"
                          name="institution"
                          variant="filled"
                          defaultValue={content.courses.institution}
                          inputRef={register}
                          onChange={handleSubmit(onSubmit)}
                          style={{ width: "100%" }}
                        />
                      </Col>
                    </Row>
                    <Row className={classes.rowWidth}>
                      <Col span={11}>
                        <span className={classes.title}>
                          Start & End Date <HelpOutlineIcon fontSize="small" />{" "}
                        </span>
                        <Row>
                          <Col span={11}>

                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker

                                onChange={handleSubmit(onSubmit)}
                                openTo="month"
                                views={['year', 'month']}
                                //  value={value}
                                // onChange={(newValue) => {
                                //   setValue(newValue);
                                // }}
                                renderInput={(params) => <TextField {...params}
                                  id="filled-basic"
                                  label="MM/YY"
                                  name="startDate"
                                  variant="filled"
                                  defaultValue={content.courses.startDate}
                                  style={{ width: "100%" }}
                                />}
                              />
                            </LocalizationProvider> */}

                            <TextField
                              // id="filled-basic"
                              id="date"
                              type="month"
                              //label="MM/YY"

                              name="startDate"
                              variant="filled"
                              defaultValue={content.courses.startDate}
                              inputRef={register}
                              onChange={handleSubmit(onSubmit)}
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col span={2}></Col>
                          <Col span={11}>
                            <TextField
                              // id="filled-basic"
                              id="date"
                              type="date"
                              //label="MM/YY"

                              name="endDate"
                              variant="filled"
                              defaultValue={content.courses.endDate}
                              inputRef={register}
                              onChange={handleSubmit(onSubmit)}
                              style={{ width: "100%" }}
                            />
                            {/* <TextField
                              id="filled-basic"
                              label="MM/YY"
                              name="endDate"
                              variant="filled"
                              defaultValue={content.courses.endDate}
                              inputRef={register}
                              onChange={handleSubmit(onSubmit)}
                              style={{ width: "100%" }}
                            />{" "} */}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </div>
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

      <Button
        classes={{
          root: btnclass.root,
          label: btnclass.label,
        }}
        startIcon={<AddIcon />}
        onClick={addCourses}
        fullWidth={true}
      >
        Add course
      </Button>
    </div>
  );
}

export default Courses;
