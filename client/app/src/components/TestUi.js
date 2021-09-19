import React from "react";
import { useEffect, useState } from "react";

export const TestUi = () => {
  const [initState, setInitState] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setInitState(jsonResponse));
  }, []);

  return (
    <>
      <div>{initState && <div>{initState.hello}</div>}</div>
    </>
  );
};
