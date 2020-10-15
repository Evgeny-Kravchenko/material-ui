import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import 'fontsource-roboto';
import 'fontsource-ubuntu';

const PRIMARY_LIGHT_COLOR = '#cfff95';
const PRIMARY_MAIN_COLOR = '#9ccc65';
const PRIMARY_DARK_COLOR = '#6b9b37';
const PRIMARY_TEXT_COLOR = '#000000';

const SECONDARY_LIGHT_COLOR = '#52c7b8';
const SECONDARY_MAIN_COLOR = '#9ccc65';
const SECONDARY_DARK_COLOR = '#00675b';
const SECONDARY_TEXT_COLOR = '#000000';

const ERROR_LIGHT_COLOR = '#e57373';
const ERROR_MAIN_COLOR = '#f44336';
const ERROR_DARK_COLOR = '#d32f2f';
const ERROR_TEXT_COLOR = '#000000';

const WARNING_LIGHT_COLOR = '#ffb74d';
const WARNING_MAIN_COLOR = '#ff9800';
const WARNING_DARK_COLOR = '#f57c00';
const WARNING_TEXT_COLOR = '#000000';

const DEFAULT_HTML_FONT_SIZE = 10;
const FONT_WEIGHT_LIGHT = 300;
const FONT_WEIGHT_REGULAR = 400;
const FONT_WEIGHT_MEDIUM = 500;
const FONT_WEIGHT_BOLD = 700;

let theme = createMuiTheme({
  palette: {
    primary: {
      light: PRIMARY_LIGHT_COLOR,
      main: PRIMARY_MAIN_COLOR,
      dark: PRIMARY_DARK_COLOR,
      contrastText: PRIMARY_TEXT_COLOR,
    },
    secondary: {
      light: SECONDARY_LIGHT_COLOR,
      main: SECONDARY_MAIN_COLOR,
      dark: SECONDARY_DARK_COLOR,
      contrastText: SECONDARY_TEXT_COLOR,
    },
    error: {
      light: ERROR_LIGHT_COLOR,
      main: ERROR_MAIN_COLOR,
      dark: ERROR_DARK_COLOR,
      contrastText: ERROR_TEXT_COLOR,
    },
    warning: {
      light: WARNING_LIGHT_COLOR,
      main: WARNING_MAIN_COLOR,
      dark: WARNING_DARK_COLOR,
      contrastText: WARNING_TEXT_COLOR,
    },
  },
  typography: {
    htmlFontSize: DEFAULT_HTML_FONT_SIZE,
    fontWeightLight: FONT_WEIGHT_LIGHT,
    fontWeightRegular: FONT_WEIGHT_REGULAR,
    fontWeightMedium: FONT_WEIGHT_MEDIUM,
    fontWeightBold: FONT_WEIGHT_BOLD,
    h1: {
      fontFamily: "'Ubuntu', sans-serif",
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      color: PRIMARY_TEXT_COLOR,
    },
    body1: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: '2rem',
      lineHeight: 1.5,
    },
  },
  spacing: 1,
});

theme = responsiveFontSizes(theme);

export default theme;
