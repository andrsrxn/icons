import type { Icon } from '../types'

export const IconLogoWindows: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-windows'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m20.136 20.136-7.396-1.344v-5.313h7.396v6.657ZM9.781 18.254l-5.917-1.076v-3.699H9.78v4.775Zm10.355-14.39L12.74 5.209v5.312h7.396V3.864ZM9.781 5.746 3.864 6.822v3.699H9.78V5.746Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m20.136 20.136-7.396-1.344v-5.313h7.396v6.657ZM9.781 18.254l-5.917-1.076v-3.699H9.78v4.775Zm10.355-14.39L12.74 5.209v5.312h7.396V3.864ZM9.781 5.746 3.864 6.822v3.699H9.78V5.746Z'
      />
    </svg>
  )
}
