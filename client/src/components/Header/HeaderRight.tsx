import { Button } from "@mui/material";
import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const HeaderRight: React.FC = () => {
  return (
    <div>
      <Button className=" !bg-orange-600 !p-4 " variant="contained" endIcon={<CloudDownloadIcon sx={{width: 25, height: 25}}/>}>
        Download CV
      </Button>
    </div>
  );
};

export default HeaderRight;
