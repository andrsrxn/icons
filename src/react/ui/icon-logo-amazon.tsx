import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjMxMyAxNS40OThhMy40OTggMy40OTggMCAxIDAgMC02Ljk5NSAzLjQ5OCAzLjQ5OCAwIDAgMCAwIDYuOTk1WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTE5LjkyMSAxNS40MS0uNjYuNzI0cy0yLjg2IDMuMTgtNy42MyAzLjE4UzQgMTYuMTM0IDQgMTYuMTM0bTEzLjc0OC0xLjI3MmgyLjE1Yy4zNSAwIC42MzYuMjg1LjYzNi42MzZ2Mi4xNW0tNS43MjMtMi4xNVY4LjE4NWEzLjQ5OCAzLjQ5OCAwIDAgMC02LjYxNC0xLjU5bTYuNjE0IDUuNDA2YTMuNDk4IDMuNDk4IDAgMSAxLTYuOTk2IDAgMy40OTggMy40OTggMCAwIDEgNi45OTUgMFoiLz48L3N2Zz4=)
 */
export const IconLogoAmazon: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-amazon'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.313 15.498a3.498 3.498 0 1 0 0-6.995 3.498 3.498 0 0 0 0 6.995Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m19.921 15.41-.66.724s-2.86 3.18-7.63 3.18S4 16.134 4 16.134m13.748-1.272h2.15c.35 0 .636.285.636.636v2.15m-5.723-2.15V8.185a3.498 3.498 0 0 0-6.614-1.59m6.614 5.406a3.498 3.498 0 1 1-6.996 0 3.498 3.498 0 0 1 6.995 0Z'
      />
    </svg>
  )
}
