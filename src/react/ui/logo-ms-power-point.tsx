import type { Icon } from './types'

export const IconLogoMsPowerPoint: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-ms-power-point'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.382 7.363H4.77a.662.662 0 0 0-.663.662v7.95c0 .366.297.662.663.662h8.612a.662.662 0 0 0 .662-.662v-7.95a.662.662 0 0 0-.662-.662Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.332 16.637v3.313m0-15.9v3.313M13.657 12h6.625m-12.587.662H9.02a1.325 1.325 0 0 0 0-2.65H7.695v2.65Zm0 0v1.325M5.873 7.363a7.95 7.95 0 1 1 0 9.274m-1.49-9.274h8.612c.366 0 .662.296.662.662v7.95a.662.662 0 0 1-.662.662H4.383a.662.662 0 0 1-.663-.662v-7.95c0-.366.297-.662.663-.662Z'
      />
    </svg>
  )
}
