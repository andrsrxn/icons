import type { Icon } from './types'

export const IconEraserCircle: Icon = ({
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
      data-slot='icon-ui-eraser-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.27 20.89A10.3 10.3 0 1 1 17.5 21V9.18l-5-1.92-5.24 1.92z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.89 22.08c.93 0 1.39 0 1.77-.1a3 3 0 0 0 2.12-2.13c.1-.38.1-.84.1-1.77 0-.31 0-.46-.03-.6a1 1 0 0 0-.7-.7c-.13-.03-.29-.03-.6-.03h-8.1c-.32 0-.47 0-.6.03a1 1 0 0 0-.7.7c-.04.14-.04.29-.04.6 0 .93 0 1.39.1 1.77a3 3 0 0 0 2.13 2.12c.38.1.84.1 1.77.1z'
        fill='currentColor'
      />
      <path
        d='M7.43 20.57V13c0-1.94 0-2.9.43-3.62a3 3 0 0 1 1.02-1.02c.71-.43 1.68-.43 3.62-.43s2.92 0 3.63.43a3 3 0 0 1 1.02 1.02c.43.71.43 1.68.43 3.62v7.57'
        stroke='currentColor'
      />
      <path d='M2.2 12a10.3 10.3 0 0 0 10.3 10.31A10.31 10.31 0 1 0 2.2 12' stroke='currentColor' />
      <path d='M17.58 16.4H7.4' stroke='currentColor' />
    </svg>
  )
}
