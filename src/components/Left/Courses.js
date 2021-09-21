import React, { useState, useContext } from 'react';
import { Collapse, Col, Row } from 'antd';
//import MUIRichTextEditor from "mui-rte";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

import { createMuiTheme } from '@material-ui/core/styles';



const { Panel } = Collapse;

const useStyles = makeStyles({
  root: {
    color: '#2196F3',
    float: 'left'
  },
  label: {
    textTransform: 'capitalize',
    // marginRight:'500px' ,
    float: 'inline-start',
    justifyContent: "flex-start"
  },
});


function Courses() {
  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };
  const addCourses = () => {
    setEdu([...addEdu, ' ']);

  }
  const defaultTheme = createMuiTheme()

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginLeft: 5,
          marginTop: 10,
          width: "100%",
          backgroundColor: '#F2F5FA',
          borderRadius: '5px',
          padding: '5px'
        },
        editor: {
          overFlow: 'wrap',
          minHeight: '200px',
          textIndent: '15px'
        }
      }
    }
  })
  const { content, updateCoursesData, removeFakeData } = useContext(
    ResumeContext
  );
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (<div className='' >
    <h4>(Not Specified)</h4>
    <p style={{ marginTop: -10, fontSize: 12, color: '#98A1B3' }}>Mar 2019 - Mar 2021 </p>
  </div>)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateCoursesData(data);
    // setBtnText("Update");
  };
  return (
    <div>
      <div className='heading'>
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <DragIndicatorIcon className="pencilIcon-div" />
          </div>
          <div>
            <h2 className='MainPoints'>Courses </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
        {/* <p  style={{marginTop: -15,fontSize: 14,color: '#98A1B3',}}>Include your 10 years of relevant experience and date in this section. List Your most recent position here.</p> */}
      </div>
      {addEdu.map((item, index) => (
        <div key={index} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>

          <Collapse accordion
            onChange={callback}
            expandIconPosition='right'
            ghost
          >
            <Panel header={panelHeader} key='1'>
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
                    style={{ width: '100%' }}
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
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
              <Row className={classes.rowWidth}>
                <Col span={11}>
                  <span className={classes.title}>Start & End Date <HelpOutlineIcon fontSize='small' /> </span>
                  <Row>
                    <Col span={11}>
                      <TextField
                        id="filled-basic"
                        // label="City"
                        name="startDate"
                        variant="filled"
                        defaultValue={content.courses.startDate}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                      <TextField
                        id="filled-basic"
                        // label="City"
                        name="endDate"
                        variant="filled"
                        defaultValue={content.courses.endDate}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: '100%' }}
                      /> </Col></Row>
                </Col>
              </Row>

            </Panel>
          </Collapse>
        </div>
      )
      )}

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