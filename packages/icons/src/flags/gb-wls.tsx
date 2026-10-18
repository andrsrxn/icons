import type { FlagIcon } from './types'

export const IconFlagGBWLS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GBWLS',
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
      data-slot='icon-flag-gb-wls'
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
            id='gb-wls-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-wls-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#3acc55' />
            <stop offset='1' stopColor='#28a940' />
          </linearGradient>
          <linearGradient
            id='gb-wls-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-wls-e'
            x1='10.23'
            x2='10.23'
            y1='1.89'
            y2='12.07'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e91c44' />
            <stop offset='1' stopColor='#d20f35' />
          </linearGradient>
          <clipPath id='gb-wls-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gb-wls-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-wls-clip)'>
        <g clipPath='url(#gb-wls-a)'>
          <path fill='url(#gb-wls-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gb-wls-c)' d='M21 7H0v8h21z' />
          <path fill='url(#gb-wls-d)' d='M21 0H0v7h21z' />
          <path
            fill='url(#gb-wls-e)'
            fillRule='evenodd'
            d='m8.07 11.4 1.23-.21-.95-.46.65-.36s1.1.93 1.1.63c0-.32 1.04-.18 1-.63-.06-.62-1.15-.05-1.34-.82-.11-.44-.46-.38-.46-.38l-1.1.38-.54.82-.28-.82s-.64.52-.85.82a5 5 0 0 0-.47 1.03l1.12.46-1.64-.28-1.19.28-.73.2.32-.33-.66-.33.66-.4-.32-.27 1.42.27s.51-.05.71-.27c.25-.27.44-1.18.44-1.18l-.65-.38-.5.92s-.35-.87-.69-1.36c-.25-.36-1.07-1.2-1.07-1.2l-1.05.56.59-1.17s.46-.41.17-.83-.55-1.35-.55-1.35.62 1.07.84.99c.32-.12-.4-1.1 0-1.27.29-.13.34 1.12.34 1.12l.32-.61v.76s-.19.9.13 1.44 1.26.92 1.26.92-.24-.54 0-1.58c.17-.7.76-1.9 1.03-2.29.15-.2-1.17.75-1.17.75v-.75L3.94 4.1l-.32.37-.8-1.32 1 .5h1.51l-.3-.36H3.82s.26-.53 1.52-.53l.6-.4 1.27.04c.4.01 1.15-.5 1.15-.5l.2.5-.48.75.48.5-.2.31.35.5h-.63l.48.8-.48-.28.28.76-.28.78 1.23-.42s0-1.12.46-1.63c1.38-1.42 3.64-2.57 3.64-2.57s-.12 1.03.22 1.11c.48.12 2.6-.85 2.6-.85s-1.27 1.37-1.01 1.5c.14.06.37.3.37.3s-1.1.9-1.28 1.3c-.19.38.27.84.27.84s-.95 0-1.43.42c1.43 0 2.6.67 3.28.18.46-.34-1.65-.13-1.38-.96.1-.31.38-.67 1-.76.61-.1.83.27.83.27l.33-.5h-.98L18 3l.23 2.24-.6-.5-.27.84c.64 1.95-2.32 2.37-2.32 2.37l1.83 1.22-.65.19-.19 1.83.84.67-1.1-.28-2.15.49.42-.67-.9.18.6-.58-.6-.27.77-.21.97.67s.48-.63.54-.96c.05-.34-.21-1.06-.21-1.06s-1.43-.03-1.94-.16c-.5-.12-.8-.52-.8-.52l-.57.68s2 .75 1.5 1.06c-.11.08-.69-.14-.69-.14s-.98 1.15-1.61 1.3c-.29.08.8.47.8.47s-.93-.14-1.4-.28c-.5-.15-1.95.28-1.95.28zm8.02-5.35a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
