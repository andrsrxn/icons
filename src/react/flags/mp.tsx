import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagMP: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>MP</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mp-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mp-linearGradient-2'>
          <stop stopColor='#1E8BD6' offset='0%' />
          <stop stopColor='#1074BA' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mp-linearGradient-3'>
          <stop stopColor='#A9A7A9' offset='0%' />
          <stop stopColor='#8C8A8C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mp-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mp-MP'>
          <rect
            id='mp-FlagBackground'
            fill='url(#mp-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mp-Rectangle-2'
            fill='url(#mp-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M10.5,12.5 C13.2614237,12.5 15.5,10.2614237 15.5,7.5 C15.5,4.73857625 13.2614237,2.5 10.5,2.5 C7.73857625,2.5 5.5,4.73857625 5.5,7.5 C5.5,10.2614237 7.73857625,12.5 10.5,12.5 L10.5,12.5 Z M10.5,11.5 C8.290861,11.5 6.5,9.709139 6.5,7.5 C6.5,5.290861 8.290861,3.5 10.5,3.5 C12.709139,3.5 14.5,5.290861 14.5,7.5 C14.5,9.709139 12.709139,11.5 10.5,11.5 L10.5,11.5 Z'
            id='mp-Oval-228'
            fill='url(#mp-linearGradient-1)'
            fillRule='nonzero'
          />
          <path
            d='M8.93768562,5.99703014 C8.9721009,5.4463856 9.44266033,5 9.99895656,5 L11.0010434,5 C11.5527519,5 12.0283148,5.45303631 12.0623144,5.99703014 L12.4376856,12.0029699 C12.4721009,12.5536144 12.0566468,13 11.4906311,13 L9.5093689,13 C8.95190985,13 8.52831477,12.5469637 8.56231438,12.0029699 L8.93768562,5.99703014 Z'
            id='mp-Combined-Shape'
            fill='url(#mp-linearGradient-3)'
          />
          <polygon
            id='mp-Star-8'
            fill='url(#mp-linearGradient-1)'
            points='10.5 9.51500015 8.44275162 10.9815596 9.2018078 8.57180831 7.17130219 7.06844062 9.6976731 7.04569185 10.5 4.6500001 11.3023269 7.04569185 13.8286978 7.06844062 11.7981922 8.57180831 12.5572484 10.9815596'
          />
        </g>
      </g>
    </svg>
  )
}
