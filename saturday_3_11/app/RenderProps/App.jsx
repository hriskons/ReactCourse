import React from "react";
import User from "./User";
import Card from "./Card";

const App = () => (
  <User>
    { (user) => <Card title="My card" user={user} /> }
  </User>
);

export default App;
