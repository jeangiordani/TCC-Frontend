import React from "react";
import { Spinner } from "./styles";

interface LoadingProps {
  color?: string;
  size?: number;
}

export const Loading: React.FC<LoadingProps> = ({ color = "#fff", size = 24 }) => {
  return <Spinner color={color} size={size} />;
};
