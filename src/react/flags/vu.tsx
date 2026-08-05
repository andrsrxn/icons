import type { FlagIcon } from './types'

export const IconFlagVU: FlagIcon = ({
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
  const titleText = title ?? 'VU'

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
        <linearGradient id='vu-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='vu-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#27ab53' />
          <stop offset='100%' stopColor='#219447' />
        </linearGradient>
        <linearGradient id='vu-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ec2547' />
          <stop offset='100%' stopColor='#ce1a39' />
        </linearGradient>
        <linearGradient id='vu-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='vu-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd449' />
          <stop offset='100%' stopColor='#fdcd34' />
        </linearGradient>
        <clipPath id='vu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vu-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#vu-a)' d='M0 0h21v15H0z' />
          <path fill='url(#vu-b)' d='M.2 9h21v6H.2z' />
          <path fill='url(#vu-c)' d='M.2 0h21v6H.2z' />
          <path fill='url(#vu-d)' d='M8.2 6h13v3h-13l-8 6V0z' />
          <path
            fill='url(#vu-e)'
            fillRule='nonzero'
            d='M6.867 7.5-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3z'
          />
          <path
            fill='url(#vu-e)'
            d='M2.7 9a1.5 1.5 0 1 1 1.5-1.5c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1m0-.75c.276.25.5-.474.5-.75a.5.5 0 0 0-1 0c0 .276.224 1 .5.75'
          />
        </g>
      </g>
    </svg>
  )
}
