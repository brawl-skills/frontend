import {
  extendTheme,
  type ThemeConfig,
  type ThemeComponents,
} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const components: ThemeComponents = {
  Button: {
    variants: {
      gradientGhost: {
        zIndex: 0,
        _hover: {
          textDecor: 'none',
          _before: {
            opacity: 0.6,
          },
        },
        _active: {
          _before: {
            opacity: 1,
          },
        },
        _before: {
          borderRadius: 'md',
          zIndex: -1,
          content: '""',
          position: 'absolute',
          left: '0px',
          top: '0px',
          right: '0px',
          bottom: '0px',
          opacity: 0,
          bgGradient: 'linear(to-r, #9F7AEA, #F687B3)',
          transition: '.2s',
        },
      },
      gradientSolid: {
        zIndex: 0,
        _hover: {
          textDecor: 'none',
          _before: {
            opacity: 0.6,
          },
        },
        _active: {
          _before: {
            opacity: 1,
          },
        },
        _before: {
          borderRadius: 'md',
          zIndex: -1,
          content: '""',
          position: 'absolute',
          left: '0px',
          top: '0px',
          right: '0px',
          bottom: '0px',
          opacity: 1,
          bgGradient: 'linear(to-r, #9F7AEA, #F687B3)',
          transition: '.2s',
        },
      },
    },
  },
  Divider: {
    defaultProps: { size: 'md' },
    sizes: {
      lg: { borderWidth: '4px' },
      md: { borderWidth: '2px' },
      sm: { borderWidth: '1px' },
    },
  },
}

const theme = extendTheme({ config, components })

export default theme
