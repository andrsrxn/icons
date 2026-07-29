import type { Icon } from './types'

export const IconKeyCommand: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='key-command'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.185 6.37v2.8s-2.033.016-2.815.016A2.815 2.815 0 1 1 9.185 6.37Zm0 11.26v-2.8s-2.033-.016-2.815-.016a2.815 2.815 0 1 0 2.815 2.815Zm5.63-11.26v2.8s2.033.016 2.815.016a2.815 2.815 0 1 0-2.815-2.815Zm0 11.26v-2.8s2.033-.016 2.815-.016a2.815 2.815 0 1 1-2.815 2.815Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.185 6.37v2.8s-2.033.016-2.815.016A2.815 2.815 0 1 1 9.185 6.37Zm0 11.26v-2.8s-2.033-.016-2.815-.016a2.815 2.815 0 1 0 2.815 2.815Zm5.63-11.26v2.8s2.034.016 2.815.016a2.815 2.815 0 1 0-2.815-2.815Zm0 11.26v-2.8s2.034-.016 2.815-.016a2.815 2.815 0 1 1-2.815 2.815Zm-5.63-8.445h5.63v5.63h-5.63v-5.63Z'
      />
    </svg>
  )
}
