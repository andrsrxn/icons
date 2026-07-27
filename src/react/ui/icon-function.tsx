import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNS4wOTggMTguMjYzYy0uMzkzIDEuMDQyLjQzMiAyLjI3IDEuNzQzIDIuMjcgMi42NDMgMCA0LjM1Ni0zLjc0MSA2LjEwNi0xMC4wNDYgMS40MjYtNS4xMzcgMi41NzMtNy4wMiA0LjE0NC03LjAyIDEuNDQzIDAgMi4xNjguODM3IDIgMi4wODdtLTEuODI2IDUuMDE3aC04LjY0Ii8+PC9zdmc+)
 */
export const IconFunction: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-function'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.098 18.263c-.393 1.042.432 2.27 1.743 2.27 2.643 0 4.356-3.741 6.106-10.046 1.426-5.137 2.573-7.02 4.144-7.02 1.443 0 2.168.837 2 2.087m-1.826 5.017h-8.64'
      />
    </svg>
  )
}
