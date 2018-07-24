import { css } from 'emotion'

const spacing = {
  5: '3.75rem',
  4: '3.125rem',
  3: '1.75rem',
  2: '1.375rem',
  1: '1.25rem',
  0: '0rem'
}

const getSpacing = (size = 0) => {
  return spacing[size]
}

const getTopRightBottomLeft = type => (sizeTop = '0', sizeRight = '0', sizeBottom = '0', sizeLeft = '0') => {
  return css`
    ${type}: ${getSpacing(sizeTop)} ${getSpacing(sizeRight)} ${getSpacing(sizeBottom)} ${getSpacing(sizeLeft)};
  `
}

export const padding = getTopRightBottomLeft('padding')
export const margin = getTopRightBottomLeft('margin')
