import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuODM0IDE2LjE2NmE0LjE2NiA0LjE2NiAwIDEgMCAwLTguMzMyIDQuMTY2IDQuMTY2IDAgMCAwIDAgOC4zMzJabTguMzMyIDBjLjk4NiAwIDEuNzg2LTEuODY1IDEuNzg2LTQuMTY2cy0uOC00LjE2Ni0xLjc4Ni00LjE2NlMxNC4zODEgOS42OTkgMTQuMzgxIDEycy44IDQuMTY2IDEuNzg1IDQuMTY2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjMzMyA3LjgzNHY4LjMzMk0xMiAxMmE0LjE2NiA0LjE2NiAwIDEgMS04LjMzMyAwQTQuMTY2IDQuMTY2IDAgMCAxIDEyIDEyWm01Ljk1MiAwYzAgMi4zMDEtLjggNC4xNjYtMS43ODYgNC4xNjZTMTQuMzgxIDE0LjMwMSAxNC4zODEgMTJzLjgtNC4xNjYgMS43ODUtNC4xNjZjLjk4NiAwIDEuNzg2IDEuODY1IDEuNzg2IDQuMTY2WiIvPjwvc3ZnPg==)
 */
export const IconLogoMedium: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-medium'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.834 16.166a4.166 4.166 0 1 0 0-8.332 4.166 4.166 0 0 0 0 8.332Zm8.332 0c.986 0 1.786-1.865 1.786-4.166s-.8-4.166-1.786-4.166S14.381 9.699 14.381 12s.8 4.166 1.785 4.166Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20.333 7.834v8.332M12 12a4.166 4.166 0 1 1-8.333 0A4.166 4.166 0 0 1 12 12Zm5.952 0c0 2.301-.8 4.166-1.786 4.166S14.381 14.301 14.381 12s.8-4.166 1.785-4.166c.986 0 1.786 1.865 1.786 4.166Z'
      />
    </svg>
  )
}
