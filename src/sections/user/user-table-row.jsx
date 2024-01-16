import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import SettingsModal from 'src/components/modal/modify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  nom,
  prenom,
  avatarUrl,
  id,
  dateNaissance,
  sexe,
  actif,
  mail,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const [initialSettings] = useState({
    "Nom": nom,
    "Prénom": prenom, 
    "Date de naissance": dateNaissance,
    "Genre": sexe,
    "Mail": mail,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={nom} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {nom} {prenom}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{dateNaissance}</TableCell>

        <TableCell>{sexe}</TableCell>

        <TableCell>
          <Label color={(actif ? 'success' : 'error')}>{actif ? 'Oui' : 'Non'}</Label>
        </TableCell>

        <TableCell>{id}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleOpenModal}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Modifier
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Supprimer
        </MenuItem>
      </Popover>

      {/* Utilisation du modal avec état local */}
      <SettingsModal settings={initialSettings} open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

UserTableRow.propTypes = {
  selected: PropTypes.bool,
  nom: PropTypes.string,
  prenom: PropTypes.string,
  avatarUrl: PropTypes.any,
  id: PropTypes.number,
  dateNaissance: PropTypes.string,
  sexe: PropTypes.string,
  actif: PropTypes.bool,
  mail: PropTypes.string,
  handleClick: PropTypes.func,
};
