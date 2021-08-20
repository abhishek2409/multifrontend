import { mount } from "marketing/MarketingRoot";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
  
  return <div ref={ref} />;
};

export default MarketingApp;
