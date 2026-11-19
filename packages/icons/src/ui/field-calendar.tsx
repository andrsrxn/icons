import type { Icon } from './types'

export const IconFieldCalendar: Icon = ({
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
      data-slot='icon-ui-field-calendar'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.46 5.46c3.62 0 5.43 0 6.58 1.09l.18.18c1.09 1.15 1.09 2.96 1.09 6.58l-.83-.37c-.85-.37-1.28-.56-1.73-.64a8 8 0 0 0-1.85-.03l-1.13.06a2.84 2.84 0 0 0-2.7 2.83v3.38H8.22c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M10.26 18.54H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49H18.4a3.9 3.9 0 0 1 3.9 3.91'
        stroke='currentColor'
      />
      <path
        d='M17.89 12.48h.42c1.88 0 2.82 0 3.41.59.59.58.59 1.52.59 3.41v.42c0 1.88 0 2.82-.59 3.41s-1.53.59-3.41.59h-.42c-1.89 0-2.83 0-3.41-.59-.6-.59-.6-1.53-.6-3.41v-.42c0-1.89 0-2.83.6-3.41.58-.59 1.52-.59 3.41-.59'
        stroke='currentColor'
      />
      <path d='M16.08 11.69v1.59' stroke='currentColor' />
      <path d='M20.14 11.69v1.59' stroke='currentColor' />
      <path d='M22.1 15.77h-7.83' stroke='currentColor' />
    </svg>
  )
}
