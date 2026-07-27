import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTQ2IDE5LjgyN2MxLjY3NC0yLjUwNyA0LjU5LTcuMzEzIDQuNTktMTAuMzcgMC0zLjYzMy0yLjU2OC01LjczNy01LjczNi01LjczNy0zLjE2OCAwLTUuNzM3IDIuMDY4LTUuNzM3IDUuNzM3IDAgMy4xMjUgMi45MDggNy44OSA0LjU4MyAxMC4zNzYuNTYuODMgMS43NDMuODI3IDIuMy0uMDA2WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS40NjcgOS4yNjRoNS4wNjZNMTIgNi43MzJ2NS4wNjVtNS43MzctMi4zNGMwIDMuMDU3LTIuOTE3IDcuODYzLTQuNTkxIDEwLjM3YTEuMzcxIDEuMzcxIDAgMCAxLTIuMy4wMDZjLTEuNjc1LTIuNDg2LTQuNTgzLTcuMjUtNC41ODMtMTAuMzc2IDAtMy42NyAyLjU2OS01LjczNyA1LjczNy01LjczN3M1LjczNyAyLjEwNCA1LjczNyA1LjczN1oiLz48L3N2Zz4=)
 */
export const IconMapPinPlus: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-map-pin-plus'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M13.146 19.827c1.674-2.507 4.59-7.313 4.59-10.37 0-3.633-2.568-5.737-5.736-5.737-3.168 0-5.737 2.068-5.737 5.737 0 3.125 2.908 7.89 4.583 10.376.56.83 1.743.827 2.3-.006Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.467 9.264h5.066M12 6.732v5.065m5.737-2.34c0 3.057-2.917 7.863-4.591 10.37a1.371 1.371 0 0 1-2.3.006c-1.675-2.486-4.583-7.25-4.583-10.376 0-3.67 2.569-5.737 5.737-5.737s5.737 2.104 5.737 5.737Z'
      />
    </svg>
  )
}
