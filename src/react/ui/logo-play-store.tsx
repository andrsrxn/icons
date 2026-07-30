import type { Icon } from './types'

export const IconLogoPlayStore: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-play-store'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.907 12 5.613 3.706a.628.628 0 0 0-.19.452v15.684a.628.628 0 0 0 .19.452L13.907 12Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M5.614 3.707 16.517 14.61M5.614 20.293 16.515 9.392M5.424 19.842a.652.652 0 0 0 .983.552l13.69-7.836a.632.632 0 0 0 0-1.116L6.407 3.606a.653.653 0 0 0-.983.552v15.684Z'
      />
    </svg>
  )
}
