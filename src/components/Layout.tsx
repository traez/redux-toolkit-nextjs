"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Layout;
