import type { FlagIcon } from './types'

export const IconFlagGBSCT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GBSCT',
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
      data-slot='icon-flag-gb-sct'
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
            id='gb-sct-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-sct-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1479d0' />
            <stop offset='1' stopColor='#0a68ba' />
          </linearGradient>
          <linearGradient
            id='gb-sct-d'
            x1='10.5'
            x2='10.5'
            y1='-1.44'
            y2='16.43'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='gb-sct-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gb-sct-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-sct-clip)'>
        <g clipPath='url(#gb-sct-a)'>
          <path fill='url(#gb-sct-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gb-sct-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gb-sct-d)'
            fillRule='evenodd'
            d='M10.5 6.3-.96-1.45-2.08.22 8.72 7.5l-10.8 7.28 1.12 1.65L10.5 8.7l11.46 7.73 1.12-1.65-10.8-7.28L23.09.22l-1.12-1.66z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
