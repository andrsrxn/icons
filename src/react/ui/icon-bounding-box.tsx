import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuNDk2IDUuNDg3YTIuMDEgMi4wMSAwIDEgMS00LjAyIDAgMi4wMSAyLjAxIDAgMCAxIDQuMDIgMFptMCAxMy4wMjdhMi4wMSAyLjAxIDAgMSAxLTQuMDE5IDAgMi4wMSAyLjAxIDAgMCAxIDQuMDIgMFptMTMuMDI3IDBhMi4wMSAyLjAxIDAgMSAxLTQuMDE5IDAgMi4wMSAyLjAxIDAgMCAxIDQuMDIgMFptMC0xMy4wMjdhMi4wMSAyLjAxIDAgMSAxLTQuMDIgMCAyLjAxIDIuMDEgMCAwIDEgNC4wMiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03LjQ5NiA1LjQ4N2MwIDEuMTEtLjkgMi4wMS0yLjAxIDIuMDFtMi4wMS0yLjAxYTIuMDEgMi4wMSAwIDEgMC0yLjAxIDIuMDFtMi4wMS0yLjAxaDkuMDA4TTUuNDg3IDcuNDk3djguOTk2bTIuMDEgMi4wMmEyLjAxIDIuMDEgMCAxIDEtNC4wMiAwIDIuMDEgMi4wMSAwIDAgMSA0LjAyIDBabTAgMGg5LjAwN20wIDBhMi4wMSAyLjAxIDAgMSAwIDQuMDIgMCAyLjAxIDIuMDEgMCAwIDAtNC4wMiAwWm0yLjAxLTExLjAxN2EyLjAxIDIuMDEgMCAxIDAtMi4wMS0yLjAxbTIuMDEgMi4wMWMtMS4xMSAwLTIuMDEtLjktMi4wMS0yLjAxbTIuMDEgMi4wMXY4Ljk5NyIvPjwvc3ZnPg==)
 */
export const IconBoundingBox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-bounding-box'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.496 5.487a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0Zm0 13.027a2.01 2.01 0 1 1-4.019 0 2.01 2.01 0 0 1 4.02 0Zm13.027 0a2.01 2.01 0 1 1-4.019 0 2.01 2.01 0 0 1 4.02 0Zm0-13.027a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M7.496 5.487c0 1.11-.9 2.01-2.01 2.01m2.01-2.01a2.01 2.01 0 1 0-2.01 2.01m2.01-2.01h9.008M5.487 7.497v8.996m2.01 2.02a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0Zm0 0h9.007m0 0a2.01 2.01 0 1 0 4.02 0 2.01 2.01 0 0 0-4.02 0Zm2.01-11.017a2.01 2.01 0 1 0-2.01-2.01m2.01 2.01c-1.11 0-2.01-.9-2.01-2.01m2.01 2.01v8.997'
      />
    </svg>
  )
}
