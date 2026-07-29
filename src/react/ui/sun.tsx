import type { Icon } from '../types'

export const IconSun: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='sun'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.77 12a3.77 3.77 0 1 1-7.54 0 3.77 3.77 0 0 1 7.54 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m16.703 7.297 1.38-1.38M12 5.348V3.396M7.297 7.297l-1.38-1.38M5.348 12H3.396M12 20.604V18.65m-6.084-.567 1.381-1.381m10.787 1.38-1.381-1.38m3.9-4.703h-1.952m-2.88 0a3.77 3.77 0 1 1-7.542 0 3.77 3.77 0 0 1 7.542 0Z'
      />
    </svg>
  )
}
