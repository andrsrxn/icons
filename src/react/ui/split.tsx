import type { Icon } from './types'

export const IconSplit: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='split'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.488 18.34.166.166c1.333 1.336 2 2.004 2.828 2.005m3-2.17-.169.168c-1.334 1.335-2.002 2.002-2.83 2.002m0 0-.001-4.104c0-.867 0-1.3.169-1.685.17-.385.489-.678 1.128-1.264L12 9.59m2.49 8.751.168.168c1.334 1.335 2.06 2.002 2.888 2.002.83 0 1.438-.669 2.771-2.005l.165-.165m-2.936 2.17v-4.098c0-.87 0-1.305-.17-1.69-.17-.387-.492-.68-1.135-1.266L12 9.59m0 0V3.596'
      />
    </svg>
  )
}
