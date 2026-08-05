import type { FlagIcon } from './types'

export const IconFlagKR: FlagIcon = ({
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
  const titleText = title ?? 'KR'

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
        <linearGradient id='kr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='kr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e01b41' />
          <stop offset='100%' stopColor='#c51335' />
        </linearGradient>
        <linearGradient id='kr-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0e4b9c' />
          <stop offset='100%' stopColor='#053677' />
        </linearGradient>
        <linearGradient id='kr-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <circle id='kr-b' cx='3.5' cy='3.5' r='3.5' />
        <clipPath id='kr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#kr-a)' d='M0 0h21v15H0z' />
          <g transform='translate(7 4)'>
            <mask id='kr-e' fill='#fff'>
              <use xlinkHref='#kr-b' />
            </mask>
            <use xlinkHref='#kr-b' fill='url(#kr-c)' />
            <path
              fill='url(#kr-d)'
              d='M0 4c1 .937 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H0s-1-3.937 0-3'
              mask='url(#kr-e)'
            />
          </g>
          <path
            fill='url(#kr-f)'
            d='M14.208 3.922a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095zm1.3-.75a.25.25 0 0 1 .09-.347l.429-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095zm-12.125 7a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095zm1.299-.75a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095zm10.77-.5a.25.25 0 0 1 .347-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 0 1-.346.095l-.43-.248a.254.254 0 0 1-.09-.347zm1.3.75a.25.25 0 0 1 .346-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 0 1-.346.095l-.43-.248a.254.254 0 0 1-.09-.347zm-12.125-7a.25.25 0 0 1 .346-.095l.43.248c.12.07.16.225.09.347L4.249 5.328a.25.25 0 0 1-.347.095l-.429-.248a.254.254 0 0 1-.09-.347zm1.299.75a.25.25 0 0 1 .346-.095l.43.248c.12.07.16.225.09.347L5.548 6.078a.25.25 0 0 1-.347.095l-.429-.248a.254.254 0 0 1-.09-.347z'
            opacity='.75'
          />
        </g>
      </g>
    </svg>
  )
}
