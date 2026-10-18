import type { FlagIcon } from './types'

export const IconFlagFM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'FM',
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
      data-slot='icon-flag-fm'
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
            id='fm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fm-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#95cef5' />
            <stop offset='1' stopColor='#78b3dc' />
          </linearGradient>
          <linearGradient
            id='fm-d'
            x1='10.5'
            x2='10.5'
            y1='1.5'
            y2='13.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='fm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='fm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fm-clip)'>
        <g clipPath='url(#fm-a)'>
          <path fill='url(#fm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#fm-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#fm-d)'
            fillRule='evenodd'
            d='m10.5 4.32-1.18.8.4-1.37-1.12-.87 1.42-.04.48-1.34.48 1.34 1.42.04-1.12.87.4 1.37zm0 8-1.18.8.4-1.37-1.12-.87 1.42-.04.48-1.34.48 1.34 1.42.04-1.12.87.4 1.37zm4-4-1.18.8.4-1.37-1.12-.87 1.42-.04.48-1.34.48 1.34 1.42.04-1.12.87.4 1.37zm-8 0-1.18.8.4-1.37-1.12-.87 1.42-.04.48-1.34.48 1.34 1.42.04-1.12.87.4 1.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
