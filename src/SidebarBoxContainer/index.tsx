// @flow

import { memo, ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SidebarBox } from "../workspace/SidebarBox";

const theme = createTheme();
// const useStyles = makeStyles(() => ({
//   container: { margin: 8 },
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 8,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "bold",
//     flexGrow: 1,
//     paddingLeft: 8,
//     color: grey[800],
//     "& span": {
//       color: grey[600],
//       fontSize: 12,
//     },
//   },
//   expandButton: {
//     padding: 0,
//     width: 30,
//     height: 30,
//     "& .icon": {
//       marginTop: -6,
//       width: 20,
//       height: 20,
//       transition: "500ms transform",
//       "&.expanded": {
//         transform: "rotate(180deg)",
//       },
//     },
//   },
//   expandedContent: {
//     maxHeight: 300,
//     overflowY: "auto",
//     "&.noScroll": {
//       overflowY: "visible",
//       overflow: "visible",
//     },
//   },
// }));

interface SidebarBoxContainerProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  noScroll?: boolean;
  expandedByDefault?: boolean;
}

export const SidebarBoxContainer = ({
  icon,
  title,
  children,
}: // noScroll = false,
// expandedByDefault = false,
SidebarBoxContainerProps) => {
  // const classes = useStyles()
  // const content = (
  //   <div
  //     className={classnames(classes.expandedContent, noScroll && "noScroll")}
  //   >
  //     {children}
  //   </div>
  // )
  //
  // const [expanded, changeExpanded] = useState(expandedByDefault)
  // const toggleExpanded = useEventCallback(() => changeExpanded(!expanded))

  return (
    <ThemeProvider theme={theme}>
      <SidebarBox icon={icon} title={title}>
        {children}
      </SidebarBox>
    </ThemeProvider>
  );
};

export default memo(
  SidebarBoxContainer,
  (prev, next) => prev.title === next.title && prev.children === next.children
);
