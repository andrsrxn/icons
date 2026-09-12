import type { Icon } from './types'

export const IconHeartHalf: Icon = ({
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
      data-slot='icon-ui-heart-half'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 18.74V6.7q0-.2-.02-.3l-.14-.22c-.76-1.05-2.6-2.77-5.06-2.77-3.33 0-5.84 3.8-4.76 7.82.86 3.2 5.08 5.93 8.05 8.36.9.75 1.36 1.12 1.64.98.29-.13.29-.7.29-1.83'
        fill='currentColor'
      />
      <path
        d='M17.22 3.41c-1.79 0-3.24.9-4.2 1.8-.55.51-.82.77-1.02.77s-.47-.26-1.03-.77c-.95-.9-2.4-1.8-4.19-1.8-3.33 0-5.84 3.8-4.76 7.82.98 3.64 6.31 6.68 9.19 9.35h0c.4.37.6.56.79.56s.4-.19.8-.56h0c2.87-2.67 8.2-5.7 9.18-9.35 1.08-4.02-1.43-7.82-4.76-7.82'
        stroke='currentColor'
      />
      <path d='M12 6.11v14.86' stroke='currentColor' />
    </svg>
  )
}
