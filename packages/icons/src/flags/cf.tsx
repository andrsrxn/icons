import type { FlagIcon } from './types'

export const IconFlagCF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CF',
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
      data-slot='icon-flag-cf'
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
            id='cf-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cf-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#083d96' />
            <stop offset='1' stopColor='#053380' />
          </linearGradient>
          <linearGradient
            id='cf-d'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#37ae39' />
            <stop offset='1' stopColor='#2e9630' />
          </linearGradient>
          <linearGradient
            id='cf-e'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd13f' />
            <stop offset='1' stopColor='#ffcd2f' />
          </linearGradient>
          <linearGradient
            id='cf-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cf-g'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e42346' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <linearGradient
            id='cf-h'
            x1='3.5'
            x2='3.5'
            y1='.5'
            y2='3.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd03b' />
            <stop offset='1' stopColor='#ffcd2f' />
          </linearGradient>
          <clipPath id='cf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cf-clip)'>
        <g clipPath='url(#cf-a)'>
          <path fill='url(#cf-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cf-c)' d='M21 0H0v4h21z' />
          <path fill='url(#cf-d)' d='M21 7H0v4h21z' />
          <path fill='url(#cf-e)' d='M21 11H0v4h21z' />
          <path fill='url(#cf-f)' d='M21 4H0v3h21z' />
          <path fill='url(#cf-g)' d='M13 0H8v15h5z' />
          <path
            fill='url(#cf-h)'
            fillRule='evenodd'
            d='m3.5 2.59-.88.62.32-1.03-.87-.64 1.09-.01L3.5.5l.34 1.03h1.09l-.87.65.32 1.03z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
