import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGS: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>GS</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-2'>
          <stop stopColor='#07319C' offset='0%' />
          <stop stopColor='#00247E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-3'>
          <stop stopColor='#DB1E36' offset='0%' />
          <stop stopColor='#D51931' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-4'>
          <stop stopColor='#1E1E1E' offset='0%' />
          <stop stopColor='#000000' offset='100%' />
        </linearGradient>
        <ellipse id='gs-path-5' cx='0.5' cy='1.5' rx='1' ry='1.5' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-7'>
          <stop stopColor='#A2ADB0' offset='0%' />
          <stop stopColor='#8B9497' offset='100%' />
        </linearGradient>
        <ellipse id='gs-path-8' cx='0.5' cy='1.5' rx='1' ry='1.5' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-10'>
          <stop stopColor='#4F4F4F' offset='0%' />
          <stop stopColor='#2B2B2B' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-11'>
          <stop stopColor='#FEC241' offset='0%' />
          <stop stopColor='#FEBB2C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-12'>
          <stop stopColor='#A84B14' offset='0%' />
          <stop stopColor='#913F0E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-13'>
          <stop stopColor='#CFB063' offset='0%' />
          <stop stopColor='#BEA157' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-14'>
          <stop stopColor='#2D42FF' offset='0%' />
          <stop stopColor='#0B24FC' offset='100%' />
        </linearGradient>
        <linearGradient x1='0%' y1='0%' x2='100%' y2='50%' id='gs-linearGradient-15'>
          <stop stopColor='#E3DC3D' offset='0%' />
          <stop stopColor='#CFC82A' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-16'>
          <stop stopColor='#7F7D7D' offset='0%' />
          <stop stopColor='#656263' offset='100%' />
        </linearGradient>
        <path
          d='M0.00681795878,0.505912304 C0.00305250412,0.226504654 0.215752602,0 0.495388985,0 L2.50461102,0 C2.7782068,0 3.00310922,0.230712891 3.00681796,0.505912304 L3.03033777,2.25115061 C3.03218993,2.38858633 2.93416692,2.56561279 2.82278051,2.63904572 L1.7277566,3.36095428 C1.61127373,3.43774711 1.41953181,3.43438721 1.31061945,3.36095428 L0.239917656,2.63904572 C0.126022043,2.56225289 0.0322437286,2.39257813 0.0303377719,2.25115061 L0.00681795878,0.505912304 Z'
          id='gs-path-17'
        />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-19'>
          <stop stopColor='#0F8012' offset='0%' />
          <stop stopColor='#0B6A0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gs-linearGradient-20'>
          <stop stopColor='#FFCF44' offset='0%' />
          <stop stopColor='#FCC72E' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gs-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gs-GS'>
          <rect
            id='gs-FlagBackground'
            fill='url(#gs-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='gs-Mask-Copy'
            fill='url(#gs-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z'
            id='gs-Rectangle-36'
            fill='url(#gs-linearGradient-1)'
            fillRule='nonzero'
          />
          <path
            d='M3.5,3 L-4.4408921e-16,-2.13162821e-14 L0.5,-2.13162821e-14 L4,2.5 L5,2.5 L9,-2.13162821e-14 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z'
            id='gs-Rectangle-36'
            fill='url(#gs-linearGradient-3)'
          />
          <path
            d='M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,-2.13162821e-14 L3.5,-2.13162821e-14 L3.5,2.5 L-4.4408921e-16,2.5 Z'
            id='gs-Rectangle-2'
            fill='url(#gs-linearGradient-1)'
          />
          <polygon
            id='gs-Rectangle-36'
            fill='url(#gs-linearGradient-3)'
            points='-4.4408921e-16 3 4 3 4 2.5 4 -2.13162821e-14 5 -2.13162821e-14 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4'
          />
          <g id='gs-Group-2' transform='translate(18.000000, 8.000000)'>
            <mask id='gs-mask-6' fill='white'>
              <use xlinkHref='#gs-path-5' />
            </mask>
            <use id='gs-Oval-13' fill='url(#gs-linearGradient-4)' xlinkHref='#gs-path-5' />
            <ellipse
              id='gs-Oval-13-Copy-2'
              fill='url(#gs-linearGradient-1)'
              mask='url(#gs-mask-6)'
              cx='0'
              cy='2'
              rx='1'
              ry='1.5'
            />
          </g>
          <g id='gs-Group-3' transform='translate(14.000000, 8.000000)'>
            <mask id='gs-mask-9' fill='white'>
              <use xlinkHref='#gs-path-8' />
            </mask>
            <use id='gs-Oval-13-Copy' fill='url(#gs-linearGradient-7)' xlinkHref='#gs-path-8' />
            <ellipse
              id='gs-Oval-13-Copy-3'
              fill='url(#gs-linearGradient-10)'
              mask='url(#gs-mask-9)'
              cx='1'
              cy='2'
              rx='1'
              ry='1.5'
            />
          </g>
          <path
            d='M16.5,12.5 C17.3284271,13 18,12.7761424 18,12.5 C18,12.2238576 17.3284271,12 16.5,12 C15.6715729,12 15,12.2238576 15,12.5 C15,12.7761424 15.6715729,13 16.5,12.5 Z'
            id='gs-Oval-2'
            fill='url(#gs-linearGradient-11)'
          />
          <circle id='gs-Oval' fill='url(#gs-linearGradient-1)' cx='18.5' cy='5.5' r='1' />
          <circle id='gs-Oval-Copy-4' fill='url(#gs-linearGradient-12)' cx='16.5' cy='4.5' r='1' />
          <ellipse
            id='gs-Oval-Copy-8'
            fill='url(#gs-linearGradient-13)'
            cx='16.5'
            cy='3.75'
            rx='1'
            ry='1'
          />
          <circle id='gs-Oval-Copy-6' fill='url(#gs-linearGradient-1)' cx='16.5' cy='11.5' r='1' />
          <circle id='gs-Oval-Copy' fill='url(#gs-linearGradient-1)' cx='14.5' cy='5.5' r='1' />
          <circle id='gs-Oval-Copy-2' fill='url(#gs-linearGradient-14)' cx='15' cy='6.5' r='1' />
          <circle id='gs-Oval-Copy-3' fill='url(#gs-linearGradient-14)' cx='18' cy='6.5' r='1' />
          <ellipse
            id='gs-Oval-Copy-7'
            fill='url(#gs-linearGradient-15)'
            cx='19'
            cy='8'
            rx='1'
            ry='1'
          />
          <path
            d='M16,7.5 L15.5,8 L17.5,8 L17,7.5 L17.5,6 C17.5,6 17.0522847,5 16.5,5 C15.9477153,5 15.5,6 15.5,6 L16,7.5 Z'
            id='gs-Oval-10'
            fill='url(#gs-linearGradient-16)'
          />
          <path
            d='M16.5,6.5 C16.5,6.5 17,6.38807119 17,6.11999989 C17,6.11192881 16.5,6 16.5,6 C16.5,6 16,6.11192881 16,6.11999989 C16,6.38807119 16.5,6.5 16.5,6.5 Z'
            id='gs-Oval-4'
            fill='#5D0543'
          />
          <g id='gs-Group' transform='translate(15.000000, 8.000000)'>
            <mask id='gs-mask-18' fill='white'>
              <use xlinkHref='#gs-path-17' />
            </mask>
            <use id='gs-Rectangle-4' fill='url(#gs-linearGradient-1)' xlinkHref='#gs-path-17' />
            <circle
              id='gs-Oval-Copy-3'
              fill='#225DA4'
              mask='url(#gs-mask-18)'
              cx='2.5'
              cy='2.5'
              r='1'
            />
            <circle
              id='gs-Oval-Copy-5'
              fill='#225DA4'
              mask='url(#gs-mask-18)'
              cx='0.5'
              cy='1.5'
              r='1'
            />
            <polygon
              id='gs-Rectangle'
              fill='url(#gs-linearGradient-19)'
              mask='url(#gs-mask-18)'
              points='0 0 3 0 1.5 3'
            />
            <ellipse
              id='gs-Oval-3'
              fill='url(#gs-linearGradient-20)'
              mask='url(#gs-mask-18)'
              cx='1.5'
              cy='1.5'
              rx='1'
              ry='1'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
