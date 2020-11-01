import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { apiurl } from "../../constants";
import { AuthContext } from "../../lib/auth";

const Page = (props) => {
  let [responseData, setResponseData] = React.useState({});
  const { user, authorizationHeader, logout } = useContext(AuthContext);
  let { slug } = useParams();

  const fetchData = React.useCallback(
    (user) => {
      let headers = {};

      if (user && user.token) {
        headers = {
          Authorization: "Bearer " + user.token,
        };
      }

      axios
        .get(`${apiurl}/wp-json/wp/v2/pages?slug=${slug}`, {
          headers: headers,
        })
        .then((response) => {
          setResponseData(response.data[0]);
        })
        .catch((error) => {
          // throw new Error(error)
          // logout();
        });
    },
    [authorizationHeader, user, logout, slug]
  );

  React.useEffect(() => {
    fetchData(user);
  }, [fetchData]);

  return (
    <React.Fragment>
      <h1>
        {responseData && responseData.title && responseData.title.rendered}
      </h1>

      <div className="page">
        {responseData && responseData.content && responseData.content.rendered && (
          <div
            dangerouslySetInnerHTML={{
              __html: responseData.content.rendered,
            }}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Page;
