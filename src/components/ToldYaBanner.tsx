// src/components/ToldYaBanner.tsx
import React, { useEffect, useState } from "react";
import "./ToldYaBanner.css"

interface ToldYaBannerProps {
  trigger: boolean;
  onHide: () => void;
}

const ToldYaBanner: React.FC<ToldYaBannerProps> = ({ trigger, onHide }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [trigger, onHide]);

  if (!visible) return null;

  return <div className="ToldYaBanner">Told ya, stop clicking.</div>;
};

export default ToldYaBanner;
