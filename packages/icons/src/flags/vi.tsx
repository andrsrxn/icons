import type { FlagIcon } from './types'

export const IconFlagVI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'VI',
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
      data-slot='icon-flag-vi'
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
            id='vi-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vi-c'
            x1='10.5'
            x2='10.5'
            y1='1.98'
            y2='12.74'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f8ce61' />
            <stop offset='1' stopColor='#f3c44b' />
          </linearGradient>
          <linearGradient
            id='vi-d'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vi-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1e357f' />
            <stop offset='1' stopColor='#162966' />
          </linearGradient>
          <linearGradient
            id='vi-h'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#bc1443' />
            <stop offset='1' stopColor='#a30b35' />
          </linearGradient>
          <clipPath id='vi-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='vi-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vi-clip)'>
        <g clipPath='url(#vi-a)'>
          <path fill='url(#vi-b)' d='M21 0H0v15h21z' />
          <path
            fill='#1583c4'
            d='m16.35 6.5-3.07 5.88a.25.25 0 0 0 .44.24l3.07-5.88a.25.25 0 0 0-.44-.24'
          />
          <path
            fill='#1583c4'
            d='m16.78 7.81-3.48 4.54a.25.25 0 0 0 .4.3l3.48-4.53a.25.25 0 0 0-.4-.3'
          />
          <path
            fill='#1583c4'
            d='m15.22 7.4-1.95 5a.25.25 0 0 0 .46.2l1.96-5a.25.25 0 0 0-.47-.2'
          />
          <path
            fill='#409347'
            d='M4.26 6.57A18 18 0 0 0 5.3 9.13a10 10 0 0 0 .93 1.26l1.1 1.28a.25.25 0 0 0 .37-.34 31 31 0 0 1-2-2.46l-.06-.11a8 8 0 0 1-.4-.89 19 19 0 0 1-.51-1.44.25.25 0 0 0-.48.14'
          />
          <path
            fill='#1583c4'
            d='M19 6.5V9a.5.5 0 0 0 1 0V6.5a.5.5 0 0 0-1 0M2.5 7.65l-.54-1.34a.5.5 0 0 0-.92.38l1 2.5a.5.5 0 0 0 .92 0l1-2.5a.5.5 0 1 0-.92-.38z'
          />
          <path
            fill='url(#vi-c)'
            d='M15 6.5s.04.66-.8 1-1.7 0-1.7 0 .62.36 1 1 .18.98.5 1.3.9.1 1.12.37c.23.28.2.59-.12.83-.33.24-.43.13-.8-.12s-.2-.5-.2-.5-.64-.32-1.13-.47C12.5 9.21 12 9 12 9v.5s1 .51 1 1c0 .21-.46.92-1 1.42-.7.64-1.5.82-1.5.82V5.5l3-.5s-1.38-1.09 1.75-1.85l3.78-.91c.54-.13.74.14.44.6 0 0-.02.1-.47.66s-.55.66-1 1-.45.09-1 .5-.57.78-1 1-1 0-1 0zm-9 0V6s-.57.22-1 0-.45-.59-1-1-.55-.16-1-.5a4 4 0 0 1-1-1c-.45-.56-.47-.66-.47-.66-.3-.46-.1-.73.44-.6l3.78.91C8.88 3.91 7.5 5 7.5 5l3 .5v7.24s-.8-.18-1.5-.82c-.54-.5-1-1.2-1-1.42 0-.49 1-1 1-1V9s-.5.22-.87.91c-.5.15-1.13.48-1.13.48s.17.24-.2.5c-.37.24-.47.35-.8.11s-.35-.55-.12-.83.8-.05 1.12-.37.12-.66.5-1.3 1-1 1-1-.86.34-1.7 0-.8-1-.8-1m3.25-1.77c-.02-.14-.32-.25-.19-.29.25-.06.37-.14.5-.35.05-.1-.2-.03-.11-.12.4-.48.5-.85.23-.98-.57-.26-.64.43-.62.14q.03-.3.07-.45c.11-.36.7-.34.73-.41.15-.3.31-.32.64-.27s.48.2.6.47c.1.2.08.5.18.8.07.18.17.29.25.48.04.1-.29-.11-.25 0 .12.29.4.28.57.54.07.11-.26-.02-.24.15.02.12.39.56.39.56H9s.27-.15.25-.27'
          />
          <path
            stroke='#000'
            strokeOpacity='.08'
            strokeWidth='.5'
            d='m14.12 10.17.25.13-.16.22c-.01.04 0 .07.13.15.3.2.3.2.34.21q.03.02.17-.08.3-.22.08-.47c-.04-.03-.1-.05-.33-.07l-.13-.02zm0 0-.17-.09m.17.09-.17-.09m0 0-.13-.1c-.17-.17-.23-.33-.29-.63-.06-.35-.1-.48-.24-.72q-.14-.22-.32-.42-.36-.36-.6-.5l.22-.44.22.06q.63.16 1.25-.04l.04-.02q.32-.13.48-.33a.7.7 0 0 0 .17-.43v-.87l.34.13.13.04q.25.06.48.02l.19-.05c.12-.07.2-.14.32-.3a2.5 2.5 0 0 1 1.29-1 1 1 0 0 0 .35-.18c.43-.32.52-.4.95-.96.32-.39.43-.56.46-.63.18-.27.15-.3-.17-.23l-.72.17-3.06.75q-.99.24-1.45.53c-.47.29-.5.51-.31.76q.07.1.1.11l.45.35-3.35.56v6.69a4 4 0 0 0 1.08-.67 4 4 0 0 0 .92-1.25q-.04-.2-.4-.46a3 3 0 0 0-.46-.3l-.14-.07V8.62l.35.15a2 2 0 0 1 .73.62q.12.15.21.31l.48.19q.25.1.43.2Zm-3.7-4.37.2.04-.2-.25zm0 6.69v.34l.3-.24zm-2.3-2.7-.04.1.15-.13zm-.9.38-.17.08zM9.5 4.75h2a1 1 0 0 1-.13-.28q-.02-.14.04-.23c-.19-.12-.29-.22-.36-.4q-.06-.21.08-.32a1 1 0 0 1-.12-.3l-.07-.37-.06-.27c-.1-.22-.2-.3-.42-.33-.26-.05-.3-.03-.38.13-.05.1-.1.13-.24.16.05 0-.21.05-.28.07l-.14.07q.18 0 .37.09c.43.2.37.66 0 1.17q.06.14-.02.27a1 1 0 0 1-.32.35.4.4 0 0 1 .05.19Z'
          />
          <path
            fill='url(#vi-d)'
            d='M8 6.5V4s.5.49 1.16.49c.67 0 1.34-.49 1.34-.49s.63.49 1.25.49C12.38 4.49 13 4 13 4v2.5C13 9 10.5 10 10.5 10S8 9 8 6.5'
          />
          <mask id='vi-e' width='5' height='6' x='8' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M8 6.5V4s.5.49 1.16.49c.67 0 1.34-.49 1.34-.49s.63.49 1.25.49C12.38 4.49 13 4 13 4v2.5C13 9 10.5 10 10.5 10S8 9 8 6.5'
            />
          </mask>
          <g mask='url(#vi-e)'>
            <path fill='url(#vi-f)' d='M13 4H8v2h5z' />
          </g>
          <mask id='vi-g' width='5' height='6' x='8' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M8 6.5V4s.5.49 1.16.49c.67 0 1.34-.49 1.34-.49s.63.49 1.25.49C12.38 4.49 13 4 13 4v2.5C13 9 10.5 10 10.5 10S8 9 8 6.5'
            />
          </mask>
          <g mask='url(#vi-g)'>
            <path
              fill='url(#vi-h)'
              fillRule='evenodd'
              d='M8 6h1v4H8zm2 0h1v4h-1zm2 0h1v4h-1z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
