import type { Icon } from './types'

export const IconLogoGithub: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-github'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path fill='currentColor' d='M11.16 20.5v-3.4a2.72 2.72 0 0 1 5.44 0v3.4h-5.44Z' />
        <path
          fill='currentColor'
          d='M12.506 5.54A4.42 4.42 0 0 0 8.78 3.5a4.413 4.413 0 0 0-.297 3.8 4.189 4.189 0 0 0-.723 2.32v.68a4.08 4.08 0 0 0 4.08 4.08h4.08A4.08 4.08 0 0 0 20 10.3v-.68a4.189 4.189 0 0 0-.723-2.32 4.414 4.414 0 0 0-.297-3.8 4.42 4.42 0 0 0-3.726 2.04h-2.748Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.16 20.5v-3.4a2.72 2.72 0 0 1 5.44 0v3.4m-5.44-2.04H8.44a2.72 2.72 0 0 1-2.72-2.72A2.72 2.72 0 0 0 3 13.02m9.506-7.48A4.42 4.42 0 0 0 8.78 3.5a4.413 4.413 0 0 0-.297 3.8 4.189 4.189 0 0 0-.723 2.32v.68a4.08 4.08 0 0 0 4.08 4.08h4.08A4.08 4.08 0 0 0 20 10.3v-.68a4.189 4.189 0 0 0-.723-2.32 4.414 4.414 0 0 0-.297-3.8 4.42 4.42 0 0 0-3.726 2.04h-2.748Z'
      />
    </svg>
  )
}
