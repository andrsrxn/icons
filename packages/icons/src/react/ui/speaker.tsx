import type { Icon } from './types'

export const IconSpeaker: Icon = ({
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
      data-slot='icon-ui-speaker'
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
        d='M19.43 5.79c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H8.57c-1.89 0-2.83 0-3.42.58-.58.59-.58 1.53-.58 3.42v12.45c0 1.89 0 2.83.58 3.41.59.6 1.53.6 3.42.6h6.86c1.89 0 2.83 0 3.42-.6.58-.58.58-1.52.58-3.4zm-3.71 9.14a3.72 3.72 0 1 1-7.44 0 3.72 3.72 0 0 1 7.44 0'
        fill='currentColor'
      />
      <rect x='4.57' y='1.79' width='14.87' height='20.45' rx='3' stroke='currentColor' />
      <circle cx='12' cy='14.93' r='3.93' stroke='currentColor' />
      <path
        d='M12.52 14.93a.52.52 0 1 1-1.04 0 .52.52 0 0 1 1.04 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.52 6.15a.52.52 0 1 1-1.04 0 .52.52 0 0 1 1.04 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
