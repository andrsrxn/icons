import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandNextJS: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='NextJS'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    role='img'
    viewBox='0 0 180 180'
    {...props}>
    <mask
      id='mask0_408_139'
      height={180}
      style={{
        maskType: 'alpha',
      }}
      width={180}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'>
      <circle fill='#000' cx={90} cy={90} r={90} />
    </mask>
    <g mask='url(#mask0_408_139)'>
      <circle fill='#000' stroke='#fff' cx={90} cy={90} r={87} strokeWidth={6} />
      <path
        fill='url(#paint0_linear_408_139)'
        d='M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325'
      />
      <rect fill='url(#paint1_linear_408_139)' height={72} width={12} x={115} y={54} />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_408_139'
        x1={109}
        x2={144.5}
        y1={116.5}
        y2={160.5}
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#fff' />
        <stop offset={1} stopOpacity={0} stopColor='#fff' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_408_139'
        x1={121}
        x2={120.799}
        y1={54}
        y2={106.875}
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#fff' />
        <stop offset={1} stopOpacity={0} stopColor='#fff' />
      </linearGradient>
    </defs>
  </svg>
)
