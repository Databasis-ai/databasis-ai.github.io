import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Children } from 'react';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
		children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, children }) => {

  const handleModalClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
          >
            {children}
            <button onClick={handleModalClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
