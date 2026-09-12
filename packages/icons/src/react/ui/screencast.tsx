import type { Icon } from './types'

export const IconScreencast: Icon = ({
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
      data-slot='icon-ui-screencast'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.77'
        y='4.06'
        width='20.47'
        height='15.66'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M3.01 18.75a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.08 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M1.77 7.52c0-.43 0-.64.02-.82a3 3 0 0 1 2.62-2.62c.18-.02.4-.02.82-.02h11.01c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v3.65c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87h-2.17'
        stroke='currentColor'
      />
      <path d='M1.77 14.72c1.45.17 2.33.6 3.37 1.63a5 5 0 0 1 1.62 3.36' stroke='currentColor' />
      <path
        d='M1.77 11.28c2.44.29 3.92 1 5.65 2.74a8.5 8.5 0 0 1 2.73 5.65'
        stroke='currentColor'
      />
    </svg>
  )
}
