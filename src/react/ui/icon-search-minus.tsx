import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE3LjMzNyAxMC41NDZhNi44NzMgNi44NzMgMCAxIDEtMTMuNzQ2IDAgNi44NzMgNi44NzMgMCAwIDEgMTMuNzQ2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy4xNzEgMTAuNTQ2aDYuNTg1bTEuNjIgNC44MDdhNi44NzMgNi44NzMgMCAxIDAtOS44MjQtOS42MTUgNi44NzMgNi44NzMgMCAwIDAgOS44MjQgOS42MTVabTAgMCA0LjkgNC45Ii8+PC9zdmc+)
 */
export const IconSearchMinus: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-search-minus'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M17.337 10.546a6.873 6.873 0 1 1-13.746 0 6.873 6.873 0 0 1 13.746 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.171 10.546h6.585m1.62 4.807a6.873 6.873 0 1 0-9.824-9.615 6.873 6.873 0 0 0 9.824 9.615Zm0 0 4.9 4.9'
      />
    </svg>
  )
}
