import React, { useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
//import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import classes from "./Left.module.css";
import { ResumeContext } from "../../contexts/ResumeContext";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

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
    const { content, updateHobbies, removeFakeData } =
        useContext(ResumeContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        removeFakeData();
        updateHobbies(data);

        //  updateEducationData(data);
    };

    return (
        <div>

            <div className="d-flex align-items-center py-1 Main-title">
                <div>
                    <DragIndicatorIcon className="pencilIcon-div" />
                </div>
                <div>
                    <h2 className='MainPoints'>Hobbies </h2>
                </div>
                <div className="mx-1">
                    <CreateOutlinedIcon className="pencilIcon-div" />
                </div>
            </div>
            <div className='col-12'>
                <span className={classes.title} style={{ marginBottom: '30px' }}>What do you like ? </span>
                <TextField
                    id="filled-basic"
                    name="hobby"
                    variant="filled"
                    placeholder='e.g Skiing Painting ..'
                    defaultValue={
                        content.hobbies.hobby
                    }
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
    )

}

export default Hobbies;

