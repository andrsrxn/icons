import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandSVG: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='SVG'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 300 300'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <g clipPath='url(#clip0_231_2)'>
      <path
        fill='#ffb13b'
        d='m169.423 196.892 39.753 39.753a27.47 27.47 0 0 0 32.826 26.94 27.467 27.467 0 0 0-5.359-54.408l-39.755-39.755h56.222a27.468 27.468 0 1 0 0-38.845h-56.218l39.751-39.751a27.469 27.469 0 1 0-27.467-27.468l-39.753 39.753v-56.22a27.466 27.466 0 0 0-4.162-42.262 27.468 27.468 0 0 0-34.682 42.262v56.221L90.825 63.359a27.468 27.468 0 1 0-27.467 27.468l39.75 39.75H46.892a27.47 27.47 0 0 0-42.262 4.162 27.468 27.468 0 0 0 42.262 34.683h56.22l-39.754 39.754a27.47 27.47 0 0 0-19.423 46.891 27.47 27.47 0 0 0 29.934 5.954 27.47 27.47 0 0 0 16.956-25.377l39.754-39.754v56.219a27.46 27.46 0 0 0-5.955 29.934 27.46 27.46 0 0 0 25.377 16.956 27.467 27.467 0 0 0 19.422-46.89z'
      />
    </g>
    <defs>
      <clipPath id='clip0_231_2'>
        <path fill='#fff' d='M0 0h300v300H0z' />
      </clipPath>
    </defs>
  </svg>
)
