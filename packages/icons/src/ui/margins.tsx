import type { Icon } from './types'

export const IconMargins: Icon = ({
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
      data-slot='icon-ui-margins'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        width='18.48'
        height='18.48'
        rx='3'
        transform='scale(1 -1)rotate(90 21.24 0)'
        stroke='currentColor'
      />
      <path d='M21 7.14H3' stroke='currentColor' />
      <path d='M21 16.76H3' stroke='currentColor' />
      <path d='M7.22 2.95v18' stroke='currentColor' />
      <path d='M16.78 2.95v18' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.86 7.14c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v5.72c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H9.14c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V9.14c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
