import type { Icon } from './types'

export const IconBalloon: Icon = ({
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
      data-slot='ui-icon-balloon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M18.3 8.29c0 3.15-2.78 8.69-5.94 8.69-3.15 0-5.5-5.54-5.5-8.7a5.72 5.72 0 0 1 11.44 0'
        fill='currentColor'
      />
      <path
        d='M18.46 8.45c0 3.24-2.63 8.53-5.88 8.53s-5.87-5.29-5.87-8.53a5.88 5.88 0 1 1 11.75 0m-5.71 8.53c.56.92.36 1.89-.66 2.64-1.14.84-2.8-.1-4.28.31-1.43.4-1.69 1.38-1.93 2.27'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.43 5.78c.63.08 1.38.28 1.98.88.64.65.85 1.52.85 2.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
