import React, { useState, useContext } from 'react';
import { Collapse, Col, Row } from 'antd';
import MUIRichTextEditor from "mui-rte";

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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";


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


function ExtraCuriActivities() {
  const btnclass = useStyles();
  const [addActivity, setEdu] = useState([]);
  function callback(key) {
    console.log(key);
  }
  const save = (data) => {
    console.log(data);
  };
  const addExtraActivity = () => {
    setEdu([...addActivity, ' ']);
    console.log(addActivity);
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
  const { content, updateExtraCurricularActivity, removeFakeData } = useContext(
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
    updateExtraCurricularActivity(data);
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
            <h2 className='MainPoints'>Extra Curricular activity </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
      </div>
      {addActivity.map((item, index) => (
        <div key={index} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>

          <Collapse accordion
            onChange={callback}
            expandIconPosition='right'
            ghost
          >
            <Panel header={panelHeader} key='1'>
              <Row className={classes.rowWidth}>

                <Col span={11}>
                  <span className={classes.title}> Function Title</span>
                  <TextField
                    id="filled-basic"
                    // label="City"
                    name="functionTitle"
                    variant="filled"
                    defaultValue={content.extraCurricularActivity.functionTitle}
                    inputRef={register}
                    onChange={handleSubmit(onSubmit)}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <span className={classes.title}>Employer</span>

                  <TextField
                    id="filled-basic"
                    // label="State"
                    name="employer"
                    variant="filled"
                    defaultValue={content.extraCurricularActivity.employer}
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

                        name="startDate"
                        variant="filled"
                        defaultValue={content.extraCurricularActivity.startDate}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                      <TextField
                        id="filled-basic"
                        name="endDate"
                        variant="filled"
                        defaultValue={content.extraCurricularActivity.endDate}
                        inputRef={register}
                        onChange={handleSubmit(onSubmit)}
                        style={{ width: '100%' }}
                      /> </Col></Row>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <span className={classes.title}>city</span>

                  <TextField
                    id="filled-basic"
                    // label="State"
                    name="city"
                    variant="filled"
                    defaultValue={content.extraCurricularActivity.city}
                    inputRef={register}
                    onChange={handleSubmit(onSubmit)}
                    style={{ width: '100%' }}

                  />
                </Col>
              </Row>
              <Row className={classes.rowWidth}>
                <Col span={24}>
                  <span className={classes.title} style={{ marginLeft: '10px' }}>Description</span>
                  <MuiThemeProvider theme={defaultTheme}>
                    <MUIRichTextEditor
                      label=" type here ..."
                      // onSave={save}
                      inlineToolbar={true}
                      onChange={(e) => onSubmit({ ...content.extraCurricularActivity, 'extraCurricularActivity_description': e.getCurrentContent().getPlainText() })}

                      controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
                    />
                  </MuiThemeProvider>
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
        onClick={addExtraActivity}
        fullWidth={true}
      >
        Add Activity
      </Button>

    </div>
  );
}

export default ExtraCuriActivities;