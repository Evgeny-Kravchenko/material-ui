import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStylesSvgIcon = makeStyles((theme) => ({
  root: {
    fill: theme.palette.primary.dark,
  },
}));

const useStylePickers = makeStyles((theme) => ({
  root: {
    color: grey[600],
    textTransform: 'none',
    paddingLeft: '0px',
    '&:focus': {
      color: theme.palette.primary.main,
    },
  },
}));

const useStyleTextField = makeStyles({
  root: {
    marginBottom: '20px',
  },
});

export { useStylesSvgIcon, useStylePickers, useStyleTextField };
