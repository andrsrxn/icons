import type { Icon } from './types'

export const IconMoon: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='moon'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M5.652 15.434a8.94 8.94 0 0 1-.519-.015c-.956-.055-1.434-.083-1.587.19-.153.273.077.603.536 1.264a8.87 8.87 0 1 0 11.71-12.749c-.698-.401-1.046-.602-1.305-.426-.259.175-.19.65-.055 1.598a8.87 8.87 0 0 1-8.78 10.138Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M5.652 15.434a8.94 8.94 0 0 1-.519-.015c-.956-.055-1.434-.083-1.587.19-.153.273.077.603.536 1.264a8.87 8.87 0 1 0 11.71-12.749c-.698-.401-1.046-.602-1.305-.426-.259.175-.19.65-.055 1.598a8.87 8.87 0 0 1-8.78 10.138Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
