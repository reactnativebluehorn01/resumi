import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import MUIRichTextEditor from "mui-rte";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

//import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DragDropContext, Droppable } from "react-beautiful-dnd"; //Draggable

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Modal } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  const [characters, updateCharacters] = useState(addEdu);
  const { content, updateEducationData, removeFakeData } =
    useContext(ResumeContext);
  const { register, handleSubmit } = useForm();
  const defaultTheme = createTheme();
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal &&
      Object.keys(dataLocal.education).length > 0 &&
      handleAddEducation();
  }, []);

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginTop: -10,
          maxwidth: "100%",
          backgroundColor: "#F2F5FA",
          borderRadius: "5px",
          padding: "8px",
        },
        editor: {
          overFlow: "wrap",
          minHeight: "200px",
          textIndent: "15px",
        },
      },
    },
  });

  function callback(key) {
    console.log(key);
  }

  const handleAddEducation = () => {
    console.log("addEdu >>>>>>>>", addEdu);

    // setShowEdu(true);
    // const addEduValue = addEdu;
    // addEdu.push([...addEdu, addEdu + 1]);
    setEdu([...addEdu, addEdu + 1]);
    // setEdu([...addEdu, addEdu + 1]);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(addEdu);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);
    updateCharacters(items);
  };

  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    <div className="">
      {content.education.degree && content.education.school ? (
        <h4 style={{ fontSize: "1rem" }}>
          {content.education.degree} at {content.education.school}
        </h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.education && content.education.startDate ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.education.startDate} - {content.education.endDate}
        </p>
      ) : null}
    </div>
  );

  const onSubmit = (data) => {
    removeFakeData();
    updateEducationData(data, addEdu.length);

    //  updateEducationData(data);
  };

  const onChangeDate = (date1) => {
    setStartDate(date1);
    let str = JSON.parse(JSON.stringify(date1));
    let dd = str.substring(0, 7) // 2021-03
    let month = parseInt(dd.substring(5, 7)) + 1;
    let year = dd.substring(0, 4);
    if (month < 10) {
      month = '0' + month;
    }
    let date = year + '-' + month;

    removeFakeData();
    updateEducationData({
      ...content.education,
      startDate: date
    });

  }
  const onChangeDate2 = (date2) => {
    setEndDate(date2);
    let str = JSON.parse(JSON.stringify(date2));
    let dd = str.substring(0, 7) // 2021-03
    let month = parseInt(dd.substring(5, 7)) + 1;
    let year = dd.substring(0, 4);
    if (month < 10) {
      month = '0' + month;
    }
    let date = year + '-' + month;

    // console.log(year, ' : ', month)
    removeFakeData();
    updateEducationData({
      ...content.education,
      endDate: date
    });
  }

  // const save = (data) => {

  //   removeFakeData();

  //   updateEducationData(data, addEdu.length);
  //   //  updateEducationData(data);

  // }

  const handleDelete = (delFile) => {
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };
  // console.log(dataLocal.education)
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <h2 className="MainPoints">Education </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
        <p style={{ marginTop: -5, fontSize: 14, color: "#98A1B3" }}>
          If relevant, include your most recent educational and achivements and
          the dates here
        </p>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {addEdu.length
                ? addEdu.map((item, index) => (
                  <div className="d-flex" key={index}>
                    <div className="w-100">
                      <>
                        <div className="d-flex Main-title">
                          <div>
                            <DragIndicatorIcon className="pencilIcon-div mt-3" />
                          </div>
                          <div className="w-100">
                            <div
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
                                  <Row gutter={32}  className={classes.rowWidth}>
                                    <Col xs={24} sm={12}>
                                      <span className={classes.title}>
                                        School
                                      </span>
                                      <TextField
                                        id="filled-basic"
                                        name="school"
                                        variant="filled"
                                        defaultValue={
                                          content.education.school
                                        }
                                        inputRef={register}
                                        onChange={handleSubmit(onSubmit)}
                                        style={{ width: "100%" }}
                                      />
                                    </Col>
                                   
                                    <Col xs={24} sm={12}>
                                      <span className={classes.title}>
                                        Degree
                                      </span>
                                      <TextField
                                        id="filled-basic"
                                        name="degree"
                                        variant="filled"
                                        defaultValue={
                                          content.education.degree
                                        }
                                        inputRef={register}
                                        onChange={handleSubmit(onSubmit)}
                                        style={{ width: "100%" }}
                                      />
                                    </Col>
                                  </Row>
                                  <Row gutter={32} className={classes.rowWidth}>
                                    <Col xs={24} sm={12}>
                                      <span className={classes.title}>
                                        Start & End Date
                                        <HelpOutlineIcon fontSize="small" />
                                      </span>
                                      <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                          {/* <TextField
                                              id="filled-basic"
                                              name="startDate"
                                              variant="filled"
                                              defaultValue={
                                                content.education.startDate
                                              }
                                              inputRef={register}
                                              onChange={handleSubmit(onSubmit)}
                                              style={{ width: "100%" }}
                                            /> */}
                                          <DatePicker
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                            showFourColumnMonthYearPicker
                                            selected={startDate}
                                            // onChange={(date) =>
                                            //   setStartDate(date)
                                            // }
                                            onSelect={onChangeDate}
                                            placeholderText="mm/yy"
                                            inputRef={register}
                                            className="month"
                                          />
                                        </Col>
                                       
                                        <Col xs={24} sm={12}>
                                          {/* <TextField
                                              id="filled-basic"
                                              name="endDate"
                                              variant="filled"
                                              defaultValue={
                                                content.education.endDate
                                              }
                                              inputRef={register}
                                              onChange={handleSubmit(onSubmit)}
                                              style={{ width: "100%" }}
                                            /> */}
                                          <DatePicker
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                            showFourColumnMonthYearPicker
                                            selected={endDate}
                                            // onChange={(date) =>
                                            //   setEndDate(date)
                                            // }
                                            onSelect={onChangeDate2}
                                            placeholderText="mm/yy"
                                            inputRef={register}
                                            className="month"
                                          />
                                        </Col>
                                      </Row>
                                    </Col>

                                    
                                    <Col xs={24} sm={12}>
                                      <span className={classes.title}>
                                        city
                                      </span>
                                      <TextField
                                        id="filled-basic"
                                        name="city"
                                        variant="filled"
                                        defaultValue={content.education.city}
                                        inputRef={register}
                                        onChange={handleSubmit(onSubmit)}
                                        style={{ width: "100%" }}
                                      />
                                    </Col>
                                  </Row>
                                  <Row className={classes.rowWidth}>
                                    <Col span={24}>
                                      <span
                                        className={classes.title}
                                        style={{ marginLeft: "10px" }}
                                      >
                                        Description
                                      </span>
                                      <MuiThemeProvider theme={defaultTheme}>
                                        <MUIRichTextEditor
                                          label="Enter description"
                                          // onSave={save}
                                          inlineToolbar={true}
                                          name="education_description"
                                          // inputRef={register}
                                          // readOnly={false}
                                          // onChange={handleSubmit(onSubmit2)}
                                          // onChange={handleSubmit(onSubmit)}
                                          onChange={(e) =>
                                            onSubmit({
                                              ...content.education,
                                              education_description: e
                                                .getCurrentContent()
                                                .getPlainText(),
                                            })
                                          }
                                          // onChange={save}
                                          // defaultValue={content.education.education_description}
                                          controls={[
                                            "bold",
                                            "italic",
                                            "underline",
                                            "strikethrough",
                                            "numberList",
                                            "bulletList",
                                            "spellcheck",
                                          ]}
                                        />
                                      </MuiThemeProvider>
                                    </Col>
                                  </Row>
                                </Panel>
                              </Collapse>
                            </div>
                          </div>
                          <div>
                            <DeleteOutlineOutlinedIcon
                              onClick={handleShow}
                              className="pencilIcon-div mt-3"
                            />
                          </div>
                          <Modal
                            // title="Vertically centered modal dialog"
                            centered
                            visible={show}
                            onOk={() => handleDelete(item)}
                            onCancel={handleClose}
                          >
                            <h4>Delete Entry</h4>
                            <h6>Are you sure you want to delete entry?</h6>
                          </Modal>
                        </div>
                      </>

                      {/* {addEdu.length === 2 && (

                      <div

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
                                  School
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
                                  Degree
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
                            <Row className={classes.rowWidth}>
                              <Col span={11}>
                                <span className={classes.title}>
                                  Start & End Date
                                  <HelpOutlineIcon fontSize="small" />
                                </span>
                                <Row>
                                  <Col span={11}>
                                    <TextField
                                      id="filled-basic"
                                      name="startDate1"
                                      variant="filled"
                                      defaultValue={
                                        content.education.startDate1
                                      }
                                      inputRef={register}
                                      onChange={handleSubmit(onSubmit)}
                                      style={{ width: "100%" }}
                                    />
                                  </Col>
                                  <Col span={2}></Col>
                                  <Col span={11}>
                                    <TextField
                                      id="filled-basic"
                                      name="endDate1"
                                      variant="filled"
                                      defaultValue={
                                        content.education.endDate1
                                      }
                                      inputRef={register}
                                      onChange={handleSubmit(onSubmit)}
                                      style={{ width: "100%" }}
                                    />
                                  </Col>
                                </Row>
                              </Col>

                              <Col span={2}></Col>
                              <Col span={11}>
                                <span className={classes.title}>
                                  city
                                </span>
                                <TextField
                                  id="filled-basic"
                                  name="city1"
                                  variant="filled"
                                  defaultValue={content.education.city1}
                                  inputRef={register}
                                  onChange={handleSubmit(onSubmit)}
                                  style={{ width: "100%" }}
                                />
                              </Col>
                            </Row>
                            <Row className={classes.rowWidth}>
                              <Col span={24}>
                                <span
                                  className={classes.title}
                                  style={{ marginLeft: "10px" }}
                                >
                                  Description
                                </span>
                                <MuiThemeProvider theme={defaultTheme}>
                                  <MUIRichTextEditor
                                    label="Enter description"
                                    // onSave={save}
                                    inlineToolbar={true}
                                    name="education_description"
                                    inputRef={register}
                                    readOnly={false}
                                    // onChange={handleSubmit(onSubmit2)}
                                    // onChange={handleSubmit(onSubmit)}
                                    onChange={save}
                                    defaultValue={content.education.education_description}
                                    controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
                                  />


                                </MuiThemeProvider>
                              </Col>
                            </Row>
                          </Panel>
                        </Collapse>
                      </div>

                    )} */}
                    </div>
                  </div>
                ))
                : ""}

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
