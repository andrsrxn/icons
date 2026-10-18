import type { FlagIcon } from './types'

export const IconFlagHN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'HN',
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
      data-slot='icon-flag-hn'
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
            id='hn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='hn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0884e6' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <linearGradient
            id='hn-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0884e6' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <linearGradient
            id='hn-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='hn-f'
            x1='10.5'
            x2='10.5'
            y1='6.79'
            y2='8.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e88e9' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <linearGradient
            id='hn-g'
            x1='14.5'
            x2='14.5'
            y1='5.79'
            y2='7.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e88e9' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <linearGradient
            id='hn-h'
            x1='14.5'
            x2='14.5'
            y1='7.79'
            y2='9.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e88e9' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <linearGradient
            id='hn-i'
            x1='6.5'
            x2='6.5'
            y1='7.79'
            y2='9.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e88e9' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <linearGradient
            id='hn-j'
            x1='6.5'
            x2='6.5'
            y1='5.79'
            y2='7.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0e88e9' />
            <stop offset='1' stopColor='#0074d0' />
          </linearGradient>
          <clipPath id='hn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='hn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#hn-clip)'>
        <g clipPath='url(#hn-a)'>
          <path fill='url(#hn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#hn-c)' d='M21 0H0v5h21z' />
          <path fill='url(#hn-d)' d='M21 10H0v5h21z' />
          <path fill='url(#hn-e)' d='M21 5H0v5h21z' />
          <path
            fill='url(#hn-f)'
            fillRule='evenodd'
            d='m10.5 8-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#hn-g)'
            fillRule='evenodd'
            d='m14.5 7-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#hn-h)'
            fillRule='evenodd'
            d='m14.5 9-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#hn-i)'
            fillRule='evenodd'
            d='m6.5 9-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#hn-j)'
            fillRule='evenodd'
            d='m6.5 7-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
