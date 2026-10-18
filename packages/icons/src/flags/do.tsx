import type { FlagIcon } from './types'

export const IconFlagDO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'DO',
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
      data-slot='icon-flag-do'
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
            id='do-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='do-c' x1='4.5' x2='4.5' y1='0' y2='6' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#083d7a' />
            <stop offset='1' stopColor='#032f61' />
          </linearGradient>
          <linearGradient
            id='do-d'
            x1='16.5'
            x2='16.5'
            y1='9'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#083d7a' />
            <stop offset='1' stopColor='#032f61' />
          </linearGradient>
          <linearGradient id='do-e' x1='4.5' x2='4.5' y1='9' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df1e35' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='do-f'
            x1='16.5'
            x2='16.5'
            y1='0'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df1e35' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='do-g'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='do-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='do-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#do-clip)'>
        <g clipPath='url(#do-a)'>
          <path fill='url(#do-b)' d='M21 0H0v15h21z' />
          <path fill='url(#do-c)' d='M9 0H0v6h9z' />
          <path fill='url(#do-d)' d='M21 9h-9v6h9z' />
          <path fill='url(#do-e)' d='M9 9H0v6h9z' />
          <path fill='url(#do-f)' d='M21 0h-9v6h9z' />
          <path
            fill='url(#do-g)'
            fillRule='evenodd'
            d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z'
            clipRule='evenodd'
          />
          <path
            fill='#c93127'
            fillOpacity='.2'
            fillRule='evenodd'
            d='M9.44 6.44a1.5 1.5 0 1 0 2.12 0'
            clipRule='evenodd'
          />
          <path fill='#042f60' d='M10.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path
            fill='#0f6d1a'
            d='M11.56 8.56a1.5 1.5 0 0 1-2.12-2.12l.35.35a1 1 0 1 0 1.42 0l.35-.35a1.5 1.5 0 0 1 0 2.12m0 0a1.5 1.5 0 0 1-2.12-2.12l.35.35a1 1 0 1 0 1.42 0l.35-.35a1.5 1.5 0 0 1 0 2.12'
          />
        </g>
      </g>
    </svg>
  )
}
