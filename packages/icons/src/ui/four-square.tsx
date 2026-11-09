import type { Icon } from './types'

export const IconFourSquare: Icon = ({
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
      data-slot='icon-ui-four-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.31 21.58c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3.16c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-3.17c-3.77 0-5.65 0-6.82 1.17-1.18 1.17-1.18 3.06-1.18 6.83v3.16c0 3.77 0 5.66 1.18 6.83 1.17 1.17 3.05 1.17 6.82 1.17z'
        fill='currentColor'
      />
      <path
        d='M2.14 13.58v-3.16c0-3.77 0-5.66 1.18-6.83 1.17-1.17 3.05-1.17 6.82-1.17h3.17c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.17c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
      <path
        d='M13.53 14.5V9.3c0-1.39 0-2.08-.36-2.19s-.73.48-1.48 1.65h0l-2.7 4.2c-.43.68-.64 1.02-.5 1.28s.54.26 1.35.26zm0 0v2.96m0-2.96h1.55'
        stroke='currentColor'
      />
    </svg>
  )
}
