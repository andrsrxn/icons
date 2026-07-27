import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik03Ljc2IDUuNDc0IDMuNTIgOC40MDlsNC4yNCAyLjkzNUwxMiA4LjQwOSA3Ljc2IDUuNDc0Wm04LjQ4IDBMMTIgOC40MDlsNC4yNCAyLjkzNSA0LjI0LTIuOTM1LTQuMjQtMi45MzVaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJtNy43NiAxMS4zNDQtNC4yNCAyLjkzNSA0LjI0IDIuOTM1TDEyIDE0LjI4bC00LjI0LTIuOTM1Wm04LjQ4IDBMMTIgMTQuMjc5bDQuMjQgMi45MzUgNC4yNC0yLjkzNS00LjI0LTIuOTM1WiIvPjwvZz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTcuNzYgMTEuMzQ0IDMuNTIgOC40MDlsNC4yNC0yLjkzNUwxMiA4LjQwOW0tNC4yNCAyLjkzNUwxMiA4LjQwOW0tNC4yNCAyLjkzNS00LjI0IDIuOTM1IDQuMjQgMi45MzUgMS4yNDctLjg2M003Ljc2IDExLjM0NCAxMiAxNC4yNzltMC01Ljg3IDQuMjQtMi45MzUgNC4yNCAyLjkzNS00LjI0IDIuOTM1TTEyIDguNDA5bDQuMjQgMi45MzVtMCAwTDEyIDE0LjI3OW0wIDAgMi45OTMgMi4wNzIgMS4yNDcuODYzIDQuMjQtMi45MzUtNC4yNC0yLjkzNW0tNy4yMzMgNS4wMDdMMTIgMTQuMjc5bS0yLjk5MyAyLjA3MkwxMiAxOC40NjlsMi45OTMtMi4xMTgiLz48L3N2Zz4=)
 */
export const IconLogoDropbox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-dropbox'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M7.76 5.474 3.52 8.409l4.24 2.935L12 8.409 7.76 5.474Zm8.48 0L12 8.409l4.24 2.935 4.24-2.935-4.24-2.935Z'
        />
        <path
          fill='currentColor'
          d='m7.76 11.344-4.24 2.935 4.24 2.935L12 14.28l-4.24-2.935Zm8.48 0L12 14.279l4.24 2.935 4.24-2.935-4.24-2.935Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.76 11.344 3.52 8.409l4.24-2.935L12 8.409m-4.24 2.935L12 8.409m-4.24 2.935-4.24 2.935 4.24 2.935 1.247-.863M7.76 11.344 12 14.279m0-5.87 4.24-2.935 4.24 2.935-4.24 2.935M12 8.409l4.24 2.935m0 0L12 14.279m0 0 2.993 2.072 1.247.863 4.24-2.935-4.24-2.935m-7.233 5.007L12 14.279m-2.993 2.072L12 18.469l2.993-2.118'
      />
    </svg>
  )
}
