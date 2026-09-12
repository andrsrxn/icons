import type { Icon } from './types'

export const IconTruckFront: Icon = ({
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
      data-slot='icon-ui-truck-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.43 14.39c0-.39 0-.58-.05-.73a1 1 0 0 0-.63-.63c-.15-.05-.35-.05-.73-.05H3.98c-.38 0-.58 0-.73.05a1 1 0 0 0-.63.63c-.05.15-.05.34-.05.73 0 1.15 0 1.72.15 2.19a3 3 0 0 0 1.9 1.89 8 8 0 0 0 2.18.15h10.4c1.15 0 1.72 0 2.19-.15a3 3 0 0 0 1.89-1.9c.15-.46.15-1.03.15-2.18'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.77 4.93c0 .38-.3.7-.69.7H5.92a.7.7 0 0 1-.7-.7c0-1.14.93-2.07 2.08-2.07h9.4c1.15 0 2.07.93 2.07 2.07'
        fill='currentColor'
      />
      <path
        d='M21.43 11.65c0-2.82 0-4.24-.88-5.12s-2.29-.88-5.12-.88H8.57c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v.97c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h6.86c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.13z'
        stroke='currentColor'
      />
      <path
        d='M4.67 5.65a2.8 2.8 0 0 1 2.82-2.82h9.02a2.8 2.8 0 0 1 2.82 2.82'
        stroke='currentColor'
      />
      <path d='M5.08 18.62v.42a2.13 2.13 0 1 0 4.26 0v-.42' stroke='currentColor' />
      <path d='M14.66 18.62v.42a2.13 2.13 0 0 0 4.26 0v-.42' stroke='currentColor' />
      <path d='M2.77 12.98H21.1' stroke='currentColor' />
      <path d='M5.46 15.68h3.5' stroke='currentColor' />
      <path d='M15.04 15.68h3.5' stroke='currentColor' />
    </svg>
  )
}
