import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandGoogleCalendar: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Google Calendar'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    viewBox='0 0 24 24'
    {...props}>
    <g clipPath='url(#clip0_9_2)'>
      <rect width='17.684' height='7.579' x='3.158' fill='#bbe2fe' rx='3.158' />
      <path
        fill='url(#paint0_linear_9_2)'
        d='M19.648 1.895H4.352A3.79 3.79 0 0 0 .6 6.205l.98 7.058h20.84l.98-7.057a3.79 3.79 0 0 0-3.753-4.311'
      />
      <path
        fill='url(#paint1_linear_9_2)'
        d='M19.648 1.895H4.352A3.79 3.79 0 0 0 .6 6.205l.98 7.058h20.84l.98-7.057a3.79 3.79 0 0 0-3.753-4.311'
      />
      <path
        fill='url(#paint2_linear_9_2)'
        d='m23.362 19.66-.94-6.397H1.578l-.94 6.396A3.79 3.79 0 0 0 4.387 24h15.225a3.79 3.79 0 0 0 3.749-4.34'
      />
      <path
        fill='#fff'
        d='M8.567 18.934q-.902 0-1.546-.288a3.3 3.3 0 0 1-1.107-.81 4 4 0 0 1-.697-1.115l-.227-.583 1.258-.5.174.432q.174.424.478.795.303.372.712.576.41.197.993.197.954 0 1.553-.583.6-.591.6-1.433 0-.946-.63-1.455-.621-.515-1.614-.515h-.88V12.37h.789q.879 0 1.417-.478.538-.485.538-1.326 0-.75-.508-1.22-.5-.477-1.356-.478-.454 0-.804.16a1.8 1.8 0 0 0-.598.432 3 3 0 0 0-.425.629l-.174.34-1.25-.515.234-.5a3.4 3.4 0 0 1 .675-.94 3 3 0 0 1 1.023-.659q.584-.235 1.372-.235 1.523 0 2.357.811.84.81.841 2.092 0 .924-.424 1.546-.425.614-1.205.872v.053q.955.31 1.485 1t.53 1.728q0 1.38-1 2.32-1 .93-2.584.931m7.045-.25v-8.95l-1.978 1.447-.713-1.046 3.184-2.304h.879v10.853z'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_9_2'
        x1='12'
        x2='12'
        y1='1.895'
        y2='13.263'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#a5a7fe' />
        <stop offset='.505' stopColor='#3f92ff' />
        <stop offset='1' stopColor='#3b90fb' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_9_2'
        x1='24.556'
        x2='-.556'
        y1='7.494'
        y2='7.494'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#4091fe' />
        <stop offset='.194' stopColor='#4091fe' stopOpacity='0' />
        <stop offset='.81' stopColor='#4091fe' stopOpacity='0' />
        <stop offset='1' stopColor='#4091fe' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_9_2'
        x1='12'
        x2='12'
        y1='13.263'
        y2='24'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#489cfd' />
        <stop offset='1' stopColor='#308bfe' />
      </linearGradient>
      <clipPath id='clip0_9_2'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
)
