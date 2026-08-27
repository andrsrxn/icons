import type { Icon } from './types'

export const IconDislike: Icon = ({
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
      data-slot='ui-icon-dislike'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='21.09'
        y='3.75'
        width='10.1'
        height='4.97'
        rx='1'
        transform='rotate(90 21.09 3.75)'
        fill='currentColor'
      />
      <path
        d='M10.01 3.6h7.3c1.89 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v2.54c0 1.88 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-1.22s-1.15 1.76-1.5 3c-.13.48-.21 1-.27 1.47-.1.91-.15 1.37-.48 1.63s-.67.22-1.35.13c-.8-.1-1.66-.38-2.08-1.1a5 5 0 0 1-.4-2.95c.15-1.38.22-2.06-.07-2.4h0c-.3-.33-.91-.33-2.13-.33-2.76 0-4.14 0-4.74-.9v-.01c-.59-.91-.03-2.17 1.1-4.7l.36-.82c.77-1.73 1.15-2.6 1.9-3.08.74-.48 1.69-.48 3.58-.48M16.12 14V3.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
