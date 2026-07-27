import type { SVGProps } from 'react'

export const IconFlagVE = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>VE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ve-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ve-linearGradient-2'>
          <stop stopColor='#063191' offset='0%' />
          <stop stopColor='#03287C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ve-linearGradient-3'>
          <stop stopColor='#E2213B' offset='0%' />
          <stop stopColor='#CD1931' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ve-linearGradient-4'>
          <stop stopColor='#FFD044' offset='0%' />
          <stop stopColor='#FFCB2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ve-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ve-VE'>
          <rect
            id='ve-FlagBackground'
            fill='url(#ve-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ve-Rectangle-2-Copy-4'
            fill='url(#ve-linearGradient-2)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='ve-Rectangle-2'
            fill='url(#ve-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <path
            d='M10.5,7 C10.2238576,7 10,6.77614237 10,6.5 C10,6.22385763 10.2238576,6 10.5,6 C10.7761424,6 11,6.22385763 11,6.5 C11,6.77614237 10.7761424,7 10.5,7 Z M8.5,7.5 C8.22385763,7.5 8,7.27614237 8,7 C8,6.72385763 8.22385763,6.5 8.5,6.5 C8.77614237,6.5 9,6.72385763 9,7 C9,7.27614237 8.77614237,7.5 8.5,7.5 Z M12.5,7.5 C12.2238576,7.5 12,7.27614237 12,7 C12,6.72385763 12.2238576,6.5 12.5,6.5 C12.7761424,6.5 13,6.72385763 13,7 C13,7.27614237 12.7761424,7.5 12.5,7.5 Z M7.5,9 C7.22385763,9 7,8.77614237 7,8.5 C7,8.22385763 7.22385763,8 7.5,8 C7.77614237,8 8,8.22385763 8,8.5 C8,8.77614237 7.77614237,9 7.5,9 Z M13.5,9 C13.2238576,9 13,8.77614237 13,8.5 C13,8.22385763 13.2238576,8 13.5,8 C13.7761424,8 14,8.22385763 14,8.5 C14,8.77614237 13.7761424,9 13.5,9 Z'
            id='ve-Oval-61'
            fill='url(#ve-linearGradient-1)'
          />
          <rect
            id='ve-Rectangle-2'
            fill='url(#ve-linearGradient-4)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
