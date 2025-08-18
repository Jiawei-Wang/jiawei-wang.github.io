import React from "react";
import "./ToldYaBanner.css";
interface ToldYaBannerProps {
    trigger: boolean;
    onHide: () => void;
}
declare const ToldYaBanner: React.FC<ToldYaBannerProps>;
export default ToldYaBanner;
