import type { Icon } from './types'

export const IconCodeSquare: Icon = ({
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
      data-slot='icon-ui-code-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='19.17'
        height='19.17'
        rx='3'
        transform='matrix(0 -1 -1 0 21.54 21.84)'
        fill='currentColor'
      />
      <path
        d='m14.47 8.25.8.68c1.71 1.42 2.57 2.13 2.57 3.07s-.85 1.64-2.56 3.07l-.81.68'
        stroke='currentColor'
      />
      <path
        d='m9.53 8.25-.8.68C7.01 10.35 6.15 11.06 6.15 12s.85 1.64 2.56 3.07l.81.68'
        stroke='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='matrix(0 -1 -1 0 21.54 21.84)'
        stroke='currentColor'
      />
    </svg>
  )
}
