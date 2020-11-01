import React, { useContext } from "react";
import axios from "axios";

import PostListItem from "./listitem";
import { apiurl } from "../../../constants";
import { AuthContext } from "../../../lib/auth";

const PostList = (props) => {
  let [responseData, setResponseData] = React.useState([]);
  let [authorData, setAuthorData] = React.useState([]);
  const { user, authorizationHeader, logout } = useContext(AuthContext);

  const findAuthor = (id) => {
    const authorList = authorData.filter((item) => item.id === id);

    if (authorList.length) return authorList[0];

    return [];
  };

  const fetchData = React.useCallback(
    (user) => {
      let headers = {};

      if (user && user.token) {
        headers = {
          Authorization: "Bearer " + user.token,
        };
      }

      axios
        .get(`${apiurl}/wp-json/wp/v2/posts`, {
          headers: headers,
        })
        .then((response) => {
          setResponseData(response.data);
        })
        .catch((error) => {
          logout();
        });

      axios
        .get(`${apiurl}/wp-json/wp/v2/users`, {
          headers: headers,
        })
        .then((response) => {
          setAuthorData(response.data);
        })
        .catch((error) => {
          logout();
        });
    },
    [authorizationHeader]
  );

  React.useEffect(() => {
    fetchData(user);
  }, [fetchData]);

  return (
    <div itemScope itemType="https://schema.org/Blog">
      {responseData &&
        responseData.length &&
        responseData.map((item, key) => (
          <PostListItem
            key={key}
            fullAuthor={findAuthor(item.author)}
            {...item}
          />
        ))}
    </div>
  );
};

export default PostList;
