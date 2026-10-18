import type { FlagIcon } from './types'

export const IconFlagPG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PG',
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
      data-slot='icon-flag-pg'
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
            id='pg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='pg-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e8283f' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='pg-e'
            x1='5'
            x2='5'
            y1='11.29'
            y2='12.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pg-f'
            x1='5'
            x2='5'
            y1='5.29'
            y2='6.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pg-g'
            x1='2.5'
            x2='2.5'
            y1='7.79'
            y2='9.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pg-h'
            x1='7'
            x2='7'
            y1='7.29'
            y2='8.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pg-i'
            x1='14.83'
            x2='14.83'
            y1='2'
            y2='7.78'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd84e' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <clipPath id='pg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pg-clip)'>
        <g clipPath='url(#pg-a)'>
          <path fill='url(#pg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pg-c)' d='M21 0H0v15h21z' />
          <path fill='url(#pg-d)' fillRule='evenodd' d='M0 0h21v15z' clipRule='evenodd' />
          <path
            fill='url(#pg-e)'
            fillRule='evenodd'
            d='m5 12.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pg-f)'
            fillRule='evenodd'
            d='m5 6.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pg-g)'
            fillRule='evenodd'
            d='m2.5 9-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pg-h)'
            fillRule='evenodd'
            d='m7 8.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pg-i)'
            fillRule='evenodd'
            d='M14.15 6.95a.5.5 0 0 1-.22-.38v-.92c0-.13-.1-.21-.25-.16l-.57.19a1 1 0 0 1-.49 0l-.57-.2q-.2-.08-.03-.2l1.34-.8a.3.3 0 0 0 .13-.38l-.19-.57q-.06-.22.17-.16l.57.19c.13.04.3-.02.37-.14l.8-1.33q.13-.19.22.03l.18.56c.05.14.05.35 0 .5l-.18.56q-.06.23.16.25h.92c.14 0 .3.1.38.22l.8 1.33c.07.12.01.24-.12.27l-1.27.25a.4.4 0 0 0-.3.3l-.25 1.27c-.03.14-.15.2-.27.12z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
