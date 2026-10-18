import type { FlagIcon } from './types'

export const IconFlagVN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'VN',
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
      data-slot='icon-flag-vn'
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
            id='vn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ea403f' />
            <stop offset='1' stopColor='#d82827' />
          </linearGradient>
          <linearGradient
            id='vn-d'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='11.14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fffe4e' />
            <stop offset='1' stopColor='#fffe38' />
          </linearGradient>
          <clipPath id='vn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='vn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vn-clip)'>
        <g clipPath='url(#vn-a)'>
          <path fill='url(#vn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#vn-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#vn-d)'
            fillRule='evenodd'
            d='m10.5 9.26-2.65 1.88.98-3.1-2.61-1.93 3.25-.03L10.5 3l1.03 3.08 3.25.03-2.61 1.93.97 3.1z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
