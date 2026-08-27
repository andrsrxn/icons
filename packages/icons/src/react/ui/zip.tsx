import type { Icon } from './types'

export const IconZip: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-zip'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.5 2.65c-1.88.02-2.81.03-3.39.62-.58.58-.58 1.52-.58 3.38V17.3c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58h6.94c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42v-5.4c0-1.02 0-1.53-.18-1.92a2 2 0 0 0-1-1c-.39-.17-.9-.17-1.91-.17s-1.52 0-1.91-.18a2 2 0 0 1-1-1c-.18-.39-.18-.9-.18-1.9 0-1.03 0-1.54-.18-1.94a2 2 0 0 0-1-1c-.4-.17-.91-.16-1.93-.15zm-.6 12.28a1.24 1.24 0 1 1 2.15 1.22 1.24 1.24 0 0 1-2.15-1.22'
        fill='currentColor'
      />
      <path
        d='M10.53 21.3c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V8.7c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h1c1.22 0 1.83 0 2.38.22.55.23.99.66 1.86 1.53l.97.97.91.9c.9.86 1.34 1.3 1.58 1.86s.24 1.18.24 2.43v4.7c0 2.82 0 4.24-.88 5.12s-2.3.87-5.12.87z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.11 3.16v1.89c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58H19M9 3.16V13.5M7.68 6.65h2.64m-2.64 3.81h2.64M9 17.3c-.79 0-1.43-.65-1.43-1.44C7.57 14.53 9 13.5 9 13.5s1.43 1.05 1.43 2.36c0 .8-.64 1.43-1.43 1.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
