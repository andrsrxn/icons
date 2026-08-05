import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagEG: FlagIcon = ({
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
      <title>EG</title>

      <defs>
        <linearGradient id='eg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='eg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e41d33' />
          <stop offset='100%' stopColor='#ce1126' />
        </linearGradient>
        <linearGradient id='eg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <clipPath id='eg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#eg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#eg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#eg-b)' d='M0 0h21v5H0z' />
          <path fill='url(#eg-c)' d='M0 10h21v5H0z' />
          <path fill='url(#eg-a)' d='M0 5h21v5H0z' />
          <path
            fill='#f4b32e'
            fillOpacity='.25'
            d='M8 6.495C8 6.222 8.232 6 8.5 6h.248c.139 0 .298.092.368.232L9.5 7s.55-1 1-1c.5 0 1 1 1 1l.384-.768A.45.45 0 0 1 12.252 6h.248c.276 0 .5.216.5.495v2.01c0 .273-.184.372-.41.222L11.5 8H11v.5c0 .276-.232.5-.5.5a.505.505 0 0 1-.5-.5V8h-.5l-1.09.727c-.226.15-.41.057-.41-.222z'
          />
          <path
            fill='#c6a846'
            fillRule='nonzero'
            d='M12.5 8.066V6.5h-.191l-.54 1.079zM8.691 6.5h-.19L8.5 6.495v1.57l.73-.486zm1.809 1v1zh.691l-.138-.276c-.05-.1-.146-.265-.266-.424-.12-.16-.23-.26-.271-.29a1.4 1.4 0 0 0-.29.296c-.126.163-.23.33-.288.435l-.142.259zm.874-.724c.08.13.126.224.126.224l.112-.224s.231-.195.157-.313l.115-.231A.45.45 0 0 1 12.252 6h.248c.276 0 .5.216.5.495v2.01c0 .273-.184.372-.41.222L11.5 8H11v.5c0 .276-.232.5-.5.5a.505.505 0 0 1-.5-.5V8h-.5l-1.09.727c-.226.15-.41.057-.41-.222v-2.01C8 6.222 8.232 6 8.5 6h.248c.139 0 .298.092.368.232l.12.24c-.071.108.147.293.147.293L9.5 7s.053-.097.14-.23l.178-.253c.195-.255.451-.517.682-.517.25 0 .502.252.69.503z'
          />
        </g>
      </g>
    </svg>
  )
}
