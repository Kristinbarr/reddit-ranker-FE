import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#001e4c' },
  secondary: { main: '#e86868' }
};
const themeName = 'Prussian Blue Sunglo Hyrax';
console.log(createMuiTheme({ palette, themeName }))

export default createMuiTheme({ palette, themeName });
