import type { Icon } from './types'

export const IconVolumeCircle: Icon = ({
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
      data-slot='icon-ui-volume-circle'
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
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0m8.08-3.1-3.8.3-.57 2.8.27 2.52 4.23.56 4.47 3.32.96-6.4-.96-6.39z'
        fill='currentColor'
      />
      <path d='M10.1 9.16v5.48' stroke='currentColor' />
      <path
        d='M10.03 9.16H8.18c-.67 0-1 0-1.28.09a2 2 0 0 0-1.36 1.35c-.08.28-.08.62-.08 1.29a5 5 0 0 0 .08 1.29 2 2 0 0 0 1.36 1.35c.27.08.6.08 1.28.08h1.85'
        stroke='currentColor'
      />
      <path
        d='m9.75 14.62 1.93 1.66c1.42 1.22 2.14 1.83 2.72 1.56.58-.26.58-1.2.58-3.08V9.12c0-1.84 0-2.75-.57-3.02s-1.28.3-2.7 1.47l-1.96 1.6'
        stroke='currentColor'
      />
      <path d='M17.89 14.41c.5-.84.65-1.43.65-2.41s-.16-1.57-.65-2.41' stroke='currentColor' />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
    </svg>
  )
}
