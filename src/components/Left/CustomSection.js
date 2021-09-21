import React, { useState, useContext } from 'react';
import { Collapse, Col, Row } from 'antd';
import MUIRichTextEditor from "mui-rte";


// import React, { useContext,useState } from "react";
//import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
//import AddIcon from '@material-ui/icons/Add';
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


function ExtraCuriActivities({ data, id }) {
    const btnclass = useStyles();
    const [addActivity, setEdu] = useState([]);
    function callback(key) {
        console.log(key);
    }
    console.log(data, ' data ==> id ', id);

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
    const { content, updateAddSection, removeFakeData } = useContext(
        ResumeContext
    );

    // const [btnText, setBtnText] = useState("Add");
    const panelHeader = (<div className='' >
        <h4>(Not Specified)</h4>
        <p style={{ marginTop: -10, fontSize: 12, color: '#98A1B3' }}>Mar 2019 - Mar 2021 </p>
    </div>)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data1) => {
        removeFakeData();
        updateAddSection(data1);
        //updateExtraCurricularActivity(data);
        // setBtnText("Update");
    };
    return (
        <div>
            <div className='heading'>
                <div className="d-flex align-items-center py-1 Main-title">
                    <div className="mt-3">
                        <h2 className='MainPoints'>{content.addSection.functionTitle ? content.addSection.functionTitle : 'UnTitled'}</h2>
                    </div>
                    <div className="mx-1">
                        <CreateOutlinedIcon className="pencilIcon-div" />
                    </div>
                </div>
            </div>

            <div key={id} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>

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
                                    defaultValue={content.addSection.functionTitle}
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
                                    defaultValue={content.addSection.employer}
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
                                            defaultValue={content.addSection.startDate}
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
                                            defaultValue={content.addSection.endDate}
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
                                    defaultValue={content.addSection.city}
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
                                        onChange={(e) => onSubmit({ ...content.addSection, 'addSection_description': e.getCurrentContent().getPlainText() })}

                                        controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
                                    />
                                </MuiThemeProvider>
                            </Col>

                        </Row>
                    </Panel>
                </Collapse>
            </div>


        </div>
    );
}

export default ExtraCuriActivities;