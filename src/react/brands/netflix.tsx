import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandNetflix: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Netflix'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 551.111 1000'
    {...props}>
    <defs id='netflix_icon__defs4'>
      <linearGradient id='netflix_icon__linearGradient35887'>
        <stop id='netflix_icon__stop35883' offset='0' stopColor='#b1060f' stopOpacity='1' />
        <stop id='netflix_icon__stop36053' offset='.625' stopColor='#7b010c' stopOpacity='1' />
        <stop id='netflix_icon__stop35885' offset='1' stopColor='#b1060f' stopOpacity='0' />
      </linearGradient>
      <linearGradient id='netflix_icon__linearGradient19332'>
        <stop id='netflix_icon__stop19328' offset='0' stopColor='#b1060f' stopOpacity='1' />
        <stop id='netflix_icon__stop19560' offset='.546' stopColor='#7b010c' stopOpacity='1' />
        <stop id='netflix_icon__stop19330' offset='1' stopColor='#e50914' stopOpacity='0' />
      </linearGradient>
      <linearGradient
        xlinkHref='#netflix_icon__linearGradient19332'
        id='netflix_icon__linearGradient13368'
        x1='78.234'
        x2='221.663'
        y1='423.767'
        y2='365.092'
        gradientUnits='userSpaceOnUse'
      />
      <linearGradient
        xlinkHref='#netflix_icon__linearGradient35887'
        id='netflix_icon__linearGradient35889'
        x1='456.365'
        x2='309.676'
        y1='521.56'
        y2='583.495'
        gradientUnits='userSpaceOnUse'
      />
    </defs>
    <path
      id='netflix_icon__path6055'
      d='M-1.152-1.152 2.305 1002.67c73.273-14.111 130.892-12.569 195.924-18.44V0Z'
      fill='url(#netflix_icon__linearGradient13368)'
      stroke='none'
      strokeWidth='1px'
      strokeLinecap='butt'
      strokeLinejoin='miter'
      strokeOpacity='1'
      fillOpacity='1'
    />
    <path
      id='netflix_icon__path678'
      d='M353.816 0h199.381l2.305 1000.365-202.839-33.422z'
      fill='url(#netflix_icon__linearGradient35889)'
      stroke='none'
      strokeWidth='1px'
      strokeLinecap='butt'
      strokeLinejoin='miter'
      strokeOpacity='1'
      fillOpacity='1'
    />
    <path
      id='netflix_icon__path362'
      d='M1.152 0c4.61 11.525 345.749 981.925 345.749 981.925 56.056-.4 131.219 8.754 205.144 17.288L197.077 0Z'
      fill='#e50914'
      fillOpacity='1'
      stroke='none'
      strokeWidth='1px'
      strokeLinecap='butt'
      strokeLinejoin='miter'
      strokeOpacity='1'
    />
  </svg>
)
