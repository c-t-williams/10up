import React from "react";
import Welcome from "../../components/welcome";
import ArticleList from "../../components/post/list";

const Home = (props) => (
  <React.Fragment>
    <Welcome />
    <ArticleList />
  </React.Fragment>
);
export default Home;
