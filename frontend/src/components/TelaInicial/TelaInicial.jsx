import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Logo from "../../assets/images/logo.png";
import styles from "./TelaInicial.styles";
import * as Constants from "../Constants";
import GenericModal from "../utils/GenericModal";

import { setCode as setCodeRedux } from "../../redux/features/code/codeSlice";
import { changeStep } from "../../redux/features/step/stepSlice";
import { setUser } from "../../redux/features/user/userSlice";

const TelaInicial = () => {
  const [code, setCode] = useState("");
  const [openEnterModal, setOpenEnterModal] = useState(false);
  const dispatch = useDispatch();

  const cancelEnterModal = () => setOpenEnterModal(false);

  const enterSession = () => {
    dispatch(setCodeRedux(code));
    dispatch(setUser("2"));
    dispatch(changeStep("votar"));
  };

  const createSession = () => {
    dispatch(changeStep("criarSessao"));
  };

  const enterModal = (
    <>
      <Typography sx={styles.text}>Insira o código da sessão:</Typography>
      <TextField
        inputProps={{ style: styles.input }}
        size="small"
        margin="dense"
        error={false}
        helperText={false ? Constants.text.noSessionError : ""}
        variant="outlined"
        fullWidth
        value={code}
        onChange={(o) => setCode(o.target.value)}
      />
    </>
  );

  return (
    <>
      <div style={styles.outer}>
        <img style={styles.logo} src={Logo} alt={Constants.text.logo}></img>
        <Typography sx={styles.info}>{Constants.text.description}</Typography>
        <div style={styles.options}>
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            sx={styles.buttons}
            onClick={createSession}
          >
            {Constants.text.create}
          </Button>
          <Button
            startIcon={<SensorDoorIcon />}
            variant="contained"
            sx={styles.buttons}
            onClick={() => setOpenEnterModal(true)}
          >
            {Constants.text.enter}
          </Button>
        </div>
      </div>
      <GenericModal
        showButtons={true}
        content={enterModal}
        open={openEnterModal}
        handleCancel={cancelEnterModal}
        handleOk={enterSession}
      />
    </>
  );
};

export default TelaInicial;
