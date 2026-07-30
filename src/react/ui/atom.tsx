import type { Icon } from './types'

export const IconAtom: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='atom'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.01 15.112c-4.034 4.034-8.698 5.912-10.417 4.193-1.718-1.718.16-6.382 4.194-10.417 4.035-4.034 8.698-5.912 10.417-4.193 1.718 1.718-.159 6.382-4.194 10.417Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.924 12a.924.924 0 1 1-1.848 0 .924.924 0 0 1 1.848 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.01 15.112c-4.034 4.034-8.698 5.912-10.417 4.193-1.718-1.718.16-6.382 4.194-10.417 4.035-4.034 8.698-5.912 10.417-4.193 1.718 1.718-.159 6.382-4.194 10.417Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.784 15.115c4.034 4.034 8.698 5.912 10.416 4.194 1.719-1.718-.16-6.382-4.194-10.417C10.972 4.858 6.308 2.98 4.59 4.698c-1.718 1.719.16 6.382 4.194 10.417Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.924 12a.924.924 0 1 1-1.848 0 .924.924 0 0 1 1.848 0Z'
      />
    </svg>
  )
}
