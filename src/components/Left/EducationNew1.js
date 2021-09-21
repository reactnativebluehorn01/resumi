import React, { useState, useContext } from 'react';
import { Collapse, Col, Row } from 'antd';
import MUIRichTextEditor from "mui-rte";


import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


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


function EducationNew() {


    const btnclass = useStyles();
    const [addEdu, setEdu] = useState([]);
    const [characters, updateCharacters] = useState(addEdu);

    function callback(key) {
        console.log(key);
    }
    const save = (data) => {
        console.log(data);
    };

    const handleAddEducation = () => {

        console.log('addEdu >>>>>>>>', addEdu);

        // setShowEdu(true);
        // const addEduValue = addEdu;
        // addEdu.push([...addEdu, addEdu + 1]);
        setEdu([...addEdu, addEdu + 1]);
        // setEdu([...addEdu, addEdu + 1]);

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
    });

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(addEdu);
        const [reorderedItems] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItems);
        updateCharacters(items);
    }

    const { content, updateEducationData, removeFakeData } = useContext(
        ResumeContext
    );
    // const [btnText, setBtnText] = useState("Add");
    const panelHeader = (<div className='' >
        <h4>(Not Specified)</h4>
        <p style={{ marginTop: -10, fontSize: 12, color: '#98A1B3' }}>Mar 2019 - Mar 2021</p>
    </div>)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // const addEduValue = [];
        // addEduValue.push(data);
        removeFakeData();
        updateEducationData(data, addEdu.length);
    };

    return (
        <div>
            <div className='heading'>
                <h2>Education </h2>
                <p style={{ marginTop: -15, fontSize: 14, color: '#98A1B3', }}> If relevant, include your most recent educational and achivements and the dates here </p>
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='characters'>
                    {provided => (
                        <div className='characters' {...provided.droppableProps} ref={provided.innerRef} style={{ listStyle: 'none' }}>
                            {addEdu.map((item, index) => (
                                <>
                                    {addEdu.length === 1 && (
                                        <>
                                            <Draggable key={index} draggableId={item} index={index}>
                                                {provided => (
                                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <div key={index} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>
                                                            <Collapse accordion
                                                                onChange={callback}
                                                                expandIconPosition='right'
                                                                ghost
                                                                defaultActiveKey={['1']}
                                                            >
                                                                <Panel header={panelHeader} key={'1'} >
                                                                    <Row className={classes.rowWidth}>
                                                                        <Col span={11}>
                                                                            <span className={classes.title}>School</span>
                                                                            <TextField
                                                                                id="filled-basic"
                                                                                name="school"
                                                                                variant="filled"
                                                                                defaultValue={content.education.school}
                                                                                inputRef={register}
                                                                                onChange={handleSubmit(onSubmit)}
                                                                                style={{ width: '100%' }}
                                                                            />
                                                                        </Col>
                                                                        <Col span={2}></Col>
                                                                        <Col span={11}>
                                                                            <span className={classes.title}>Degree</span>
                                                                            <TextField
                                                                                id="filled-basic"
                                                                                name="degree"
                                                                                variant="filled"
                                                                                defaultValue={content.education.degree}
                                                                                inputRef={register}
                                                                                onChange={handleSubmit(onSubmit)}
                                                                                style={{ width: '100%' }}
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className={classes.rowWidth}>
                                                                        <Col span={11}>
                                                                            <span className={classes.title}>Start & End Date  <HelpOutlineIcon fontSize='small' /> </span>
                                                                            <Row>
                                                                                <Col span={11}>
                                                                                    <TextField
                                                                                        id="filled-basic"
                                                                                        name="startDate"
                                                                                        variant="filled"
                                                                                        defaultValue={content.education.startDate}
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
                                                                                        defaultValue={content.education.endDate}
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
                                                                                name="city"
                                                                                variant="filled"
                                                                                defaultValue={content.education.city}
                                                                                inputRef={register}
                                                                                onChange={handleSubmit(onSubmit)}
                                                                                style={{ width: '100%' }}

                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className={classes.rowWidth}>
                                                                        <Col span={24}>
                                                                            <span className={classes.title} style={{ marginLeft: '10px' }}>Description</span>
                                                                            <MuiThemeProvider theme={defaultTheme} >
                                                                                <MUIRichTextEditor

                                                                                    label=" Type here ..."
                                                                                    onSave={save}
                                                                                    inlineToolbar={true}
                                                                                    controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
                                                                                />
                                                                            </MuiThemeProvider>
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

                                    {addEdu.length === 2 && (
                                        <>
                                            <Draggable key={index} draggableId={item} index={index}>
                                                {provided => (
                                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <div key={index} style={{ border: '0.5px solid #b3d4fc', borderRadius: '5px', marginBottom: 10 }}>
                                                            <Collapse accordion
                                                                onChange={callback}
                                                                expandIconPosition='right'
                                                                ghost
                                                                defaultActiveKey={['1']}
                                                            >
                                                                <Panel header={panelHeader} key={'1'} >
                                                                    <Row className={classes.rowWidth}>
                                                                        <Col span={11}>
                                                                            <span className={classes.title}>School</span>
                                                                            <TextField
                                                                                id="filled-basic"
                                                                                name="school1"
                                                                                variant="filled"
                                                                                defaultValue={content.education.school1}
                                                                                inputRef={register}
                                                                                onChange={handleSubmit(onSubmit)}
                                                                                style={{ width: '100%' }}

                                                                            />
                                                                        </Col>
                                                                        <Col span={2}></Col>
                                                                        <Col span={11}>
                                                                            <span className={classes.title}>Degree</span>
                                                                            <TextField
                                                                                id="filled-basic"
                                                                                name="degree1"
                                                                                variant="filled"
                                                                                defaultValue={content.education.degree1}
                                                                                inputRef={register}
                                                                                onChange={handleSubmit(onSubmit)}
                                                                                style={{ width: '100%' }}
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className={classes.rowWidth}>
                                                                        <Col span={11}>
                                                                            <span className={classes.title}>Start & End Date  <HelpOutlineIcon fontSize='small' /> </span>
                                                                            <Row>
                                                                                <Col span={11}>
                                                                                    <TextField
                                                                                        id="filled-basic"
                                                                                        name="startDate1"
                                                                                        variant="filled"
                                                                                        defaultValue={content.education.startDate1}
                                                                                        inputRef={register}
                                                                                        onChange={handleSubmit(onSubmit)}
                                                                                        style={{ width: '100%' }}
                                                                                    />
                                                                                </Col>
                                                                                <Col span={2}></Col>
                                                                                <Col span={11}>
                                                                                    <TextField
                                                                                        id="filled-basic"
                                                                                        name="endDate1"
                                                                                        variant="filled"
                                                                                        defaultValue={content.education.endDate1}
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
                                                                                name="city1"
                                                                                variant="filled"
                                                                                defaultValue={content.education.city1}
                                                                                inputRef={register}
                                                                                onChange={handleSubmit(onSubmit)}
                                                                                style={{ width: '100%' }}

                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className={classes.rowWidth}>
                                                                        <Col span={24}>
                                                                            <span className={classes.title} style={{ marginLeft: '10px' }}>Description</span>
                                                                            <MuiThemeProvider theme={defaultTheme} >
                                                                                <MUIRichTextEditor

                                                                                    label=" Type here ..."
                                                                                    onSave={save}
                                                                                    inlineToolbar={true}
                                                                                    controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
                                                                                />
                                                                            </MuiThemeProvider>
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



                                </>
                            )
                            )}

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>


            <div className=''  >
                <Button
                    classes={{
                        root: btnclass.root,
                        label: btnclass.label,
                    }}
                    startIcon={<AddIcon />}
                    onClick={handleAddEducation}
                    fullWidth={true}
                >
                    Add education
                </Button>
            </div>

        </div>
    );
}

export default EducationNew;