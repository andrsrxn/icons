import type { Icon } from './types'

export const IconBellFilled: Icon = ({
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
      data-slot='icon-ui-bell-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M21.73 15.05a1.94 1.94 0 0 1-1.48 3.2H3.73a1.92 1.92 0 0 1-1.44-3.2l1.5-1.73.01-.02V9.96a8.2 8.2 0 0 1 8.2-8.2c4.56 0 8.25 3.7 8.25 8.26v3.3z'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8 20.68c.67 1.1 2.2 1.7 4 1.7s3.33-.6 4-1.7z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
