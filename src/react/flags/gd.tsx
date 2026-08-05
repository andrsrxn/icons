import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGD: FlagIcon = ({
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
      <title>GD</title>

      <defs>
        <linearGradient id='gd-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gd-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e42235' />
          <stop offset='100%' stopColor='#ce1225' />
        </linearGradient>
        <linearGradient id='gd-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#079b77' />
          <stop offset='100%' stopColor='#007b5d' />
        </linearGradient>
        <linearGradient id='gd-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd938' />
          <stop offset='100%' stopColor='#fdd117' />
        </linearGradient>
        <linearGradient id='gd-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd93b' />
          <stop offset='100%' stopColor='#fdd117' />
        </linearGradient>
        <linearGradient id='gd-h' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e21c30' />
          <stop offset='100%' stopColor='#ce1225' />
        </linearGradient>
        <path id='gd-c' d='M0 0h17v11H0z' />
        <clipPath id='gd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gd-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gd-a)' d='M0 0h21v15H0z' />
          <path fill='url(#gd-b)' d='M0 0h21v15H0z' />
          <g transform='translate(2 2)'>
            <mask id='gd-f' fill='#fff'>
              <use xlinkHref='#gd-c' />
            </mask>
            <use xlinkHref='#gd-c' fill='url(#gd-d)' />
            <path
              fill='url(#gd-e)'
              d='M1.295 5.599c.283.453.69.752 1.068.829.209.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411-.439-.703-.456-.239-1.643-.742.124.72-.492 1.1-.053 1.802'
              mask='url(#gd-f)'
            />
            <path fill='url(#gd-g)' d='M0 0h17L8.5 5.5zm0 11 8.5-5.5L17 11z' mask='url(#gd-f)' />
            <circle cx='8.5' cy='5.5' r='2.5' fill='url(#gd-h)' mask='url(#gd-f)' />
            <path
              fill='url(#gd-e)'
              d='m8.5 6.271-1.176.847.442-1.38-1.168-.856 1.449-.006L8.5 3.5l.453 1.376 1.45.006-1.17.856.443 1.38z'
              mask='url(#gd-f)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
