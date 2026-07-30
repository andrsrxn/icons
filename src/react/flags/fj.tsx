import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagFJ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
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
      <title>FJ</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fj-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fj-linearGradient-2'>
          <stop stopColor='#79CFF6' offset='0%' />
          <stop stopColor='#68BFE6' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fj-linearGradient-3'>
          <stop stopColor='#042C90' offset='0%' />
          <stop stopColor='#00247E' offset='100%' />
        </linearGradient>
        <path d='M0,3.5 L0,0 L5,0 L5,3.5 C5,6 2.5,7 2.5,7 C2.5,7 0,6 0,3.5 Z' id='fj-path-4' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fj-linearGradient-6'>
          <stop stopColor='#EB1D43' offset='0%' />
          <stop stopColor='#D21034' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fj-linearGradient-7'>
          <stop stopColor='#DB1E36' offset='0%' />
          <stop stopColor='#D51931' offset='100%' />
        </linearGradient>
        <path
          d='M3.5,3 L0,0 L0.5,0 L4,2.5 L5,2.5 L9,0 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L0,7 L0,6.5 L3.5,4 L3.5,3 Z'
          id='fj-path-8'
        />
      </defs>
      <g id='fj-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='fj-FJ'>
          <rect
            id='fj-FlagBackground'
            fill='url(#fj-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='fj-Mask-Copy'
            fill='url(#fj-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='fj-Rectangle-1115'
            fill='url(#fj-linearGradient-3)'
            x='0'
            y='0'
            width='9'
            height='7'
          />
          <g id='fj-Rectangle-1105' transform='translate(13.000000, 4.000000)'>
            <mask id='fj-mask-5' fill='white'>
              <use xlinkHref='#fj-path-4' />
            </mask>
            <use id='fj-Mask' fill='url(#fj-linearGradient-1)' xlinkHref='#fj-path-4' />
            <path
              d='M1,2.5 C0.723857625,2.5 0.5,2.27614237 0.5,2 C0.5,1.72385763 0.723857625,1.5 1,1.5 C1.27614237,1.5 1.5,1.72385763 1.5,2 C1.5,2.27614237 1.27614237,2.5 1,2.5 Z M4,2.5 C3.72385763,2.5 3.5,2.27614237 3.5,2 C3.5,1.72385763 3.72385763,1.5 4,1.5 C4.27614237,1.5 4.5,1.72385763 4.5,2 C4.5,2.27614237 4.27614237,2.5 4,2.5 Z'
              id='fj-Oval-177'
              fill='#2A915C'
              mask='url(#fj-mask-5)'
            />
            <polygon
              id='fj-Rectangle-1106'
              fill='url(#fj-linearGradient-6)'
              mask='url(#fj-mask-5)'
              points='1.37667655e-13 0 5 0 5 1 3 1 3 3 5 3 5 4 3 4 3 7 2 7 2 4 1.37667655e-13 4 1.37667655e-13 3 2 3 2 1 1.37667655e-13 1'
            />
          </g>
          <g id='fj-Rectangle-36'>
            <use fill='url(#fj-linearGradient-7)' fillRule='evenodd' xlinkHref='#fj-path-8' />
            <path
              stroke='#FFFFFF'
              strokeWidth='0.5'
              d='M3.25,3.11498373 L-0.675814352,-0.25 L0.5,-0.25 L0.645309548,-0.203433368 L4.08011626,2.25 L4.92830094,2.25 L9.25,-0.45106191 L9.25,0.25 C9.25,0.471733776 9.12210758,0.720006202 8.93685017,0.852332923 L5.75,3.12865447 L5.75,3.88501627 L8.97452264,6.64889282 C9.25702778,6.89104008 9.11322839,7.25 8.75,7.25 C8.55691391,7.25 8.30820236,7.17022759 8.14623107,7.05453381 L4.91988374,4.75 L4.07169906,4.75 L-0.25,7.45106191 L-0.25,6.37134553 L3.25,3.87134553 L3.25,3.11498373 Z'
            />
          </g>
          <path
            d='M0,2.5 L0,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,0 L3.5,0 L3.5,2.5 L0,2.5 Z'
            id='fj-Rectangle-2'
            fill='url(#fj-linearGradient-1)'
          />
          <polygon
            id='fj-Rectangle-36'
            fill='url(#fj-linearGradient-7)'
            points='0 3 4 3 4 2.5 4 0 5 0 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 0 4'
          />
        </g>
      </g>
    </svg>
  )
}
