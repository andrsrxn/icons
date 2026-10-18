import type { FlagIcon } from './types'

export const IconFlagMG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MG',
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
      data-slot='icon-flag-mg'
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
            id='mg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mg-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#149047' />
            <stop offset='1' stopColor='#0f7e3d' />
          </linearGradient>
          <linearGradient
            id='mg-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f84f4b' />
            <stop offset='1' stopColor='#fa3f3b' />
          </linearGradient>
          <linearGradient id='mg-e' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mg-clip)'>
        <g clipPath='url(#mg-a)'>
          <path fill='url(#mg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mg-c)' d='M21 7H0v8h21z' />
          <path fill='url(#mg-d)' d='M21 0H0v7h21z' />
          <path fill='url(#mg-e)' d='M7 0H0v15h7z' />
        </g>
      </g>
    </svg>
  )
}
