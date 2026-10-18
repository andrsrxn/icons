import type { FlagIcon } from './types'

export const IconFlagGY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GY',
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
      data-slot='icon-flag-gy'
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
            id='gy-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gy-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#08c55f' />
            <stop offset='1' stopColor='#009f49' />
          </linearGradient>
          <linearGradient id='gy-d' x1='10' x2='10' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gy-e'
            x1='9.67'
            x2='9.67'
            y1='1.05'
            y2='13.95'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd831' />
            <stop offset='1' stopColor='#fdd117' />
          </linearGradient>
          <linearGradient
            id='gy-f'
            x1='5.25'
            x2='5.25'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='gy-g'
            x1='4.83'
            x2='4.83'
            y1='1.19'
            y2='13.81'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e92034' />
            <stop offset='1' stopColor='#ce1225' />
          </linearGradient>
          <clipPath id='gy-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gy-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gy-clip)'>
        <g clipPath='url(#gy-a)'>
          <path fill='url(#gy-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gy-c)' d='M21 0H0v15h21z' />
          <path fill='url(#gy-d)' d='M-1 15V0h1l21 7v1L0 15z' />
          <path fill='url(#gy-e)' d='M0 1.05v12.9L19.34 7.5z' />
          <path fill='url(#gy-f)' d='M-1 15V0h1l11.5 7.5L0 15z' />
          <path fill='url(#gy-g)' d='m0 13.8 9.67-6.3L0 1.2z' />
        </g>
      </g>
    </svg>
  )
}
