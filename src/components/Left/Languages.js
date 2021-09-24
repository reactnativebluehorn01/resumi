import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row, Select, Modal } from "antd";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
//import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
//import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
//import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

import AddIcon from "@material-ui/icons/Add";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
//import { createMuiTheme } from '@material-ui/core/styles'

const { Option } = Select;

const { Panel } = Collapse;
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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
}));

function Languages() {
  const [show, setShow] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //const [age, setAge] = React.useState('');
  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal && Object.keys(dataLocal.languages).length > 0 && addLanguage();
  }, []);
  // const [state1, setState1] = useState({
  //   age: '',
  //   name: 'hai',
  // });
  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };
  const addLanguage = () => {
    setEdu([...addEdu, " "]);
    console.log(addEdu);
  };

  const { content, updateLanguagesData, removeFakeData, updateAddSection } =
    useContext(ResumeContext);
  // const [btnText, setBtnText] = useState("Add");
  const panelHeader = (
    <div className="">
      {content.languages.language ? (
        <h4 style={{ fontSize: "1rem" }}>{content.languages.language}</h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.languages.languages_level ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.languages.languages_level}
        </p>
      ) : null}
    </div>
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateLanguagesData(data);
    // setBtnText("Update");
  };
  // const handleChange = (event) => {
  //   console.log('event ==> ', event)
  //   // const name = event.target.value;
  //   // setState1({
  //   //   ...state1,
  //   //   [name]: event.target.value,
  //   // });
  // };
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, languages: {} })
    );
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };

  const handleDelete2 = () => {
    console.log("alert Language");
    setshowAlert(!showAlert);
  };
  const handleDelete3 = () => {
    //  setCoursesFlag(!coursesFlag);
    // onSubmit2({ ...content.addSection, courses: false }); // !coursesFlag

    removeFakeData();
    updateAddSection({ ...content.addSection, languages: false });
    handleDelete2();
  };

  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">
          <div>
            <h2 className="MainPoints">Languages</h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
            <DeleteOutlineOutlinedIcon
              onClick={handleDelete2}
              className="pencilIcon-div mt-4"
            />
            <Modal
              // title="Vertically centered modal dialog"
              centered
              visible={showAlert}
              onOk={handleDelete3}
              onCancel={() => setshowAlert(false)}
            >
              <h4>Delete language</h4>
              <h6>Are you sure you want to delete this record ?</h6>
            </Modal>
          </div>
        </div>
      </div>
      {addEdu.map((item, index) => (
        <div className="d-flex ">
          <div
            key={index}
            style={{
              border: "0.5px solid #b3d4fc",
              borderRadius: "5px",
              marginBottom: 10,
              width: "100%",
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
                    <span className={classes.title}>Language</span>
                    <TextField
                      id="filled-basic"
                      // label="City"
                      name="language"
                      variant="filled"
                      defaultValue={content.languages.language}
                      inputRef={register}
                      onChange={handleSubmit(onSubmit)}
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col span={2}></Col>
                  <Col span={11}>
                    <div className={classes.title}>Level</div>

                    {/* <Radio.Group value={size} onChange={handleSizeChange}>
                                    <Radio.Button value="large">Large</Radio.Button>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="small">Small</Radio.Button>
                                    </Radio.Group> */}

                    <Select
                      size="large"
                      defaultValue="Select Level"
                      // onChange={handleChange}
                      onChange={(e) =>
                        onSubmit({ ...content.languages, languages_level: e })
                      }
                      style={{ width: 200 }}
                    >
                      <Option key={"Native Speaker"}>Native Speaker</Option>

                      <Option key={"Very Good Command"}>
                        Very Good Command{" "}
                      </Option>
                      <Option key={"Good Working Knowledge"}>
                        Good Working Knowledge
                      </Option>
                    </Select>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div>
            <DeleteOutlineOutlinedIcon
              onClick={handleShow}
              className="pencilIcon-div mt-4"
            />
          </div>
          <Modal
            // title="Vertically centered modal dialog"
            centered
            visible={show}
            onOk={() => handleDelete(item)}
            onCancel={handleClose}
          >
            <h4>Delete this</h4>
            <h6>Are you sure you want to delete this record ?</h6>
          </Modal>
        </div>
      ))}

      <Button
        classes={{
          root: btnclass.root,
          label: btnclass.label,
        }}
        startIcon={<AddIcon />}
        onClick={addLanguage}
        fullWidth={true}
      >
        Add Language
      </Button>
    </div>
  );
}

export default Languages;
