import type { FlagIcon } from './types'

export const IconFlagGI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GI',
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
      data-slot='icon-flag-gi'
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
            id='gi-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gi-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gi-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e71924' />
            <stop offset='1' stopColor='#d6101b' />
          </linearGradient>
          <linearGradient
            id='gi-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ea1824' />
            <stop offset='1' stopColor='#d6101b' />
          </linearGradient>
          <linearGradient
            id='gi-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='gi-g'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ecce3e' />
            <stop offset='1' stopColor='#d9bc2d' />
          </linearGradient>
          <clipPath id='gi-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gi-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gi-clip)'>
        <g clipPath='url(#gi-a)'>
          <path fill='url(#gi-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gi-c)' d='M21 0H0v10h21z' />
          <path fill='url(#gi-d)' d='M21 10H0v5h21z' />
          <path
            fill='url(#gi-e)'
            fillRule='evenodd'
            d='M9 6H8V4.49A.5.5 0 0 0 7.5 4h-1c-.29 0-.5.22-.5.49V8L5 9h11l-1-1V4.49a.5.5 0 0 0-.5-.49h-1c-.29 0-.5.22-.5.49V6h-1V3.49a.5.5 0 0 0-.5-.49h-2a.5.5 0 0 0-.5.49z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gi-f)'
            fillRule='evenodd'
            d='M7 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m3.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M14 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
          <path
            fill='url(#gi-g)'
            fillRule='evenodd'
            d='M10 9.94V12H9v1h2V9.94c.58-.13 1-.5 1-.94 0-.55-.67-1-1.5-1S9 8.45 9 9c0 .44.42.8 1 .94'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
