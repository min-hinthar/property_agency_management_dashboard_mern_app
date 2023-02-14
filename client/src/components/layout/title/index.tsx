import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { morningStar } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={morningStar} alt="Morning Star" width="30px" />
        ) : (
          <img src={morningStar} alt="Morning Star" width="70px" />
        )}
      </Link>
    </Button>
  );
};
