import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { FaTimesCircle } from "react-icons/fa";
import { Divider } from "@material-ui/core";
import { gsap } from "gsap";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ModalTab = ({ modalBool, setModalBool }) => {
  let tl = gsap.timeline();

  const handleClose = async () => {
    await tl.to(".MuiDialog-paperWidthSm", { duration: 0.6, y: "-140%" });
    setModalBool(false);
  };

  return (
    <div>
      <div>
        <Dialog
          className="dialog"
          open={modalBool}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <div className="modal-exit" onClick={handleClose}>
            <FaTimesCircle />
          </div>
          <DialogTitle id="alert-dialog-slide-title">
            <h1 className="modal-title">The Daily</h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className="modal-container-body">
                <h1>WELCOME!</h1>
                <h3>Access to every story</h3>
                <h3>No More Pop-Ups</h3>
                <h3>Faster Loading Pages</h3>
                <button>SUBSCRIBE TODAY</button>
                <span>
                  Already a print or digital subscriber?{" "}
                  <span className="modal-login">Log in here</span>{" "}
                </span>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ModalTab;
