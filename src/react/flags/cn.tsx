import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCN: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>CN</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cn-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cn-linearGradient-2'>
          <stop stopColor='#F1361D' offset='0%' />
          <stop stopColor='#DF2910' offset='100%' />
        </linearGradient>
        <linearGradient
          x1='37.0590477%'
          y1='1.70370869%'
          x2='62.9409523%'
          y2='98.2962913%'
          id='cn-linearGradient-3'>
          <stop stopColor='#FFDC42' offset='0%' />
          <stop stopColor='#FDD217' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cn-linearGradient-4'>
          <stop stopColor='#FFDC42' offset='0%' />
          <stop stopColor='#FDD217' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cn-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cn-CN'>
          <rect
            id='cn-FlagBackground'
            fill='url(#cn-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='cn-Mask' fill='url(#cn-linearGradient-2)' x='0' y='0' width='21' height='15' />
          <path
            d='M10.1294095,4.48296291 L9.5,4.8660254 L9.51703709,4.12940952 L9.1339746,3.5 L9.87059048,3.51703709 L10.5,3.1339746 L10.4829629,3.87059048 L10.8660254,4.5 L10.1294095,4.48296291 Z M8.28081443,2.44939702 L7.55448142,2.32556815 L8.05060298,1.78081443 L8.17443185,1.05448142 L8.71918557,1.55060298 L9.44551858,1.67443185 L8.94939702,2.21918557 L8.82556815,2.94551858 L8.28081443,2.44939702 Z M8.64618585,8.97815238 L8.03052844,9.38294759 L8.02184762,8.64618585 L7.61705241,8.03052844 L8.35381415,8.02184762 L8.96947156,7.61705241 L8.97815238,8.35381415 L9.38294759,8.96947156 L8.64618585,8.97815238 Z M9.91317591,6.99240388 L9.18084796,7.07357644 L9.50759612,6.41317591 L9.42642356,5.68084796 L10.0868241,6.00759612 L10.819152,5.92642356 L10.4924039,6.58682409 L10.5735764,7.31915204 L9.91317591,6.99240388 Z'
            id='cn-Star-2'
            fill='url(#cn-linearGradient-3)'
          />
          <polygon
            id='cn-Star-8'
            fill='url(#cn-linearGradient-4)'
            points='5 6.17000005 3.23664424 7.42705098 3.88726383 5.3615499 2.14683045 4.07294902 4.31229123 4.05345008 5 2 5.68770877 4.05345008 7.85316955 4.07294902 6.11273617 5.3615499 6.76335576 7.42705098'
          />
        </g>
      </g>
    </svg>
  )
}
