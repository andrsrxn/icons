import type { Icon } from './types'

export const IconChalkboardUser: Icon = ({
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
      data-slot='icon-ui-chalkboard-user'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.8 4.75c1.88 0 2.82 0 3.41.58.59.59.59 1.53.59 3.42v3.62c0 1.43 0 2.14-.36 2.65a2 2 0 0 1-.48.5c-.5.36-1.22.37-2.64.4l-1.38.03c-.94.02-1.73.72-1.87 1.65a1.9 1.9 0 0 1-1.9 1.65h-3.3l-.95-1.47-1.84-.98c.6-.3 1.78-1.38 1.65-3.21-.13-1.84-1.77-2.16-2.57-2.1l-1.94.57V8.75c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.8 19.25v-8.5c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H7.34c-1.04 0-1.57 0-2 .13a3 3 0 0 0-2 2c-.12.42-.12.95-.12 2'
        stroke='currentColor'
      />
      <path
        d='M20.8 19.25v-.37c0-1.41 0-2.12-.44-2.56s-1.15-.44-2.56-.44H17c-1.41 0-2.12 0-2.56.44S14 17.47 14 18.88v.37'
        stroke='currentColor'
      />
      <path d='M22.4 19.25H11.9' stroke='currentColor' />
      <path d='M7.8 14.1a2.58 2.58 0 1 0-5.16 0 2.58 2.58 0 0 0 5.15 0' stroke='currentColor' />
      <path d='M1.6 20.3a3.62 3.62 0 0 1 7.23 0' stroke='currentColor' />
    </svg>
  )
}
