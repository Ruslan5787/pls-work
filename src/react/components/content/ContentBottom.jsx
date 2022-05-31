import { useDispatch, useSelector } from "react-redux"
import React, { useState } from "react";
import ContentInfoLeft from "./ContentInfoLeft";
import ContentInfoRight from "./ContentInfoRight";

function ContentBottom({ getCityInfo }) {

  return (
    <div className="weather__info">
      <ContentInfoLeft />
      <ContentInfoRight
        getCityInfo={getCityInfo}
      />
    </div>
  )
}

export default ContentBottom