// SettingsModal.jsx
import React, { useState } from 'react';
import { Modal, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './modify.css';

import axios from 'axios';

const modifyUser = async (firstName, lastName, birthDate, genderType, eMail) => {
  try {
      const response = await axios.post('https://apibacir.fly.dev/user/editProfile', {
          first_name: firstName,
          last_name: lastName,
          birth_date: Date(birthDate),
          gender: genderType,
          email: eMail,
      }, {
          headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json',
              'x-api-key': 'testtest',
          }
      });

      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
};

const SettingsModal = ({ settings, open, onClose }) => {
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const handleSave = (newSettings) => {
    // console.log('handleSave : ', newSettings);

    modifyUser(newSettings.Prénom, newSettings.Nom, newSettings.Date_de_naissance, newSettings.Genre, newSettings.Mail);
    onClose();
  }

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
          <Typography variant="h6" className="modalTitle">Mettre à jour</Typography>
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

<Button variant="contained" onClick={() => handleSave(updatedSettings)} className="modalButton">
          Enregistrer
        </Button>
      </div>
    </Modal>
  );
};

SettingsModal.propTypes = {
  settings: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SettingsModal;
