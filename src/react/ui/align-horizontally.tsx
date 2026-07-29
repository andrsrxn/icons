import type { Icon } from '../types'

export const IconAlignHorizontally: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='align-horizontally'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.942 18.59c.897 0 1.345 0 1.683-.186a1.5 1.5 0 0 0 .591-.592c.186-.338.186-.786.186-1.683V7.987c0-.897 0-1.345-.186-1.683a1.5 1.5 0 0 0-.591-.591c-.338-.186-.786-.186-1.683-.186s-1.346 0-1.683.186a1.5 1.5 0 0 0-.592.591c-.185.338-.185.786-.185 1.683v8.142c0 .897 0 1.345.185 1.683a1.5 1.5 0 0 0 .592.592c.337.185.786.185 1.683.185Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.998 3.79v16.537M19.002 3.79v16.538M9.54 16.13V7.987c0-.897 0-1.345.185-1.683a1.5 1.5 0 0 1 .592-.591c.338-.186.786-.186 1.683-.186s1.345 0 1.683.186a1.5 1.5 0 0 1 .592.591c.185.338.185.786.185 1.683v8.142c0 .897 0 1.345-.185 1.683a1.5 1.5 0 0 1-.592.592c-.338.185-.786.185-1.683.185s-1.345 0-1.683-.185a1.5 1.5 0 0 1-.592-.592c-.185-.338-.185-.786-.185-1.683Z'
      />
    </svg>
  )
}
