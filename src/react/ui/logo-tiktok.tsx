import type { Icon } from '../types'

export const IconLogoTiktok: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-tiktok'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.35 10.158a8.002 8.002 0 0 0 4.69 1.507v-3.35a4.69 4.69 0 0 1-4.69-4.69H12V14.68a2.345 2.345 0 1 1-3.35-2.12V8.985c-2.666.475-4.69 2.893-4.69 5.695a5.695 5.695 0 1 0 11.39 0v-4.522Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.35 10.158a8.002 8.002 0 0 0 4.69 1.507v-3.35a4.69 4.69 0 0 1-4.69-4.69H12V14.68a2.345 2.345 0 1 1-3.35-2.12V8.985c-2.666.475-4.69 2.893-4.69 5.695a5.695 5.695 0 1 0 11.39 0v-4.522Z'
      />
    </svg>
  )
}
