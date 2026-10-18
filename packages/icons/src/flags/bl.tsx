import type { FlagIcon } from './types'

export const IconFlagBL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'BL',
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
      data-slot='icon-flag-bl'
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
            id='bl-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='bl-c'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='12.92'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#216cd3' />
            <stop offset='1' stopColor='#1557b2' />
          </linearGradient>
          <linearGradient
            id='bl-e'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f7e14b' />
            <stop offset='1' stopColor='#f7df3e' />
          </linearGradient>
          <linearGradient
            id='bl-g'
            x1='10.5'
            x2='10.5'
            y1='10.5'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f7e14b' />
            <stop offset='1' stopColor='#f7df3e' />
          </linearGradient>
          <linearGradient
            id='bl-i'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e12539' />
            <stop offset='1' stopColor='#ca192c' />
          </linearGradient>
          <linearGradient
            id='bl-k'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='5.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f7e14b' />
            <stop offset='1' stopColor='#f7df3e' />
          </linearGradient>
          <clipPath id='bl-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='bl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bl-clip)'>
        <g clipPath='url(#bl-a)'>
          <path fill='url(#bl-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#bl-c)'
            d='M7 5h7v4.5c0 .55-.34 1.29-.76 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37A2.5 2.5 0 0 1 7 9.5z'
          />
          <mask
            id='bl-d'
            width='7'
            height='8'
            x='7'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M7 5h7v4.5c0 .55-.34 1.29-.76 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37A2.5 2.5 0 0 1 7 9.5z'
            />
          </mask>
          <g mask='url(#bl-d)'>
            <path
              fill='url(#bl-e)'
              fillRule='evenodd'
              d='M8.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='bl-f'
            width='7'
            height='8'
            x='7'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M7 5h7v4.5c0 .55-.34 1.29-.76 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37A2.5 2.5 0 0 1 7 9.5z'
            />
          </mask>
          <g mask='url(#bl-f)'>
            <path
              fill='url(#bl-g)'
              fillRule='evenodd'
              d='M9 11.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='bl-h'
            width='7'
            height='8'
            x='7'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M7 5h7v4.5c0 .55-.34 1.29-.76 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37A2.5 2.5 0 0 1 7 9.5z'
            />
          </mask>
          <g mask='url(#bl-h)'>
            <path fill='url(#bl-i)' d='M14 8H7v2h7z' />
          </g>
          <mask
            id='bl-j'
            width='7'
            height='8'
            x='7'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M7 5h7v4.5c0 .55-.34 1.29-.76 1.65l-1.6 1.37c-.63.54-1.66.54-2.29 0l-1.6-1.37A2.5 2.5 0 0 1 7 9.5z'
            />
          </mask>
          <g mask='url(#bl-j)'>
            <path fill='#fff' d='M10.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <path
            fill='url(#bl-k)'
            fillRule='evenodd'
            d='M6.5 3.5s2-.5 4-.5 4 .5 4 .5l-.5 2S12.25 5 10.5 5 7 5.5 7 5.5z'
            clipRule='evenodd'
          />
          <path
            fill='#5e5216'
            fillRule='evenodd'
            d='M10.5 4.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
