import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/sidebarDesktop/DesktopSidebar";
import DesktopHome from "../../components/Desktop-home/DesktopHome";
import DesktopNotes from "../../components/Desktop-output/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
