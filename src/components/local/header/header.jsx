import React, { useState, useRef } from 'react';

import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import EventIcon from '@material-ui/icons/Event';
import MoreMenu from './components/more-menu';
import Calendar from './components/calendar';

import CurrentPlace from './components/current-place';

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
  const [isCalendar, setCalendar] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = () => {
    setMobileMoreAnchorEl(ref.current);
  };

  const handleCalendar = () => {
    setCalendar(true);
  };

  return (
    <div className={classes.grow} ref={ref}>
      <AppBar>
        <Toolbar>
          <CurrentPlace />
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleCalendar}
              color="inherit"
            >
              <EventIcon />
            </IconButton>
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
      <Calendar isCalendar={isCalendar} setCalendar={setCalendar} />
    </div>
  );
};

export default Header;
