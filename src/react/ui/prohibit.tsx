import type { Icon } from './types'

export const IconProhibit: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='prohibit'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.177 12a8.177 8.177 0 1 1-16.354 0 8.177 8.177 0 0 1 16.354 0Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M19.485 20.546a.75.75 0 0 0 1.061-1.06l-.53.53-.53.53ZM4.515 3.454a.75.75 0 0 0-1.061 1.06l.53-.53.53-.53ZM20.176 12h-.75A7.427 7.427 0 0 1 12 19.427v1.5A8.927 8.927 0 0 0 20.927 12h-.75ZM12 20.177v-.75A7.427 7.427 0 0 1 4.573 12h-1.5A8.927 8.927 0 0 0 12 20.927v-.75ZM3.823 12h.75A7.427 7.427 0 0 1 12 4.573v-1.5A8.927 8.927 0 0 0 3.073 12h.75ZM12 3.823v.75A7.427 7.427 0 0 1 19.427 12h1.5A8.927 8.927 0 0 0 12 3.073v.75Zm8.016 16.193.53-.53L4.514 3.453l-.53.53-.53.53 16.032 16.032.53-.53Z'
      />
    </svg>
  )
}
