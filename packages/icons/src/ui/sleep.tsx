import type { Icon } from './types'

export const IconSleep: Icon = ({
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
      data-slot='icon-ui-sleep'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.26 8.15c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.59H11.5v-3.59c0-1.88 0-2.82.59-3.4.58-.6 1.53-.6 3.41-.6z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M22.26 15.74v-1.59c0-2.82 0-4.24-.88-5.12s-2.29-.88-5.12-.88h-.76c-1.88 0-2.83 0-3.41.6-.59.58-.59 1.52-.59 3.4v3.59'
        stroke='currentColor'
      />
      <path d='M1.74 15.74h20.49' stroke='currentColor' />
      <path d='M1.74 19.33V4.67' stroke='currentColor' />
      <path d='M22.26 19.33v-6.81' stroke='currentColor' />
      <path
        opacity='.2'
        d='M4.38 11.03a2.24 2.24 0 1 0 4.48 0 2.24 2.24 0 0 0-4.48 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M4.38 11.03a2.24 2.24 0 1 1 4.48 0 2.24 2.24 0 0 1-4.48 0' stroke='currentColor' />
    </svg>
  )
}
