import React from "react";

import { NavCell } from "../gui";
import tree from "./../../../media/tree.json";

import { MenuMD } from "./menu_markdown";

const style_box = {
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "600px",
};

export function Menu() {
  return (
    <div style={style_box}>
      <NavCell to="/home">{tree.fr.home}</NavCell>
      <NavCell to="/apropos">{tree.fr.about}</NavCell>
      <NavCell to="/contact">{tree.fr.contact}</NavCell>
      <NavCell to="/scentsoft">{tree.fr.scentsoft}</NavCell>
      <MenuMD />
    </div>
  );
}
