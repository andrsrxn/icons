import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagZM: FlagIcon = ({
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
      <title>ZM</title>

      <defs>
        <linearGradient id='zm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='zm-b' x1='50%' x2='50%' y1='100%' y2='0%'>
          <stop offset='0%' stopColor='#2a8815' />
          <stop offset='100%' stopColor='#35a51d' />
        </linearGradient>
        <linearGradient id='zm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ef8a34' />
          <stop offset='100%' stopColor='#ec7e21' />
        </linearGradient>
        <linearGradient id='zm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f48d36' />
          <stop offset='100%' stopColor='#ec7e21' />
        </linearGradient>
        <linearGradient id='zm-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='zm-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ec322b' />
          <stop offset='100%' stopColor='#db261f' />
        </linearGradient>
        <clipPath id='zm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#zm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#zm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#zm-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#zm-c)'
            d='M16.196 3.624s-.403.153-.834 0c-.342-.122-.687-.534-.97-.677-.164-.083.14-.478-.184-.371-.325.106-.855-.39-.855-.39s-.548-.667.259-.667 2.51.58 2.51.58.063-.3.202-.438.242-.265.47-.23c.227.034.353.355.353.355l-.354.135v.266s2.362-.724 2.92-.668.109.669-.228 1.057c-.13.15-.556.456-.815.21-.259-.245-.163.266-.43.43-.438.27-.602.516-.753.587-.15.072-.479 0-.479 0l.096.247s.027.296-.096.414-.208.202-.508.166c-.3-.035-.441.04-.541-.29s.237-.716.237-.716m.247-.342v.772l.339-.284z'
          />
          <path fill='url(#zm-d)' d='M18 6h3v9h-3z' />
          <path fill='url(#zm-e)' d='M15 6h3v9h-3z' />
          <path fill='url(#zm-f)' d='M12 6h3v9h-3z' />
        </g>
      </g>
    </svg>
  )
}
