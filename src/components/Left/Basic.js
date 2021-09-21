import React, { useState } from "react";
import Body from "./Header";
// import Professional from "./Professional";
// import Education from "./Education";
// import AdditionalSkills from "./AdditionalSkills";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import ReactCountryFlag from "react-country-flag";
import { Menu, Dropdown } from 'antd';
import myClasses from "./Left.module.css";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
//import logo from "../../assets/default.png";
//import { ResumeContext } from "../../contexts/ResumeContext";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   rootAdd: {
//     background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px #F2F3F4",
//     color: "white",
//     height: 30,
//     textAlign: "center",
//     fontSize: 10,
//     marginTop: 15,
//     marginRight: 20,
//     fontWeight: 700,
//   },
//   rootRemove: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 30,
//     textAlign: "center",
//     minWidth: 130,
//     fontSize: 10,
//     marginTop: 15,
//     marginRight: 20,
//     fontWeight: 700,
//   },

//   headerLink: {
//     color: "#0298B8 ",
//   },
// });
const languages = [{ code: "US", title: "US", name: 'English' }, { code: "GB", title: "GB", name: 'English(UK)' }, { code: "ES", title: "ES", name: 'Espanol' }, { code: "DE", title: "DE", name: 'Deutch' }, { code: "NL", title: "NL", name: 'Dutch' }, { code: "PK", title: "UR", name: 'Urdu' }, { code: "MX", title: "MX", name: 'Espanol(MX)' }, { code: "SA", title: "SA", name: 'Arabic' }]

function Left() {
  // const { control, addFakeData, removeFakeData } = useContext(ResumeContext);
  //  const classes = useStyles();
  const menu = (
    <Menu style={{ width: '150px', background: 'black' }}>
      {languages ?
        languages.map((item, index) =>
          <Menu.Item key={index} onClick={() => setIndex(index)} >
            <ReactCountryFlag
              countryCode={item.code}
              svg
              style={{
                width: '1.6em',
                height: '1.2em',
                marginBottom: '15px'
              }}
              title={item.title}
            />
            <span style={{
              color: '#98A1B4',
              fontFamily: 'Noto Sans,sans-serif',
              fontSize: 13.5,
              paddingLeft: '10px',
            }}>{item.name}</span>


          </Menu.Item>
        )
        : ''}

    </Menu>
  );
  function setIndex(num) {
    setFlagIndex(num)
  }
  const [flagIndex, setFlagIndex] = useState(0);



  // function useFakeData(e) {
  //   e.preventDefault();
  //   addFakeData();
  // }

  // function clearFakeData(e) {
  //   e.preventDefault();
  //   removeFakeData();
  // }

  // let expData;
  // if (control) {
  //   expData = (
  //     <Button
  //       color="secondary"
  //       onClick={clearFakeData}
  //       className={classes.rootRemove}
  //     // style={{ marginTop: 15, marginRight: 20, height: "auto" }}
  //     >
  //       remove example
  //     </Button>
  //   );
  // } else {
  //   expData = (
  //     <Button
  //       color="primary"
  //       onClick={useFakeData}
  //       className={classes.rootAdd}
  //     // style={{ marginTop: 15, marginRight: 20, height: "auto" }}
  //     >
  //       example
  //     </Button>
  //   );
  // }




  return (
    <div className="left">

      <div style={{ width: '200px', marginLeft: '38%' }} >
        <div className='row'>
          <span className='alignCenter1'>
            <h3 style={{
              textTransform: 'none', paddingTop: '28px',
              fontFamily: 'TT Commons,systemUui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
              fontSize: 25,
              fontWeight: 'normal',
              height: '0px'
            }} >JS Developer</h3>
          </span>s
        </div>s

        <Dropdown overlay={menu} placement="bottomCenter"
          trigger="click"
          arrow>
          {languages ?
            <div className='alignCenter2'>

              <ReactCountryFlag
                countryCode={languages[flagIndex].code}
                svg
                style={{
                  width: '1.6em',
                  height: '1.2em',
                  marginBottom: '15px'
                }}
                title={languages[flagIndex].title}
              />
              <span style={{
                color: '#98A1B4',
                fontFamily: 'Noto Sans,sans-serif',
                fontSize: 13.5,
                paddingLeft: '10px',
              }}>{languages[flagIndex].name}</span>

            </div>
            : ''
          }

        </Dropdown>


      </div>
      <div>
        {/* <hr className={myClasses.hr} /> */}
        <div className={myClasses.formsSection}>

          <Body />
        </div>
      </div>


    </div>
  );
}

export default Left;











// import React, { useContext } from "react";
// import Header from "./Header";
// import Professional from "./Professional";
// import Education from "./Education";
// import AdditionalSkills from "./AdditionalSkills";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import myClasses from "./Left.module.css";
// import logo from "../../assets/default.png";
// import { ResumeContext } from "../../contexts/ResumeContext";
// import { makeStyles } from "@material-ui/core/styles";
// import { Collapse, Col, Row } from 'antd';

// const { Panel } = Collapse;

// const useStyles = makeStyles({
//   rootAdd: {
//     background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px #F2F3F4",
//     color: "white",
//     height: 30,
//     textAlign: "center",
//     fontSize: 10,
//     marginTop: 15,
//     marginRight: 20,
//     fontWeight: 700,
//   },
//   rootRemove: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 30,
//     textAlign: "center",
//     minWidth: 130,
//     fontSize: 10,
//     marginTop: 15,
//     marginRight: 20,
//     fontWeight: 700,
//   },

//   headerLink: {
//     color: "#0298B8 ",
//   },
// });

// function Left() {
//   const { control, addFakeData, removeFakeData } = useContext(ResumeContext);
//   const classes = useStyles();

//   function useFakeData(e) {
//     e.preventDefault();
//     addFakeData();
//   }

//   function clearFakeData(e) {
//     e.preventDefault();
//     removeFakeData();
//   }

//   let expData;
//   if (control) {
//     expData = (
//       <Button
//         color="secondary"
//         onClick={clearFakeData}
//         className={classes.rootRemove}
//       // style={{ marginTop: 15, marginRight: 20, height: "auto" }}
//       >
//         remove example
//       </Button>
//     );
//   } else {
//     expData = (
//       <Button
//         color="primary"
//         onClick={useFakeData}
//         className={classes.rootAdd}
//       // style={{ marginTop: 15, marginRight: 20, height: "auto" }}
//       >
//         example
//       </Button>
//     );
//   }

//   return (
//     <div className="left">
//       <div className={myClasses.headerLeft}>
//         <div styles={{ flexGrow: 2 }}>
//           <Link to="/" style={{ display: "inline" }}>
//             <img src={logo} alt="logo" />
//           </Link>
//         </div>
//         <div styles={{ flexGrow: 1 }}>{expData}</div>
//       </div>

//       <div className={myClasses.mainMenu}>

//         <Collapse accordion>
//           <Panel header="This is panel header 1" key="1">
//             <Header />
//           </Panel>
//           <Panel header="This is panel header 2" key="2">
//             {/* <Professional /> */}

//           </Panel>
//           <Panel header="This is panel header 3" key="3">

//           </Panel>
//         </Collapse>

//         {/* <Router>
//           <div className={myClasses.topLeft}>
//             <Button
//               className={classes.headerLink}
//               component={Link}
//               to="/basic/header"
//             >
//               Header
//             </Button>
//             <Button
//               className={classes.headerLink}
//               component={Link}
//               to="/basic/professional"
//             >
//               Experience
//             </Button>
//             <Button
//               className={classes.headerLink}
//               component={Link}
//               to="/basic/education"
//             >
//               Education
//             </Button>
//             <Button
//               className={classes.headerLink}
//               component={Link}
//               to="/basic/additional"
//             >
//               Skills
//             </Button>
//           </div>
//           <div>
//             <hr className={myClasses.hr} />
//             <div className={myClasses.formsSection}>

//               <Switch>
//                 <Route path="/basic/header">
//                   <Header />
//                 </Route>
//                 <Route path="/basic/professional">
//                   <Professional />
//                 </Route>
//                 <Route path="/basic/education">
//                   <Education />
//                 </Route>
//                 <Route path="/basic/additional">
//                   <AdditionalSkills />
//                 </Route>
//               </Switch>





//             </div>
//           </div>
//         </Router>

//       */}


//       </div>
//     </div>
//   );
// }

// export default Left;

