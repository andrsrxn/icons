import type { Icon } from './types'

export const IconClockTwentyFour: Icon = ({
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
      data-slot='icon-ui-clock-twenty-four'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M14.54 21.93a10.25 10.25 0 1 0-12.67-11.5' stroke='currentColor' />
      <path
        d='m17.1 14.73-2.71-1.8c-.87-.6-1.3-.88-1.54-1.32s-.24-.97-.24-2.02V5.7'
        stroke='currentColor'
      />
      <path
        d='M1.62 15.44c.68-1.1 3.12-1.17 3.12.9 0 1.45-1.84 2.17-2.96 3.92-.2.3.04.68.4.68h2.64'
        stroke='currentColor'
      />
      <path
        d='M10.39 20.94v-4.1c0-1.4 0-2.1-.36-2.2-.37-.11-.74.48-1.49 1.66l-.85 1.34c-.43.68-.64 1.02-.5 1.28s.55.26 1.35.26h2.78'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0'
        fill='currentColor'
      />
    </svg>
  )
}
