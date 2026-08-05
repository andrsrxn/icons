import type { FlagIcon } from './types'

export const IconFlagCA: FlagIcon = ({
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
  const titleText = title ?? 'CA'

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
        <linearGradient id='ca-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ca-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff3131' />
          <stop offset='100%' stopColor='red' />
        </linearGradient>
        <clipPath id='ca-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ca-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ca-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ca-b)' d='M10 0h11v15H10z' />
          <path fill='url(#ca-b)' d='M0 0h7v15H0z' />
          <path fill='url(#ca-a)' d='M6 0h9v15H6z' />
          <path
            fill='url(#ca-b)'
            d='m11.674 7.326.652-.652a.25.25 0 0 1 .355.007L13 7l1-.5-.5 1 .32.32a.247.247 0 0 1 .008.352L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.172 8.172a.253.253 0 0 1 .009-.353L7.5 7.5l-.5-1L8 7l.32-.32a.25.25 0 0 1 .354-.006l.652.652c.096.096.152.063.124-.075L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.251c-.029.142.028.171.124.075'
          />
        </g>
      </g>
    </svg>
  )
}
