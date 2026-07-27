import type { SVGProps } from 'react'

export const IconFlagAD = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>AD</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ad-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ad-linearGradient-2'>
          <stop stopColor='#1537D1' offset='0%' />
          <stop stopColor='#0522A5' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ad-linearGradient-3'>
          <stop stopColor='#EA3058' offset='0%' />
          <stop stopColor='#CE173E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ad-linearGradient-4'>
          <stop stopColor='#FFCF3C' offset='0%' />
          <stop stopColor='#FECB2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ad-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ad-AD'>
          <rect
            id='ad-FlagBackground'
            fill='url(#ad-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ad-Mask-Copy'
            fill='url(#ad-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='ad-Mask' fill='url(#ad-linearGradient-3)' x='10' y='0' width='11' height='15' />
          <rect
            id='ad-Rectangle-2'
            fill='url(#ad-linearGradient-4)'
            x='7'
            y='0'
            width='7'
            height='15'
          />
          <polygon
            id='ad-Rectangle-139-Copy'
            fill='#FFEDB1'
            points='9.5 6.5 10.5 6.5 10.5 7 9.5 7'
          />
          <path
            d='M9.6650265,7.9595207 C9.68963036,8.25476702 9.9569379,8.5 10.2524408,8.5 L10.7475592,8.5 C11.042238,8.5 11.3105295,8.2528489 11.3349735,7.9595207 L11.4566002,6.5 L9.54339977,6.5 L9.6650265,7.9595207 Z M9.04128242,6.49538898 C9.01848277,6.2217932 9.2157526,6 9.49538898,6 L11.504611,6 C11.7782068,6 11.9820206,6.2157526 11.9587176,6.49538898 L11.8332464,8.00104344 C11.7872707,8.55275191 11.3030501,9 10.7475592,9 L10.2524408,9 C9.69880801,9 9.21311164,8.55733967 9.16675362,8.00104344 L9.04128242,6.49538898 Z'
            id='ad-Rectangle-137'
            fill='#D32E28'
            fillRule='nonzero'
          />
          <polygon
            id='ad-Rectangle-139'
            fill='#D32E28'
            points='9.5 7 11.5 7 11.5 7.5 11 7.5 10 7.5 9.5 7.5'
          />
        </g>
      </g>
    </svg>
  )
}
