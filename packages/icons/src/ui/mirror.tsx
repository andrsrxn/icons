import type { Icon } from './types'

export const IconMirror: Icon = ({
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
      data-slot='icon-ui-mirror'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.24 7.6c0-2.82 0-4.24-.88-5.11s-2.3-.88-5.12-.88H9.76c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v8.78c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88h4.48c2.83 0 4.24 0 5.12-.88.88-.87.88-2.29.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M20.24 7.6c0-2.82 0-4.24-.88-5.11s-2.3-.88-5.12-.88H9.76c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v8.78c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88h4.48c2.83 0 4.24 0 5.12-.88.88-.87.88-2.29.88-5.12z'
        stroke='currentColor'
      />
      <path d='M9 4.36 6.36 7' stroke='currentColor' />
      <path d='m13.37 4.7-6.62 6.63' stroke='currentColor' />
    </svg>
  )
}
