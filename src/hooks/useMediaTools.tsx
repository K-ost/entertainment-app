import { useTheme, useMediaQuery } from "@mui/material";

type UseMediaToolsReturn = {
  isMobile: boolean;
};

const useMediaTools = (): UseMediaToolsReturn => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return {
    isMobile,
  };
};

export default useMediaTools;
