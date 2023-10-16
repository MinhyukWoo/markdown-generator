import { Container, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

type Props = {
  onSendRequest: Function;
};

export function RequestForm(props: Props) {
  const [status, setStatus] = useState<String>("none");
  const [text, setText] = useState<String>("");

  const onBtnClick = () => {
    if (status !== "sending") {
      setStatus("sending");
      props.onSendRequest(text);
      setStatus("send");
    }
  };

  useEffect(() => {
    if (status === "send") {
      setText("");
      setStatus("none");
    }
  }, [status]);

  return (
    <Container>
      <TextField
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></TextField>
      <Button onClick={onBtnClick} disabled={status === "sending"}>
        전송
      </Button>
    </Container>
  );
}
