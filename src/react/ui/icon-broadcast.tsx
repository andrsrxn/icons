import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjk1MyAxMmExLjk1MyAxLjk1MyAwIDEgMS0zLjkwNiAwIDEuOTUzIDEuOTUzIDAgMCAxIDMuOTA2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYuMjAyIDguODE4YzAgLjAxIDEuMDA1IDEuMyAxLjAwNSAzLjE4MiAwIDIuMDA2LTEuMDA1IDMuMTgyLTEuMDA1IDMuMTgyTTcuNzk4IDguODE4YzAgLjAxLTEuMDA1IDEuMy0xLjAwNSAzLjE4MiAwIDIuMDA2IDEuMDA1IDMuMTgyIDEuMDA1IDMuMTgybTEwLjgyLTkuMDRjMCAuMDE4IDEuODUgMi4zOTIgMS44NSA1Ljg1OCAwIDMuNjk0LTEuODUgNS44NTgtMS44NSA1Ljg1OE01LjM4MiA2LjE0MmMwIC4wMTgtMS44NDkgMi4zOTItMS44NDkgNS44NTggMCAzLjY5NCAxLjg1IDUuODU4IDEuODUgNS44NThNMTMuOTUxIDEyYTEuOTUzIDEuOTUzIDAgMSAxLTMuOTA1IDAgMS45NTMgMS45NTMgMCAwIDEgMy45MDYgMFoiLz48L3N2Zz4=)
 */
export const IconBroadcast: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-broadcast'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.953 12a1.953 1.953 0 1 1-3.906 0 1.953 1.953 0 0 1 3.906 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.202 8.818c0 .01 1.005 1.3 1.005 3.182 0 2.006-1.005 3.182-1.005 3.182M7.798 8.818c0 .01-1.005 1.3-1.005 3.182 0 2.006 1.005 3.182 1.005 3.182m10.82-9.04c0 .018 1.85 2.392 1.85 5.858 0 3.694-1.85 5.858-1.85 5.858M5.382 6.142c0 .018-1.849 2.392-1.849 5.858 0 3.694 1.85 5.858 1.85 5.858M13.951 12a1.953 1.953 0 1 1-3.905 0 1.953 1.953 0 0 1 3.906 0Z'
      />
    </svg>
  )
}
