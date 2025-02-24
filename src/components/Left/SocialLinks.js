import React, { useState, useContext, useEffect } from "react";
import { Collapse, Col, Row } from "antd";
//import MUIRichTextEditor from "mui-rte";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
// import React, { useContext,useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
//import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { Modal } from "antd";

const { Panel } = Collapse;

// const useStyles = makeStyles((theme) => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//   }));
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

function SocialLinks() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const btnclass = useStyles();
  const [addEdu, setEdu] = useState([]);
  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("dataLocal"));
    dataLocal && Object.keys(dataLocal.socialLinks).length > 0 && addLink();
  }, []);
  function callback(key) {
    console.log(key);
  }
  // const save = (data) => {
  //   console.log(data);
  // };
  const addLink = () => {
    setEdu([...addEdu, " "]);
    console.log(addEdu);
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
  const { content, updateSocialLinks, removeFakeData } =
    useContext(ResumeContext);
  // const [btnText, setBtnText] = useState("Add");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateSocialLinks(data);
    // setBtnText("Update");
  };
  const panelHeader = (
    <div className="">
      {content.socialLinks.label ? (
        <h4 style={{ fontSize: "1rem" }}>{content.socialLinks.label}</h4>
      ) : (
        <h4 style={{ fontSize: "1rem" }}>(Not Specified)</h4>
      )}

      {content.socialLinks.link ? (
        <p style={{ marginTop: -10, fontSize: 12, color: "#98A1B3" }}>
          {content.socialLinks.link}
        </p>
      ) : null}
    </div>
  );
  const handleDelete = (delFile) => {
    localStorage.setItem(
      "dataLocal",
      JSON.stringify({ ...content, socialLinks: {} })
    );
    const newEdu = addEdu.filter((items) => items !== delFile);
    setEdu(newEdu);
    handleClose();
  };
  return (
    <div>
      <div className="heading">
        <div className="d-flex align-items-center py-1 Main-title">

          <div>
            <h2 className="MainPoints">Website & SocialLinks </h2>
          </div>
          <div className="mx-1">
            <CreateOutlinedIcon className="pencilIcon-div" />
          </div>
        </div>
        <p style={{ marginTop: -5, fontSize: 14, color: "#98A1B3" }}>
          You can add links to websites you want hiring managers to see! Perhaps
          It will be a link to your portfolio, LinkedIn profile, or personal
          website
        </p>
      </div>
      {addEdu.map((item, index) => (
        <>
          <div className="d-flex Main-title">
            <div>
              <DragIndicatorIcon className="pencilIcon-div mt-4" />
            </div>
            <div className="w-100">
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
                    <Row className={classes.zeroPadding}>
                      <Col span={11}>
                        <span className={classes.title}>Label</span>
                        <TextField
                          id="filled-basic"
                          // label="City"
                          name="label"
                          variant="filled"
                          defaultValue={content.socialLinks.label}
                          inputRef={register}
                          onChange={handleSubmit(onSubmit)}
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col span={2}></Col>
                      <Col span={11}>
                        <span className={classes.title}>Link</span>

                        <TextField
                          id="filled-basic"
                          // label="State"
                          name="link"
                          variant="filled"
                          defaultValue={content.socialLinks.link}
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
            <div>
              <DeleteOutlineOutlinedIcon
                onClick={handleShow}
                className="pencilIcon-div2 mt-4"
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
      ))}

      <Button
        classes={{
          root: btnclass.root,
          label: btnclass.label,
        }}
        startIcon={<AddIcon />}
        onClick={addLink}
        fullWidth={true}
      >
        Add link
      </Button>
    </div>
  );
}
export default SocialLinks;
