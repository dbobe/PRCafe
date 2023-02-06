import { extendTheme } from 'native-base';

export const theme = extendTheme({
  useSystemColorMode: true,
  components: {
    Button: {
      variants: {
        rounded: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.500`,
            rounded: 'full',
            _hover: {
              bg: `${colorScheme}.700`,
            },
            _pressed: {
              bg: `${colorScheme}.800`,
            },
          };
        },
        solid: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.500`,
          };
        },
      },
    },
    FormControl: {
      baseStyle: {
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 8,
      },
    },
    FormControlLabel: {
      baseStyle: {
        paddingLeft: 2,
      },
    },
  },
  colors: {
    primary: {
      50: '#ffdbd7',
      100: '#ffc8c3',
      200: '#ffb6af',
      300: '#fd8f88',
      400: '#f56561',
      500: '#eb2d38',
      600: '#ae1f27',
      700: '#91181f',
      800: '#751117',
      900: '#410608',
    },
    secondary: {
      50: '#e2e9f8',
      100: '#a9bde7',
      200: '#8da8de',
      300: '#7292d5',
      400: '#587ccb',
      500: '#3f66c1',
      600: '#264fb6',
      700: '#00109f',
      800: '#000975',
      900: '#00044d',
    },
  },
});
