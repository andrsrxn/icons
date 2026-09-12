import type { Icon } from './types'

export const IconClouds: Icon = ({
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
      data-slot='icon-ui-clouds'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m13.52 11.79 2.3.26 2.8 3.4 3.45-1.5.5-3.61-2.6-1.99-1.36 1.03-1.2-2.85-3.06-1.73-2.18.9L10.75 8z'
        fill='currentColor'
      />
      <path
        d='M4.8 18.54a3.3 3.3 0 0 1-2.41-1.09 3.8 3.8 0 0 1-.96-2.53c0-2 1.5-3.62 3.37-3.62 1.1 0 2.08.57 2.7 1.45'
        stroke='currentColor'
      />
      <path d='M15.08 18.54H4.66' stroke='currentColor' />
      <path d='M19.7 15.14h-1.5' stroke='currentColor' />
      <path d='M4.9 11.2a4.2 4.2 0 0 1 7.7-.97c.69 1.19.66 2.4.5 3.2' stroke='currentColor' />
      <path
        d='M10.26 8.24a3.94 3.94 0 0 1 7.23-.88c.64 1.12.55 2.04.47 2.64'
        stroke='currentColor'
      />
      <path
        d='M13.22 11.91a3 3 0 0 1 2.78.1 3.53 3.53 0 0 1 1.29 4.81c-.58 1-1.36 1.61-2.17 1.71'
        stroke='currentColor'
      />
      <path
        d='M18.06 8.93a2.8 2.8 0 0 1 2.61.09 3.3 3.3 0 0 1 1.21 4.52c-.54.94-1.27 1.51-2.03 1.6'
        stroke='currentColor'
      />
    </svg>
  )
}
