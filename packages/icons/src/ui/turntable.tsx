import type { Icon } from './types'

export const IconTurntable: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-turntable'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.3 4.77c2.82 0 4.24 0 5.12.88s.87 2.3.87 5.12v2.46c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H7.71c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12v-2.46c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88zM14.03 12c0 2-2.26 4.4-4.25 4.4S5.07 14 5.07 12 7.8 7.66 9.8 7.66s4.25 2.35 4.25 4.34'
        fill='currentColor'
      />
      <rect
        width='14.45'
        height='20.59'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 19.23)'
        stroke='currentColor'
      />
      <circle cx='9.65' cy='11.97' r='4.49' stroke='currentColor' />
      <path
        d='M9.65 11.28a.69.69 0 1 1 0 1.38.69.69 0 0 1 0-1.38'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.3 7.6v3.7c0 .96 0 1.44-.12 1.9s-.33.88-.76 1.73l-.8 1.57'
        stroke='currentColor'
      />
    </svg>
  )
}
