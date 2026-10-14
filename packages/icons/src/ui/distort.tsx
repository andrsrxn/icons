import type { Icon } from './types'

export const IconDistort: Icon = ({
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
      data-slot='icon-ui-distort'
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
        transform='scale(1 -1)rotate(90 21.58 0)'
        fill='currentColor'
      />
      <path
        d='M8.88 2.42S7.23 4.99 7.65 8.94c.27 2.55 1.03 5.72 1.23 7.47.37 3.14 0 5.17 0 5.17'
        stroke='currentColor'
      />
      <path
        d='M14.53 21.58s1.66-2.57 1.24-6.52c-.28-2.55-1.03-5.72-1.24-7.47-.36-3.14 0-5.17 0-5.17'
        stroke='currentColor'
      />
      <path
        d='M21.58 8.04s-2.57 1.65-6.52 1.23C12.51 9 9.34 8.24 7.6 8.04c-3.14-.37-5.17 0-5.17 0'
        stroke='currentColor'
      />
      <path
        d='M2.42 14.82s2.57 1.66 6.52 1.24c2.55-.27 5.72-1.03 7.47-1.24 3.14-.36 5.17 0 5.17 0'
        stroke='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
    </svg>
  )
}
