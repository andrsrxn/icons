import type { FlagIcon } from './types'

export const IconFlagLK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LK',
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
      data-slot='icon-flag-lk'
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
            id='lk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffbf19' />
            <stop offset='1' stopColor='#ffb800' />
          </linearGradient>
          <linearGradient id='lk-d' x1='14' x2='14' y1='1' y2='14' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#a52531' />
            <stop offset='1' stopColor='#8e1f29' />
          </linearGradient>
          <linearGradient id='lk-e' x1='2.5' x2='2.5' y1='1' y2='14' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#03664f' />
            <stop offset='1' stopColor='#005642' />
          </linearGradient>
          <linearGradient id='lk-f' x1='5.5' x2='5.5' y1='1' y2='14' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ff6816' />
            <stop offset='1' stopColor='#ff5b01' />
          </linearGradient>
          <linearGradient id='lk-g' x1='14' x2='14' y1='2' y2='13' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffbf18' />
            <stop offset='1' stopColor='#ffb800' />
          </linearGradient>
          <linearGradient
            id='lk-h'
            x1='13.77'
            x2='13.77'
            y1='4.19'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffbf18' />
            <stop offset='1' stopColor='#ffb800' />
          </linearGradient>
          <clipPath id='lk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='lk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lk-clip)'>
        <g clipPath='url(#lk-a)'>
          <path fill='url(#lk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#lk-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#lk-d)'
            fillRule='evenodd'
            d='M8 1h11.25c.41 0 .75.33.75.76v11.48c0 .42-.33.76-.75.76H8z'
            clipRule='evenodd'
          />
          <path
            fill='url(#lk-e)'
            fillRule='evenodd'
            d='M1 1.76c0-.42.34-.76.76-.76H4v13H1.76a.75.75 0 0 1-.76-.76z'
            clipRule='evenodd'
          />
          <path
            fill='url(#lk-f)'
            d='M6.5 1h-2a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5'
          />
          <path
            fill='url(#lk-g)'
            fillRule='evenodd'
            d='M9.5 3a.5.5 0 0 1-.5-.5V2h.5a.5.5 0 0 1 0 1m9 0a.5.5 0 0 1 0-1h.5v.5a.5.5 0 0 1-.5.5m0 9c.28 0 .5.22.5.5v.5h-.5a.5.5 0 0 1 0-1m-9 0a.5.5 0 0 1 0 1H9v-.5c0-.28.22-.5.5-.5'
            clipRule='evenodd'
          />
          <path
            fill='url(#lk-h)'
            fillRule='evenodd'
            d='M12 9.5a.5.5 0 0 0-.5-.5h.5c-.28 0-.7-.08-.97-.18 0 0-1.03-.32-1.03-.82s.2-.61.2-.61a1 1 0 0 0 .12-.86S9.9 5.6 10 5s.57-.75.57-.75c.24-.14.43-.03.43.25v2c0 .28.2.6.45.73l.1.04c.25.13.6.07.8-.12l-.2.2c.2-.2.16-.45-.1-.58l-.55-.27V6h.5q.42-.02.05-.23l-.55-.27V5h.5c.28 0 .66-.16.85-.35l-.2.2c.2-.2.58-.35.85-.35.28 0 .6.2.73.45l.04.1c.13.25.16.66.07.92l-.18.56c-.09.26.07.47.35.47h1.48c.28 0 .67-.16.86-.35l-.2.2c.2-.2.16-.45-.1-.58l-.1-.04A3 3 0 0 0 15.5 6a.5.5 0 0 1-.5-.5c0-.28.16-.66.35-.85l.15-.15V5c0 .28.23.5.5.5h-.5 1c.28 0 .6.2.73.45l.04.1c.13.25.25.67.27.94 0 0 .07.48-.04 1.01-.1.53-.23.59-.23.59a2 2 0 0 0-.27.91v1a.5.5 0 0 1-.5.5c-.28 0-.4-.2-.27-.45l.04-.1c.13-.25.13-.64 0-.9l-.04-.1q-.21-.37-.23.05c0 .28-.1.7-.23.95l-.04.1A.9.9 0 0 1 15 11c-.28 0-.4-.2-.27-.45l.04-.1c.13-.25.23-.68.23-.95a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5c0 .28-.1.7-.23.95l-.04.1A.9.9 0 0 1 12 11c-.28 0-.4-.2-.27-.45l.04-.1c.13-.25.23-.68.23-.95'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
