import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandBetterAuth: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Better Auth'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    role='img'
    fill='none'
    viewBox='0 0 500 500'
    {...props}>
    <path fill='var(--ui-icon-fill-monochrome)' d='M0 0h500v500H0z' />
    <path
      fill='var(--ui-icon-fill-monochrome-inverse)'
      d='M69 121h86.988v259H69zM337.575 121H430v259h-92.425z'
    />
    <path
      fill='var(--ui-icon-fill-monochrome-inverse)'
      d='M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z'
    />
    <path
      fill='var(--ui-icon-fill-monochrome-inverse)'
      d='M252.762 204.455v92.089h-96.774v-92.089z'
    />
  </svg>
)
