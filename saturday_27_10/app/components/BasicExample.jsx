import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  
const BasicExample = () => (
 <Router>
   <div className="container" style={{marginTop: "50px", maxWidth: "1000px"}}>
     <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/about">About</Link>
       </li>
       <li>
         <Link to="/company">Company</Link>
       </li>
     </ul>

     <hr />

     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/company" component={Companies} />
   </div>
 </Router>
);

const Home = () => (
 <div>
   <h2>Home</h2>
 </div>
);

const About = () => (
 <div>
   <h2>About</h2>
 </div>
);

const Companies = ({ match }) => {
  console.log("match: ", match);
  console.log("history: ",history);
  console.log("location: ",location);

  return (
    <Router>
        <div>
          <h2>Companies</h2>
          <ul>
            <li>
              <Link to={`${match.url}/coca-cola`}>Coca Cola</Link>
            </li>
            <li>
              <Link to={`${match.url}/my-market`}>My Market</Link>
            </li>
            <li>
              <Link to={`${match.url}/ralph-lauren`}>Ralph Lauren</Link>
            </li>
          </ul>

          <Route exact path={`${match.url}`} component={Default} />
          <Route path={`${match.url}/:companyId`} component={Category} />
        </div>
    </Router>
)};

const Default = () => (
  <div>
    <h2>Please select a company</h2>
  </div>
);

const Category = ({ match }) => (
  <div>
    <h2>{match.params.companyId}</h2>
  </div>
);

export default BasicExample;