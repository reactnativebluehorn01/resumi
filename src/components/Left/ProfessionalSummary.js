import React, { useContext } from "react";

import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'

import MUIRichTextEditor from "mui-rte";
import { ResumeContext } from "../../contexts/ResumeContext";
//import { makeStyles } from '@material-ui/core/styles';

import { useForm } from "react-hook-form";

// const save = (data) => {
//   console.log(data);
// };
const defaultTheme = createTheme()

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: -10,
        maxwidth: "100%",
        backgroundColor: '#F2F5FA',
        borderRadius: '5px',
        padding: '8px'
      },
      editor: {
        overFlow: 'wrap',
        minHeight: '200px',
        textIndent: '15px'

      }
    }
  }
});


const ProfessionalSummary = () => {
  const { content, updateProfessionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('onSubmit -- >,', data);
    removeFakeData();
    updateProfessionalData(data);
  };

  const save = (data) => {
    console.log('save -- >,', data);
    handleSubmit(onSubmit)

    //onSubmit(data);

  };


  return (<>
    <div className='' style={{ marginBottom: '20px' }}>
      <div>
        <h2 className='MainPoints'>Professional Summary </h2>
        <p style={{ fontSize: 16, color: '#98A1B3' }}>Include 2-3 clear sentences about your overall experience</p>

      </div>
      {/* <form

        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      > */}

      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor
          label=" e.g. Passionate science teacher with 8+ year of experience and a track Record of ..."
          onSave={save}
          inlineToolbar={true}
          name="professional_summary"
          inputRef={register}
          //  onChange={handleSubmit(onSubmit)}
          // value={onSubmit}
          onChange={save}
          defaultValue={content.professional.professional_summary}
          controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "spellcheck"]}
        />
      </MuiThemeProvider>

      {/* </form> */}

    </div>
  </>)

}

export default ProfessionalSummary;



// import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
// const ProfessionalSummary=() => {
//   const [editorState, setEditorState] = React.useState(
//     MUIEditorState.createEmpty(),
//   )
//   const onChange = newState => {
//     setEditorState(newState)
//   }
//   return (<>
//   <div>
//       <h2>Professinal Summary</h2>
//       <p style={{marginTop: -25,fontSize: 16,color: '#98A1B3'}}>Include 2-3 clear sentences about your overall experience</p>
//   </div>
//   <div >
//       <MUIEditor editorState={editorState} onChange={onChange} />
//   </div>
//  </>)
// }
// export default ProfessionalSummary;


// const ProfessionalSummary=() => {
//   const editorConfig = {}
//   const rawContent = {
//     blocks: [
//       {
//         data: {},
//         depth: 0,
//         entityRanges: [],
//         inlineStyleRanges: [],
//         key: '2vm6d',
//         text: 'Hello world',
//         type: 'header-one',
//       },
//     ],
//     entityMap: {},
//   }
//   const [editorState, setEditorState] = React.useState(
//     MUIEditorState.createWithContent(
//       editorConfig,
//       convertFromRaw(rawContent),
//     ),
//   )
//   const onChange = newState => {
//     setEditorState(newState)
//   }
//   return (<>
//       <h2>Professinal Summary</h2>
//       <p>Include 2-3 clear sentences about your overall experience</p>

//     <MUIEditor
//       editorState={editorState}
//       onChange={onChange}
//       config={editorConfig}
//     />
//  </> )
// }
// export default ProfessionalSummary;