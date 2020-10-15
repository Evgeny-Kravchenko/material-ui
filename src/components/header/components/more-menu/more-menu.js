import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

const MoreMenu = ({ mobileMoreAnchorEl, isMobileMenuOpen, setMobileMoreAnchorEl }) => {
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>Deselect all</MenuItem>
      <MenuItem>Copy selected</MenuItem>
      <MenuItem>Move selected</MenuItem>
      <MenuItem>Move selected to today</MenuItem>
      <MenuItem>Move selected to tomorrow</MenuItem>
      <MenuItem>Delete selected</MenuItem>
    </Menu>
  );
};

MoreMenu.propTypes = {
  mobileMoreAnchorEl: PropTypes.instanceOf(Element),
  isMobileMenuOpen: PropTypes.bool,
  setMobileMoreAnchorEl: PropTypes.func,
};

export default withStyles(
  {
    paper: {
      position: 'fixed',
      top: '0!important',
      right: '0!important',
      left: 'auto!important',
      borderRadius: '0',
    },
  },
  {
    name: 'MuiMenu',
  }
)(MoreMenu);
