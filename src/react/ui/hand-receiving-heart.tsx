import type { Icon } from './types'

export const IconHandReceivingHeart: Icon = ({
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
      data-slot='ui-icon-hand-receiving-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.78' y='13.56' width='3.8' height='7.51' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M17.84 2.73c-1.27 0-2.19.95-2.49 1.43a3.2 3.2 0 0 0-2.49-1.43c-1.59 0-2.78 1.8-2.27 3.72s3.55 3.48 4.76 4.85c1.2-1.37 4.25-2.93 4.76-4.85s-.68-3.72-2.27-3.72'
        fill='currentColor'
      />
      <path
        d='M6.58 19.8s1.1.87 2.67 1.23c3.13.71 4.73.51 7.5-.44 2.03-.7 3.62-2.55 4.43-3.66.38-.52.38-1.2.04-1.76a1.88 1.88 0 0 0-2.8-.41c-.98.82-2.27 1.83-3.53 2.55-.74.43-2.27.34-3.73.34m3.73-.34c.6-1.48.42-2.67-.24-2.9a11 11 0 0 0-3.81-.6c-3.55 0-4.26.83-4.26.83'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.78'
        y='13.56'
        width='3.8'
        height='7.51'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.84 2.73c-1.27 0-2.19.95-2.49 1.43a3.2 3.2 0 0 0-2.49-1.43c-1.59 0-2.78 1.8-2.27 3.72s3.55 3.48 4.76 4.85c1.2-1.37 4.25-2.93 4.76-4.85s-.68-3.72-2.27-3.72'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
