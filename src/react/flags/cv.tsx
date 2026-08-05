import type { FlagIcon } from './types'

export const IconFlagCV: FlagIcon = ({
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
  const titleText = title ?? 'CV'

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
        <linearGradient id='cv-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='cv-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c49ae' />
          <stop offset='100%' stopColor='#063b91' />
        </linearGradient>
        <linearGradient id='cv-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#cd232e' />
          <stop offset='100%' stopColor='#cd232e' />
        </linearGradient>
        <clipPath id='cv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cv-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#cv-a)' d='M0 0h21v15H0z' />
          <path fill='url(#cv-b)' d='M0 0h21v8H0z' />
          <path fill='url(#cv-b)' d='M0 11h21v4H0z' />
          <path fill='url(#cv-a)' d='M0 8h21v3H0z' />
          <path fill='url(#cv-c)' d='M0 9h21v1H0z' />
          <path
            fill='#f7d035'
            fillRule='nonzero'
            d='M8 13a.5.5 0 1 1 0-1q.428 0 .822-.138a.5.5 0 0 1 .329.944A3.5 3.5 0 0 1 8 13m2.651-1.215a3.5 3.5 0 0 0 .605-.998.5.5 0 0 0-.93-.368 2.5 2.5 0 0 1-.432.713.5.5 0 0 0 .757.653m.817-2.759a3.5 3.5 0 0 0-.348-1.114.5.5 0 0 0-.891.454c.126.248.21.516.248.794a.5.5 0 1 0 .991-.134M9.857 6.533a3.5 3.5 0 0 0-1.08-.446.5.5 0 1 0-.22.975q.411.095.769.318a.5.5 0 1 0 .53-.847m-2.8-.405a3.5 3.5 0 0 0-1.055.498.5.5 0 1 0 .571.82c.23-.159.484-.28.753-.354a.5.5 0 1 0-.268-.964M4.85 7.973a3.5 3.5 0 0 0-.327 1.121.5.5 0 1 0 .994.115 2.5 2.5 0 0 1 .232-.8.5.5 0 1 0-.9-.436m-.06 2.925c.157.359.373.689.638.976a.5.5 0 1 0 .735-.678 2.5 2.5 0 0 1-.456-.698.5.5 0 1 0-.917.4m2.146 1.937a.5.5 0 1 1 .304-.953q.345.11.714.118a.5.5 0 0 1-.018 1 3.5 3.5 0 0 1-1-.165'
          />
        </g>
      </g>
    </svg>
  )
}
