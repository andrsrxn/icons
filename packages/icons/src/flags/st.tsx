import type { FlagIcon } from './types'

export const IconFlagST: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ST',
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
      data-slot='icon-flag-st'
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
            id='st-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='st-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2acb41' />
            <stop offset='1' stopColor='#21ac35' />
          </linearGradient>
          <linearGradient
            id='st-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2acb41' />
            <stop offset='1' stopColor='#21ac35' />
          </linearGradient>
          <linearGradient
            id='st-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fdd043' />
            <stop offset='1' stopColor='#ffcd2f' />
          </linearGradient>
          <linearGradient id='st-f' x1='4' x2='4' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e71e43' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <linearGradient
            id='st-g'
            x1='11'
            x2='11'
            y1='5.5'
            y2='9.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='st-h'
            x1='16'
            x2='16'
            y1='5.5'
            y2='9.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='st-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='st-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#st-clip)'>
        <g clipPath='url(#st-a)'>
          <path fill='url(#st-b)' d='M21 0H0v15h21z' />
          <path fill='url(#st-c)' d='M21 10H0v5h21z' />
          <path fill='url(#st-d)' d='M21 0H0v5h21z' />
          <path fill='url(#st-e)' d='M21 5H0v5h21z' />
          <path fill='url(#st-f)' fillRule='evenodd' d='m0 0 8 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#st-g)'
            fillRule='evenodd'
            d='m11 8.32-1.18.8.4-1.37-1.12-.87 1.42-.04L11 5.5l.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
          <path
            fill='url(#st-h)'
            fillRule='evenodd'
            d='m16 8.32-1.18.8.4-1.37-1.12-.87 1.42-.04L16 5.5l.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
