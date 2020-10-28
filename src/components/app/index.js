// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom";


// function App() {
//   const router = new Router().history;
//   return (
//     <Router>
//       <div className="App">
//         {router.location.pathname !== "/" &&
//           router.location.pathname !== "/login" &&
//           router.location.pathname !== "/Login" &&
//           router.location.pathname !== "/404" &&
//           router.location.pathname !== "/SignUp" ? (
//             <Header />
//           ) : null}
//         <div className="container">
//           <div >
//             <div >
//               <Switch>
//                 <Route exact path="/" component={Login} />
//                 <Route path="/home" component={Home} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/signup" component={Signup} />
//                 <Route path="/class" component={Class} />
//                 <Route path="/teacher" component={Teacher} />
//                 <Route path="/teacherlist" component={TeacherList} />
//                 <Route path="/subject/view/:class_id" component={Subject} />
//                 <Route path="/subject_cl" component={SubjectInClass} />
//                 <Route path="/subject/add/:class_id" component={CreateSubject} />
//                 <Route path="/subject/update/:subject_id" component={UpdateSubject} />
//                 <Route path="/subject/update/:subject_id" component={UpdateSubject} />
//                 <Route path="/classes/:class_id/:name" component={UpdateClass} />
//                 <Route path="/404" component={PageError} />
//                 <Redirect from='*' to='/404' />
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;