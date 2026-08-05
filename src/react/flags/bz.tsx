import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>BZ</title>

      <defs>
        <linearGradient id='bz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#094995' />
          <stop offset='100%' stopColor='#074185' />
        </linearGradient>
        <linearGradient id='bz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d5182f' />
          <stop offset='100%' stopColor='#cc162c' />
        </linearGradient>
        <clipPath id='bz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#bz-b)' d='M0 2h21v11H0z' />
          <path fill='url(#bz-c)' d='M0 0h21v2H0z' />
          <path fill='url(#bz-c)' d='M0 13h21v2H0z' />
          <circle cx='10.5' cy='7.5' r='4.5' fill='url(#bz-a)' />
          <path
            fill='#118014'
            fillRule='nonzero'
            d='M10.5 11a.5.5 0 1 1 0-1q.428 0 .822-.138a.5.5 0 1 1 .329.944A3.5 3.5 0 0 1 10.5 11m2.651-1.215a3.5 3.5 0 0 0 .605-.998.5.5 0 0 0-.93-.368 2.5 2.5 0 0 1-.432.713.5.5 0 0 0 .757.653m.817-2.759a3.5 3.5 0 0 0-.348-1.114.5.5 0 0 0-.891.454c.126.248.21.516.248.794a.5.5 0 1 0 .991-.134m-1.611-2.493a3.5 3.5 0 0 0-1.08-.446.5.5 0 0 0-.22.975c.273.062.532.17.769.318a.5.5 0 1 0 .53-.847m-2.8-.405a3.5 3.5 0 0 0-1.055.498.5.5 0 1 0 .571.82c.23-.159.484-.28.753-.354a.5.5 0 0 0-.268-.964M7.35 5.973a3.5 3.5 0 0 0-.327 1.121.5.5 0 1 0 .994.115 2.5 2.5 0 0 1 .232-.8.5.5 0 1 0-.9-.436m-.06 2.925c.157.359.373.689.638.976a.5.5 0 1 0 .735-.678 2.5 2.5 0 0 1-.456-.698.5.5 0 1 0-.917.4m2.146 1.937a.5.5 0 1 1 .304-.953q.345.11.714.118a.5.5 0 0 1-.018 1 3.5 3.5 0 0 1-1-.165'
          />
        </g>
      </g>
    </svg>
  )
}
