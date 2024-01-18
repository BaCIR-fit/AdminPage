// NewModal.jsx
import React, { useState } from 'react';
import { Modal, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './create.css';

import axios from 'axios';

const addUser = async (firstName, lastName, birthDate, genderType, eMail, passWord) => {
  try {
      const response = await axios.post('https://apibacir.fly.dev/auth/register', {
          first_name: firstName,
          last_name: lastName,
          birth_date: Date(birthDate),
          gender: genderType,
          email: eMail,
          password: passWord,
      }, {
          headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
          }
      });

      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
};

const NewModal = ({ settings, open, onClose }) => {
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  const handleSave = (newSettings) => {
    // console.log('handleSave : ', newSettings);

    addUser(newSettings.Prénom, newSettings.Nom, newSettings.Date_de_naissance, newSettings.Genre, newSettings.Mail, newSettings.Mot_de_passe);
    onClose();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`handleChange: ${name} - ${value}`);
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
            label={paramName.replaceAll("_"," ")}
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

NewModal.propTypes = {
  settings: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewModal;
