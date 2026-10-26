import type { Icon } from './types'

export const IconStrokeCapNone: Icon = ({
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
      data-slot='icon-ui-stroke-cap-none'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.07 9.54c1.04-.72 1.57-1.08 1.68-1.3s.11-.55.11-1.2v-.1c0-.95 0-1.42-.29-1.72-.3-.29-.76-.29-1.7-.29H3.41c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v9.56c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3h14.44c.95 0 1.42 0 1.71-.3.3-.29.3-.76.3-1.7v-.24c0-.65 0-.97-.12-1.19s-.53-.5-1.37-1.08a2.9 2.9 0 0 1-1.34-2.42c0-.98.45-1.62 1.03-2.02'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.65 11.71H16.9' stroke='currentColor' />
      <path
        d='M1.65 18.49h14.22c.92 0 1.38 0 1.76-.1a3 3 0 0 0 2.13-2.13c.1-.38.1-.84.1-1.76'
        stroke='currentColor'
      />
      <path d='M22.4 11.71a2.76 2.76 0 1 0-5.5 0 2.76 2.76 0 0 0 5.5 0' stroke='currentColor' />
      <path
        d='M1.65 4.93h14.32c.83 0 1.25 0 1.59.08a3 3 0 0 1 2.22 2.23c.08.34.08.75.08 1.58'
        stroke='currentColor'
      />
    </svg>
  )
}
