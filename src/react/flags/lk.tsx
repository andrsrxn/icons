import type { FlagIcon } from './types'

export const IconFlagLK: FlagIcon = ({
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
  const titleText = title ?? 'LK'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-lk'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='lk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffbf19' />
          <stop offset='100%' stopColor='#ffb800' />
        </linearGradient>
        <linearGradient id='lk-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#a52531' />
          <stop offset='100%' stopColor='#8e1f29' />
        </linearGradient>
        <linearGradient id='lk-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#03664f' />
          <stop offset='100%' stopColor='#005642' />
        </linearGradient>
        <linearGradient id='lk-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ff6816' />
          <stop offset='100%' stopColor='#ff5b01' />
        </linearGradient>
        <linearGradient id='lk-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffbf18' />
          <stop offset='100%' stopColor='#ffb800' />
        </linearGradient>
        <clipPath id='lk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lk-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#lk-c)'
            d='M8 1h11.25a.75.75 0 0 1 .75.755v11.49a.75.75 0 0 1-.75.755H8z'
          />
          <path
            fill='url(#lk-d)'
            d='M1 1.755A.76.76 0 0 1 1.757 1H4v13H1.757A.754.754 0 0 1 1 13.245z'
          />
          <rect width='3' height='13' x='4' y='1' fill='url(#lk-e)' rx='.5' />
          <path
            fill='url(#lk-f)'
            d='M9.5 3a.5.5 0 0 1-.5-.5V2h.5a.5.5 0 0 1 0 1m9 0a.5.5 0 1 1 0-1h.5v.5a.5.5 0 0 1-.5.5m0 9a.5.5 0 0 1 .5.5v.5h-.5a.5.5 0 1 1 0-1m-9 0a.5.5 0 1 1 0 1H9v-.5a.5.5 0 0 1 .5-.5'
          />
          <path
            fill='url(#lk-f)'
            d='M12 9.5c0-.276-.227-.5-.5-.5h.5a3 3 0 0 1-.975-.185S10 8.5 10 8s.203-.614.203-.614c.164-.213.215-.588.112-.86 0 0-.415-.926-.315-1.526s.57-.749.57-.749c.238-.139.43-.035.43.244v2.01c0 .273.193.591.453.722l.094.046c.25.126.611.069.806-.126l-.206.206c.195-.195.16-.45-.1-.58L11.5 6.5V6h.5c.276 0 .307-.096.047-.227L11.5 5.5V5h.5c.276 0 .658-.158.853-.353l-.206.206c.195-.195.585-.353.853-.353.276 0 .596.193.727.453l.046.094c.126.25.157.662.069.928l-.184.55c-.087.263.073.475.348.475h1.488c.28 0 .664-.158.859-.353l-.206.206c.195-.195.16-.45-.1-.58l-.094-.046A2.6 2.6 0 0 0 15.5 6a.505.505 0 0 1-.5-.5c0-.276.158-.658.353-.853L15.5 4.5V5c0 .276.227.5.5.5h-.5 1c.276 0 .596.193.727.453l.046.094c.126.25.247.673.264.947 0 0 .069.476-.037 1.006s-.226.589-.226.589a1.9 1.9 0 0 0-.274.916v.99a.51.51 0 0 1-.5.505c-.276 0-.404-.193-.273-.453l.046-.094a1.12 1.12 0 0 0 0-.906l-.046-.094C16.1 9.203 16 9.232 16 9.5c0 .276-.096.693-.227.953l-.046.094c-.126.25-.459.453-.727.453-.276 0-.404-.193-.273-.453l.046-.094c.126-.25.227-.685.227-.953 0-.276-.214-.5-.505-.5h-.99a.51.51 0 0 0-.505.5c0 .276-.096.693-.227.953l-.046.094c-.126.25-.459.453-.727.453-.276 0-.404-.193-.273-.453l.046-.094c.126-.25.227-.685.227-.953'
          />
        </g>
      </g>
    </svg>
  )
}
