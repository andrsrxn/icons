import type { Icon } from './types'

export const IconPlayCircle: Icon = ({
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
      data-slot='icon-ui-play-circle'
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
        d='M1.82 12a10.18 10.18 0 1 0 20.36 0 10.18 10.18 0 0 0-20.36 0m7.63-5.46 8.54 4.9-1.91 2.89-6.63 3.45L7.73 12z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.18' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M8.2 12c0-3.05 0-4.57.97-5.16l.12-.07c1-.51 2.3.28 4.9 1.88 2.41 1.47 3.61 2.2 3.65 3.28v.14c-.04 1.07-1.24 1.81-3.65 3.28-2.6 1.6-3.9 2.4-4.9 1.88l-.12-.07c-.96-.59-.96-2.11-.96-5.16'
        stroke='currentColor'
      />
    </svg>
  )
}
