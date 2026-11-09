import type { Icon } from './types'

export const IconGamepad: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-gamepad'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M16.37 18a6 6 0 1 0 0-12H7.63a6 6 0 0 0 0 12z' fill='currentColor' />
      <path d='M5.36 12h5.01' stroke='currentColor' />
      <path d='M7.86 14.5v-5' stroke='currentColor' />
      <path
        d='M15.54 13.72a.5.5 0 1 1-.98 0 .5.5 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.25 10.28a.5.5 0 1 1-.98 0 .5.5 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M1.62 12a6 6 0 0 1 6-6h8.75a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H7.63a6 6 0 0 1-6-6'
        stroke='currentColor'
      />
    </svg>
  )
}
