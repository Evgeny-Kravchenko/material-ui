import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CurrentPlace from '@components/header/components/current-place';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import MoreMenu from '@components/header/components//more-menu';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionMobile: {
    display: 'flex',
  },
}));

const Header = () => {
  const ref = useRef(null);
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = () => {
    setMobileMoreAnchorEl(ref.current);
  };

  return (
    <div className={classes.grow} ref={ref}>
      <AppBar position="static">
        <Toolbar>
          <CurrentPlace />
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MoreMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
      />
    </div>
  );
};

export default Header;
