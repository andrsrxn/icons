import type { FlagIcon } from './types'

export const IconFlagBA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BA',
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
      data-slot='icon-flag-ba'
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
            id='ba-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ba-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0b36b2' />
            <stop offset='1' stopColor='#042993' />
          </linearGradient>
          <linearGradient
            id='ba-d'
            x1='11.75'
            x2='11.75'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd045' />
            <stop offset='1' stopColor='#feca2f' />
          </linearGradient>
          <linearGradient
            id='ba-e'
            x1='13'
            x2='13'
            y1='12.79'
            y2='14.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ba-f'
            x1='11'
            x2='11'
            y1='9.79'
            y2='11.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ba-g'
            x1='9'
            x2='9'
            y1='6.79'
            y2='8.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ba-h'
            x1='7'
            x2='7'
            y1='3.79'
            y2='5.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ba-i' x1='5' x2='5' y1='.79' y2='2.21' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ba-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ba-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ba-clip)'>
        <g clipPath='url(#ba-a)'>
          <path fill='url(#ba-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ba-c)' d='M21 0H0v15h21z' />
          <path fill='url(#ba-d)' fillRule='evenodd' d='M17 15V0H6.5z' clipRule='evenodd' />
          <path
            fill='url(#ba-e)'
            fillRule='evenodd'
            d='m13 14-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ba-f)'
            fillRule='evenodd'
            d='m11 11-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ba-g)'
            fillRule='evenodd'
            d='m9 8-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ba-h)'
            fillRule='evenodd'
            d='m7 5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ba-i)'
            fillRule='evenodd'
            d='m5 2-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
