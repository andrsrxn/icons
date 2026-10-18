import type { FlagIcon } from './types'

export const IconFlagNC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NC',
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
      data-slot='icon-flag-nc'
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
            id='nc-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='nc-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#094cc7' />
            <stop offset='1' stopColor='#003cab' />
          </linearGradient>
          <linearGradient
            id='nc-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2aad55' />
            <stop offset='1' stopColor='#219447' />
          </linearGradient>
          <linearGradient
            id='nc-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f65d55' />
            <stop offset='1' stopColor='#e9443c' />
          </linearGradient>
          <linearGradient
            id='nc-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fae749' />
            <stop offset='1' stopColor='#fbe533' />
          </linearGradient>
          <linearGradient
            id='nc-g'
            x1='10.5'
            x2='10.5'
            y1='4.74'
            y2='10.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='nc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='nc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#nc-clip)'>
        <g clipPath='url(#nc-a)'>
          <path fill='url(#nc-b)' d='M21 0H0v15h21z' />
          <path fill='url(#nc-c)' d='M21 0H0v5h21z' />
          <path fill='url(#nc-d)' d='M21 10H0v5h21z' />
          <path fill='url(#nc-e)' d='M21 5H0v5h21z' />
          <path fill='url(#nc-f)' d='M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7' />
          <path
            fill='url(#nc-g)'
            fillRule='evenodd'
            d='M10.1 6.21a.5.5 0 1 0 .51-.2l.14-.08c.6-.34.97-.82.83-1.05s-.73-.16-1.33.19-.97.82-.83 1.06c.08.14.34.17.67.08m.4 4.29c-.83 0-1-.72-1-1s.17-.5 1-.5 1 .22 1 .5-.17 1-1 1m0-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
