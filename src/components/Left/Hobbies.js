import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
//import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
//import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import classes from "./Left.module.css";
import { ResumeContext } from "../../contexts/ResumeContext";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Modal } from "antd";
//import MUIRichTextEditor from "mui-rte";

// const save = (data) => {
//   console.log(data);
// };
// const defaultTheme = createMuiTheme()

// Object.assign(defaultTheme, {
//     overrides: {
//         MUIRichTextEditor: {
//             root: {
//                 maxwidth: "100%",
//                 backgroundColor:'#F2F5FA',
//                 borderRadius:'5px',
//                 padding:'8px'
//             },
//             editor: {
//               overFlow:'wrap',
//                 minHeight:'200px',
//                 textIndent:'15px'

//             }
//         }
//     }
// })
const Hobbies = () => {
  const { content, updateHobbies, removeFakeData, updateAddSection } = useContext(ResumeContext);
  const { register, handleSubmit } = useForm();
  const [showAlert, setshowAlert] = useState(false);
  const onSubmit = (data) => {
    removeFakeData();
    updateHobbies(data);

    //  updateEducationData(data);
  };

  const handleDelete2 = () => {
    console.log('alert Hobbies');
    setshowAlert(!showAlert);
  }
  const handleDelete3 = () => {
    //  setCoursesFlag(!coursesFlag);
    // onSubmit2({ ...content.addSection, courses: false }); // !coursesFlag

    removeFakeData();
    updateAddSection({ ...content.addSection, hobbies: false });
    handleDelete2();

  };

  return (
    <div>
      <div className="d-flex align-items-center py-1 Main-title">

        <div>
          <h2 className="MainPoints">Hobbies </h2>
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
            <h4>Delete Hobbies!</h4>
            <h6>Are you sure you want to delete this record ?</h6>
          </Modal>
        </div>
      </div>
      <div className="col-12">
        <span className={classes.title} style={{ marginBottom: "30px" }}>
          What do you like ?{" "}
        </span>
        <TextField
          id="filled-basic"
          name="hobby"
          variant="filled"
          placeholder="e.g Skiing Painting .."
          defaultValue={content.hobbies.hobby}
          multiline
          rows={3}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ width: "100%" }}
        />
      </div>

      {/* <MuiThemeProvider theme={defaultTheme}>
          <MUIRichTextEditor 
              label=" e.g. Skiing, Skydiving, Painting"
              onSave={save}
              inlineToolbar={true}
              controls= {[]}
              
             
            />
      </MuiThemeProvider> */}
    </div>
  );
};

export default Hobbies;
