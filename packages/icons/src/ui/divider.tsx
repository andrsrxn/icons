import type { Icon } from './types'

export const IconDivider: Icon = ({
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
      data-slot='icon-ui-divider'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.33 22.28v-.9c0-2.83 0-4.25-.87-5.13-.88-.88-2.3-.88-5.13-.88H9.67c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12v.9h16.67'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.33 1.68v.93c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H9.67c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12v-.93h16.67'
        fill='currentColor'
      />
      <path
        d='M20.33 22.21v-.84c0-2.82 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H9.67c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12v.84'
        stroke='currentColor'
      />
      <path
        d='M20.33 1.74v.87c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H9.67c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12v-.87'
        stroke='currentColor'
      />
      <path d='M4.94 12h14.12' stroke='currentColor' />
    </svg>
  )
}
