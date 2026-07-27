import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYgMTJhMS4yNTIgMS4yNTIgMCAxIDEtMi41MDQgMEExLjI1MiAxLjI1MiAwIDAgMSA2IDEyWm03LjI1MiAwYTEuMjUyIDEuMjUyIDAgMSAxLTIuNTA0IDAgMS4yNTIgMS4yNTIgMCAwIDEgMi41MDQgMFptNy4yNTIgMEExLjI1MiAxLjI1MiAwIDEgMSAxOCAxMmExLjI1MiAxLjI1MiAwIDAgMSAyLjUwNCAwWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNiAxMmExLjI1MiAxLjI1MiAwIDEgMS0yLjUwNCAwQTEuMjUyIDEuMjUyIDAgMCAxIDYgMTJabTcuMjUyIDBhMS4yNTIgMS4yNTIgMCAxIDEtMi41MDQgMCAxLjI1MiAxLjI1MiAwIDAgMSAyLjUwNCAwWm03LjI1MiAwQTEuMjUyIDEuMjUyIDAgMSAxIDE4IDEyYTEuMjUyIDEuMjUyIDAgMCAxIDIuNTA0IDBaIi8+PC9zdmc+)
 */
export const IconDotsHorizontal: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-dots-horizontal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6 12a1.252 1.252 0 1 1-2.504 0A1.252 1.252 0 0 1 6 12Zm7.252 0a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Zm7.252 0A1.252 1.252 0 1 1 18 12a1.252 1.252 0 0 1 2.504 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 12a1.252 1.252 0 1 1-2.504 0A1.252 1.252 0 0 1 6 12Zm7.252 0a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Zm7.252 0A1.252 1.252 0 1 1 18 12a1.252 1.252 0 0 1 2.504 0Z'
      />
    </svg>
  )
}
