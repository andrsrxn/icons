import type { FlagIcon } from './types'

export const IconFlagIR: FlagIcon = ({
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
  const titleText = title ?? 'IR'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ir-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ir-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#38bb56' />
          <stop offset='100%' stopColor='#2b9f45' />
        </linearGradient>
        <linearGradient id='ir-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de1b27' />
          <stop offset='100%' stopColor='#d80915' />
        </linearGradient>
        <clipPath id='ir-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ir-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ir-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ir-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ir-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ir-a)' d='M0 5h21v5H0z' />
          <path
            fill='#fff'
            fillOpacity='.5'
            d='M1 4.252C1 4.113 1.107 4 1.252 4h.496c.139 0 .252.107.252.252v.496C2 4.887 1.893 5 1.748 5h-.496A.25.25 0 0 1 1 4.748zm2 0C3 4.113 3.107 4 3.252 4h.496c.139 0 .252.107.252.252v.496C4 4.887 3.893 5 3.748 5h-.496A.25.25 0 0 1 3 4.748zm2 0C5 4.113 5.107 4 5.252 4h.496c.139 0 .252.107.252.252v.496C6 4.887 5.893 5 5.748 5h-.496A.25.25 0 0 1 5 4.748zm2 0C7 4.113 7.107 4 7.252 4h.496c.139 0 .252.107.252.252v.496C8 4.887 7.893 5 7.748 5h-.496A.25.25 0 0 1 7 4.748zm2 0C9 4.113 9.107 4 9.252 4h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 9 4.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 11 4.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 13 4.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 15 4.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 17 4.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 19 4.748zm-18 6c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 1 10.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 3 10.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 5 10.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 7 10.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.25.25 0 0 1 9 10.748zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 1-.252-.252zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 1-.252-.252zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 1-.252-.252zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 1-.252-.252zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 1-.252-.252z'
          />
          <path stroke='#d80915' strokeWidth='.5' d='M9.591 6.642a1.25 1.25 0 1 0 1.83.014z' />
          <rect width='1' height='2' x='10' y='7' fill='#d80915' rx='.5' />
        </g>
      </g>
    </svg>
  )
}
