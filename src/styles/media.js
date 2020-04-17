import { css } from "styled-components"

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1024,
  tablet: 840,
  smallTablet: 720,
  bigPhone: 440,
  phone: 360,
  tiny: 330,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
