import type { FlagIcon } from './types'

export const IconFlagCC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'CC'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-cc'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='cc-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cc-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#229716' />
          <stop offset='100%' stopColor='#1c7e12' />
        </linearGradient>
        <linearGradient id='cc-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffe244' />
          <stop offset='100%' stopColor='#ffdf32' />
        </linearGradient>
        <clipPath id='cc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cc-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cc-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cc-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#cc-c)'
            d='M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-2c.208 0-.16 1.054 0 1 .265-.09 1-1.328 1-1.5 0-.276-.448-.5-1-.5s-1 .224-1 .5.448.5 1 .5'
          />
          <path
            fill='url(#cc-c)'
            d='m16 13-.707.207.207-.707-.207-.707L16 12l.707-.207-.207.707.207.707z'
          />
          <path
            fill='url(#cc-c)'
            d='m16 3.5-.707.207L15.5 3l-.207-.707L16 2.5l.707-.207L16.5 3l.207.707z'
          />
          <path
            fill='url(#cc-c)'
            d='m19 6.5-.707.207L18.5 6l-.207-.707L19 5.5l.707-.207L19.5 6l.207.707z'
          />
          <path
            fill='url(#cc-c)'
            d='m14 7.5-.707.207L13.5 7l-.207-.707L14 6.5l.707-.207L14.5 7l.207.707z'
          />
          <path
            fill='url(#cc-c)'
            d='m17.5 8.75-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354z'
          />
          <path
            fill='url(#cc-c)'
            d='M12.061 5.547a2.5 2.5 0 1 0 0 3.905 2.083 2.083 0 1 1 0-3.905'
          />
        </g>
      </g>
    </svg>
  )
}
