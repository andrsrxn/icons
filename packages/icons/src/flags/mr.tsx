import type { FlagIcon } from './types'

export const IconFlagMR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MR',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-mr'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='mr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#108b4d' />
            <stop offset='1' stopColor='#0a6135' />
          </linearGradient>
          <linearGradient
            id='mr-d'
            x1='10.42'
            x2='10.42'
            y1='3.5'
            y2='11.01'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffc941' />
            <stop offset='1' stopColor='#ffc42e' />
          </linearGradient>
          <clipPath id='mr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mr-clip)'>
        <g clipPath='url(#mr-a)'>
          <path fill='url(#mr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mr-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#mr-d)'
            fillRule='evenodd'
            d='M14.86 5.8q.06.35.06.7a4.5 4.5 0 1 1-8.95-.7 4.5 4.5 0 0 0 8.89 0m-4.36.62-1.24.88.46-1.44-1.22-.9 1.52-.02.48-1.44.48 1.44 1.52.01-1.22.9.46 1.45z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
