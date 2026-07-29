import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandBiome: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='Biome'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 64 55.425'
    {...props}>
    <rect id='biomejs__background' width='100%' height='100%' fill='none' />
    <path
      id='biomejs__emblem'
      fill='#60a5fa'
      strokeLinecap='square'
      strokeWidth='4.877'
      d='M32 0 17.745 24.69a32.2 32.2 0 0 1 16.869-.584l4.818 1.137-4.533 19.22-4.825-1.137c-5.93-1.399-11.628 1.716-14.036 6.685l-4.46-2.158c3.404-7.029 11.425-11.285 19.637-9.347l2.26-9.58A27.23 27.23 0 0 0 0 55.424l64 .001z'
      style={{
        paintOrder: 'markers fill stroke',
      }}
    />
  </svg>
)
