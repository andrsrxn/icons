import type { Icon } from './types'

export const IconLuggage: Icon = ({
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
      data-slot='icon-ui-luggage'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.22 13.41c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h1.56c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.56c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88h-1.56c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M11.22 20.97h1.56c2.83 0 4.24 0 5.12-.88.88-.87.88-2.29.88-5.12v-1.56c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.56c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v1.56c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88'
        stroke='currentColor'
      />
      <path d='M9.29 7.16V1.73' stroke='currentColor' />
      <path d='M9.98 16.65v-5.43' stroke='currentColor' />
      <path d='M7.93 22.75v-1.78' stroke='currentColor' />
      <path d='M14.71 7.16V1.73' stroke='currentColor' />
      <path d='M14.02 16.65v-5.43' stroke='currentColor' />
      <path d='M16.07 22.75v-1.78' stroke='currentColor' />
      <path d='M17.42 1.73H6.58' stroke='currentColor' />
    </svg>
  )
}
