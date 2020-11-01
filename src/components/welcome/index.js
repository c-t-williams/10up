import React, { useContext } from "react";
import { AuthContext } from "../../lib/auth";

const Welcome = (props) => {
  const { user } = useContext(AuthContext);

  if (!user || !user.user_display_name) return null;

  return (
    <section className="welcome logged-in">
      Welcome {user.user_display_name}!
    </section>
  );
};

export default Welcome;
