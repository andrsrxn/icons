import type { Icon } from '../types'

export const IconWebcam: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='webcam'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.828 10.186a3.828 3.828 0 1 1-7.656 0 3.828 3.828 0 0 1 7.656 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 16.637a6.451 6.451 0 1 0 0-12.902 6.451 6.451 0 0 0 0 12.902Zm0 0v3.628m-3.733 0h7.466m.095-10.08a3.828 3.828 0 1 1-7.656 0 3.828 3.828 0 0 1 7.656 0Z'
      />
    </svg>
  )
}
