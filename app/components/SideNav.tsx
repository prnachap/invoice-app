import { Box, Button } from "@mui/material";
import { useState } from "react";
import { IconMoon, IconSun } from "~/assets/icons";
import SvgLogo from "~/assets/icons/Logo";
import userAvatarUrl from "../assets/image-avatar.jpg";

const SideNav = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  const renderIcon = () => {
    return theme === "light" ? <IconMoon /> : <IconSun />;
  };

  return (
    <Box className="flex justify-between items-center w-full h-16 md:h-20 bg-blue-1000 lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-24 lg:rounded-r-3xl">
      <Box className="flex-1">
        <SvgLogo className="w-24 h-16 md:h-20 ml-[-20px] md:ml-[-10px] lg:ml-0 lg:h-auto" />
      </Box>
      <Button
        className="flex-4 bg-transparent"
        disableRipple
        onClick={handleTheme}
      >
        {renderIcon()}
      </Button>
      <div className="h-full w-[1px] ml-6 border-none lg:h-[1px]  lg:w-full lg:mt-8 lg:ml-0 bg-gray-1000"></div>
      <Box className="px-6 lg:py-6">
        <Box className="h-10 w-10 rounded-full">
          <img
            src={userAvatarUrl}
            alt="user avatar"
            className="w-full h-full rounded-full"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;