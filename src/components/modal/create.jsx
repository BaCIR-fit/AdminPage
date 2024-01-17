// NewModal.jsx
import React, { useState } from 'react';
import { Modal, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './create.css';

const NewModal = ({ settings, open, onClose }) => {
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const handleSave = () => {
    // Enregistrez vos paramètres mis à jour ici (onSave(updatedSettings))
    onClose();  // Fermer le modal après la sauvegarde
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modalContainer">
        <div className="modalHeader">
          <Typography variant="h6" className="modalTitle">Ajouter</Typography>
        </div>

        {Object.entries(updatedSettings).map(([paramName, paramValue]) => (
          <TextField
            key={paramName}
            fullWidth
            label={paramName}
            id={paramName}
            name={paramName}
            value={paramValue}
            onChange={handleChange}
            className="modalInput"
          />
        ))}

        <Button variant="contained" onClick={handleSave} className="modalButton">
          Enregistrer
        </Button>
      </div>
    </Modal>
  );
};

NewModal.propTypes = {
  settings: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewModal;
