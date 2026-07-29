import type { Icon } from './types'

export const IconLogoStripe: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-stripe'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.388 3.94H4.612a.673.673 0 0 0-.672.672v14.776c0 .37.301.672.672.672h14.776c.37 0 .672-.301.672-.672V4.612a.673.673 0 0 0-.672-.672Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.09 14.182c0 1.204 1.304 2.182 2.91 2.182s2.91-.978 2.91-2.182c0-2.91-5.657-1.818-5.657-4.364 0-1.204 1.14-2.182 2.747-2.182 1.204 0 2.148.546 2.546 1.333M4.726 4h14.546c.401 0 .727.326.727.727v14.546a.727.727 0 0 1-.727.727H4.727A.727.727 0 0 1 4 19.273V4.727C4 4.326 4.326 4 4.727 4Z'
      />
    </svg>
  )
}
