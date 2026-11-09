import type { Icon } from './types'

export const IconActualSize: Icon = ({
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
      data-slot='icon-ui-actual-size'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 12c0-3.33 0-5 .93-6.11a4 4 0 0 1 .5-.5c1.12-.93 2.79-.93 6.12-.93h5.46c3.33 0 5 0 6.11.93a4 4 0 0 1 .5.5c.94 1.11.94 2.78.94 6.11s0 5-.93 6.11a4 4 0 0 1-.5.5c-1.12.93-2.79.93-6.12.93H9.27c-3.33 0-5 0-6.11-.93a4 4 0 0 1-.5-.5C1.71 17 1.71 15.33 1.71 12'
        fill='currentColor'
      />
      <path
        d='M9.27 19.54h5.46c3.33 0 5 0 6.11-.93a4 4 0 0 0 .5-.5c.94-1.11.94-2.78.94-6.11v0c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.93-2.79-.93-6.12-.93H9.27c-3.33 0-5 0-6.11.93a4 4 0 0 0-.5.5C1.71 7 1.71 8.67 1.71 12v0c0 3.33 0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.93 2.79.93 6.12.93'
        stroke='currentColor'
      />
      <path
        d='m8.14 9.44.45.44c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-.45.44'
        stroke='currentColor'
      />
      <path
        d='m15.86 9.44-.45.44c-1 1-1.5 1.5-1.5 2.12s.5 1.12 1.5 2.12l.45.44'
        stroke='currentColor'
      />
      <path d='M9.82 12H5.16' stroke='currentColor' />
      <path d='M14.18 12h4.66' stroke='currentColor' />
    </svg>
  )
}
