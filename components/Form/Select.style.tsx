/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const customSelectWrapper = css`
  width: 100%;
  position: relative;
`
export const customSelect = ({ disabled }: { disabled: boolean }) => css`
  appearance: none;
  width: 100%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1rem;
    height: 2rem;
    text-align: center;
    background-image: ${disabled
      ? 'url(public/arrow_drop_down_black.png)'
      : 'url(public/arrow_drop_down_disabled.png)'};
    background-repeat: no-repeat;
    background-position: center center;
    background-color: transparent;
    pointer-events: none;
  }
`
