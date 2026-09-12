import type { Icon } from './types'

export const IconHeart: Icon = ({
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
      data-slot='icon-ui-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.25 3.35c-1.8 0-3.27.9-4.23 1.8-.55.52-.82.78-1.02.78s-.47-.26-1.02-.78a6.3 6.3 0 0 0-4.23-1.8C3.4 3.35.88 7.17 1.96 11.2c.98 3.67 6.36 6.72 9.25 9.4.4.38.6.57.79.57s.4-.19.8-.56c2.88-2.69 8.26-5.74 9.24-9.41 1.08-4.04-1.44-7.86-4.79-7.86'
        fill='currentColor'
      />
      <path
        d='M17.25 3.35c-1.8 0-3.27.9-4.23 1.8h0c-.55.52-.82.78-1.02.78s-.47-.26-1.02-.78a6.3 6.3 0 0 0-4.23-1.8C3.4 3.35.88 7.17 1.96 11.2c.98 3.67 6.36 6.72 9.25 9.4.4.38.6.57.79.57s.4-.19.8-.56c2.88-2.69 8.26-5.74 9.24-9.41 1.08-4.04-1.44-7.86-4.79-7.86'
        stroke='currentColor'
      />
    </svg>
  )
}
