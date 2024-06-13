import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#FFA500',
    customScheme: {
      50: '#FFA500'
    },
    black: {
      1: '#0C0C0C',
      2: '#000',
      3: '#848484'
    },
    shade: {
      1: '#242424',
      2: '#505050',
      3: '#1C1B1B',
      4: '#272727',
      5: '#5f5f5f'
    },
    white: {
      1: '#FFFFFF',
      2: '#F6F6F6',
    },
    grey: '#CBCBCB',
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components:{
    Progress:{
      defaultProps: {
        size: 'lg', 
        variant: 'sm',
        fill: '#FFA500', 
        colorScheme: 'customScheme'
      }
    },
    Stat:{
      baseStyle: {
        container: {
            border: '1px solid #5f5f5f',
            padding: '10px',
            borderRadius: '8px',
            bg: 'none',
            color: 'white',
        },
        label: {
            fontWeight: '200',
            fontSize: '8px',
            textTransform: 'lowercase'
        },
        number: {
            fontWeight: '300',
            fontSize: '16px',
        },
        helpText: {
            fontSize: 'xs',
        },
      },
    },
    Tabs:{
      defaultProps: {
        colorScheme: 'customScheme',
      }
    }
  }
});

export default theme;
