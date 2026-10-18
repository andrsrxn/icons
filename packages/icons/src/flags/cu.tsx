import type { FlagIcon } from './types'

export const IconFlagCU: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CU',
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
      data-slot='icon-flag-cu'
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
            id='cu-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cu-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0b389f' />
            <stop offset='1' stopColor='#052e8d' />
          </linearGradient>
          <linearGradient
            id='cu-d'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0b389f' />
            <stop offset='1' stopColor='#052e8d' />
          </linearGradient>
          <linearGradient
            id='cu-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cu-f'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0b389f' />
            <stop offset='1' stopColor='#052e8d' />
          </linearGradient>
          <linearGradient
            id='cu-g'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='cu-h' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e12a43' />
            <stop offset='1' stopColor='#cd1931' />
          </linearGradient>
          <linearGradient
            id='cu-i'
            x1='3.5'
            x2='3.5'
            y1='5.5'
            y2='9.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='cu-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cu-clip)'>
        <g clipPath='url(#cu-a)'>
          <path fill='url(#cu-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cu-c)' d='M21 0H0v3h21z' />
          <path fill='url(#cu-d)' d='M21 6H0v3h21z' />
          <path fill='url(#cu-e)' d='M21 3H0v3h21z' />
          <path fill='url(#cu-f)' d='M21 12H0v3h21z' />
          <path fill='url(#cu-g)' d='M21 9H0v3h21z' />
          <path fill='url(#cu-h)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#cu-i)'
            fillRule='evenodd'
            d='m3.5 8.27-1.18.85.45-1.38-1.17-.86h1.45L3.5 5.5l.45 1.38H5.4l-1.17.86.45 1.38z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
