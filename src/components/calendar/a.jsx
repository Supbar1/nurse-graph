// import React, { Component } from "react";
// // import { getList, getCourses } from "../nurseslist";
// class Courses extends Component {
//   state = {
//     nurses: getList(),
//     courses: getCourses(),
//     n: true,
//   };
//   hejo() {
//     let yes = "";
//     if (this.state.n) yes = "a";
//     // console.log(yes);
//     return "bbbb";
//   }
//   render() {
//     this.hejo();
//     return (
//       <div>
//         {this.state.nurses.map((nurse) => (
//           <p key={nurse._id}>
//             {nurse.name}
//             {nurse.selfEmplointment}
//           </p>
//         ))}
//       </div>
//     );
//   }
// }

// export default Courses;

// import { increment } from "./b";
// import { incrementX } from "./b";

// class A extends Component {
//   state = {
//     count: 3,
//   };
//   render() {
//     console.log(this.state.count, "hajku");
//     return (
//       <div>
//         <button
//           onClick={() => this.setState({ count: increment(this.state.count) })}
//         >
//           {this.state.count}
//         </button>
//         <button onClick={incrementX}>Zwieksz iksa</button>
//       </div>
//     );
//   }
// }

// export default A;
