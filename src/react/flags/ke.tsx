import type { SVGProps } from 'react'

export const IconFlagKE = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>KE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ke-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ke-linearGradient-2'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ke-linearGradient-3'>
          <stop stopColor='#018301' offset='0%' />
          <stop stopColor='#006700' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ke-linearGradient-4'>
          <stop stopColor='#DC0808' offset='0%' />
          <stop stopColor='#BC0000' offset='100%' />
        </linearGradient>
        <path
          d='M2.5,10.5 C3.5,10.5 5,8.53756612 5,5.5 C5,2.46243388 3.5,0.5 2.5,0.5 C1.5,0.5 0,2.46243388 0,5.5 C0,8.53756612 1.5,10.5 2.5,10.5 Z'
          id='ke-path-5'
        />
      </defs>
      <g id='ke-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ke-KE'>
          <rect
            id='ke-FlagBackground'
            fill='url(#ke-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ke-Rectangle-2'
            fill='url(#ke-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='4'
          />
          <rect
            id='ke-Rectangle-2'
            fill='url(#ke-linearGradient-3)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <rect
            id='ke-Rectangle-2'
            fill='url(#ke-linearGradient-1)'
            x='0'
            y='4'
            width='21'
            height='7'
          />
          <rect
            id='ke-Rectangle-2-Copy-4'
            fill='url(#ke-linearGradient-4)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <g id='ke-Oval-225' transform='translate(8.000000, 2.000000)'>
            <mask id='ke-mask-6' fill='white'>
              <use xlinkHref='#ke-path-5' />
            </mask>
            <use id='ke-Mask' fill='#BC0000' xlinkHref='#ke-path-5' />
            <ellipse
              id='ke-Mask-Copy'
              fill='url(#ke-linearGradient-2)'
              mask='url(#ke-mask-6)'
              cx='-1.5'
              cy='5.5'
              rx='2.5'
              ry='5.5'
            />
            <ellipse
              id='ke-Mask-Copy-2'
              fill='url(#ke-linearGradient-2)'
              mask='url(#ke-mask-6)'
              cx='6.5'
              cy='5.5'
              rx='2.5'
              ry='5.5'
            />
            <path
              d='M2.5,7 C2.22385763,7 2,6.32842712 2,5.5 C2,4.67157288 2.22385763,4 2.5,4 C2.77614237,4 3,4.67157288 3,5.5 C3,6.32842712 2.77614237,7 2.5,7 Z M2.5,4 C2.22385763,4 2,3.1045695 2,2 C2,0.8954305 2.22385763,0 2.5,0 C2.77614237,0 3,0.8954305 3,2 C3,3.1045695 2.77614237,4 2.5,4 Z M2.5,11 C2.22385763,11 2,10.1045695 2,9 C2,7.8954305 2.22385763,7 2.5,7 C2.77614237,7 3,7.8954305 3,9 C3,10.1045695 2.77614237,11 2.5,11 Z'
              id='ke-Oval-228'
              fill='url(#ke-linearGradient-1)'
              mask='url(#ke-mask-6)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
