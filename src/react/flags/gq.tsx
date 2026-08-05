import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGQ: FlagIcon = ({
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
      <title>GQ</title>

      <defs>
        <linearGradient id='gq-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gq-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ec3938' />
          <stop offset='100%' stopColor='#e12524' />
        </linearGradient>
        <linearGradient id='gq-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#51b422' />
          <stop offset='100%' stopColor='#429919' />
        </linearGradient>
        <linearGradient id='gq-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#258de7' />
          <stop offset='100%' stopColor='#1276cc' />
        </linearGradient>
        <clipPath id='gq-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gq-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gq-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gq-b)' d='M0 10h21v5H0z' />
          <path fill='url(#gq-c)' d='M0 0h21v5H0z' />
          <path fill='url(#gq-a)' d='M0 5h21v5H0z' />
          <path
            fill='#159940'
            d='M10.066 8.932a.73.73 0 0 0 .175-.425l.008-1.264A.25.25 0 0 0 9.996 7h-.242c-.14 0-.176-.078-.08-.174l.652-.652a.247.247 0 0 1 .348 0l.652.652c.096.096.057.174-.08.174h-.242a.253.253 0 0 0-.254.243v1.264c0 .134.08.322.17.414l-.09-.092c.093.094.063.171-.082.171h-.496c-.139 0-.176-.08-.078-.182z'
          />
          <path fill='url(#gq-d)' d='m0 0 7 7.5L0 15z' />
        </g>
      </g>
    </svg>
  )
}
