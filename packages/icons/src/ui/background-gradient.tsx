import type { Icon } from './types'

export const IconBackgroundGradient: Icon = ({
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
      data-slot='icon-ui-background-gradient'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.28 2.92c3.77 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v2.16c0 3.77 0 5.65-1.17 6.82-1.17 1.18-3.06 1.18-6.83 1.18H10.8c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82v-2.16c0-3.77 0-5.65 1.17-6.82 1.17-1.18 3.06-1.18 6.83-1.18z'
        fill='currentColor'
      />
      <path
        d='M2.76 13.24v-2.48c0-3.77 0-5.66 1.17-6.83S7 2.76 10.76 2.76h2.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.48c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.48c-3.77 0-5.66 0-6.83-1.17S2.76 17 2.76 13.24'
        stroke='currentColor'
      />
      <path
        d='M8.13 6.88a.76.76 0 1 1-1.53 0 .76.76 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.07 7.33a.57.57 0 1 1-1.13 0 .57.57 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.13 12a.76.76 0 1 1-1.53 0 .76.76 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.07 12a.57.57 0 1 1-1.13 0 .57.57 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.48 9.43a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.13 17.12a.76.76 0 1 1-1.53 0 .76.76 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.07 16.67a.57.57 0 1 1-1.13 0 .57.57 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.48 14.57a.43.43 0 1 1-.87 0 .43.43 0 0 1 .87 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
