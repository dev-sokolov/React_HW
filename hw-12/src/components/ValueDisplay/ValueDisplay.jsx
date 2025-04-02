
import { useEffect, useRef } from "react";

import styles from './ValueDisplay.module.css'

const ValueDisplay = ({ value }) => {

  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValue.current}</p>
    </div>

  );
}

export default ValueDisplay;