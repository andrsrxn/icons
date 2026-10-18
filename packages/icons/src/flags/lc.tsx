import type { FlagIcon } from './types'

export const IconFlagLC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LC',
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
      data-slot='icon-flag-lc'
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
            id='lc-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lc-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#86d7ff' />
            <stop offset='1' stopColor='#6bcdfe' />
          </linearGradient>
          <linearGradient
            id='lc-d'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lc-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='lc-f'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffda57' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <clipPath id='lc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='lc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lc-clip)'>
        <g clipPath='url(#lc-a)'>
          <path fill='url(#lc-b)' d='M21 0H0v15h21z' />
          <path fill='url(#lc-c)' d='M21 0H0v15h21z' />
          <path fill='url(#lc-d)' fillRule='evenodd' d='M10.5 2 15 13H6z' clipRule='evenodd' />
          <path fill='url(#lc-e)' fillRule='evenodd' d='m10.5 4 3.5 9H7z' clipRule='evenodd' />
          <path fill='url(#lc-f)' fillRule='evenodd' d='m10.5 7 4.5 6H6z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
