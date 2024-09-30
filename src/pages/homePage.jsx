import React from "react";

import { homePageText } from "../constants/appConstatnts";

function HomePage() {
  const { HEADING } = homePageText;

  return <div>{HEADING}</div>;
}

export default HomePage;
