import type { Icon } from './types'

export const IconHeartFilled: Icon = ({
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
      data-slot='icon-ui-heart-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.22 3.4c-1.79 0-3.24.9-4.2 1.8h0c-.55.51-.82.77-1.02.77s-.47-.26-1.03-.78a6.2 6.2 0 0 0-4.2-1.79c-3.33 0-5.83 3.8-4.76 7.82.98 3.65 6.32 6.68 9.2 9.36.4.37.6.55.79.55s.4-.18.8-.55c2.87-2.68 8.21-5.71 9.19-9.36 1.07-4.02-1.43-7.82-4.77-7.82'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
