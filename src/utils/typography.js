import Typography from "typography"
import deYoungTheme from "typography-theme-de-young"

deYoungTheme.overrideStyles = () => ({
    'a': {
        'text-decoration': 'none'
    },
    'a:hover': {
        'text-decoration': 'none'
    },
  });
const typography = new Typography(deYoungTheme)

export default typography
