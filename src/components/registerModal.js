import React, { useState } from "react";

import { register } from "../repo/auth";
import Modal from "./modal";

import styles from "./registerModal.module.css";

function RegisterModal({ setShowReg }) {
  return (
    <Modal>
      <h1>Register Page</h1>
    </Modal>
  );
}

export default RegisterModal;
