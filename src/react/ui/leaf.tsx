import type { Icon } from './types'

export const IconLeaf: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='leaf'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M16.357 15.382c-3.236 3.048-7.592 2.335-9.472.564-1.685-1.586-2.637-5.874.599-8.922 4.024-3.79 9.505-3.395 11.39-3.12.41.06.715.364.759.753.205 1.833.438 7.227-3.276 10.725Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.641 11.022c-1.85 1.195-5.642 4.781-6.002 9.57m10.718-5.21c-3.236 3.048-7.592 2.335-9.472.564-1.685-1.586-2.637-5.874.599-8.922 4.024-3.79 9.505-3.395 11.39-3.12.41.06.715.364.759.753.205 1.833.438 7.227-3.276 10.725Z'
      />
    </svg>
  )
}
