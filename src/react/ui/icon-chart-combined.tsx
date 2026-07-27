import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy4yOCAxNC4xNTh2My4zODltNy4zNS00LjcxN3Y0LjcxN20tMy42NzUtNS45MXY1LjkxbTcuMzQ4LTYuOTJ2Ni45Mk0zLjg5IDR2MTQuNjExYTEuNSAxLjUgMCAwIDAgMS41IDEuNUgyME02LjY5OSAxMS42MzhsMy43NjEtMy43NjJhMSAxIDAgMCAxIDEuNDI0LjAxTDEzLjYgOS42NTJhMSAxIDAgMCAwIDEuNDM4LS4wMDRsNC4zMTUtNC40OSIvPjwvc3ZnPg==)
 */
export const IconChartCombined: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chart-combined'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.28 14.158v3.389m7.35-4.717v4.717m-3.675-5.91v5.91m7.348-6.92v6.92M3.89 4v14.611a1.5 1.5 0 0 0 1.5 1.5H20M6.699 11.638l3.761-3.762a1 1 0 0 1 1.424.01L13.6 9.652a1 1 0 0 0 1.438-.004l4.315-4.49'
      />
    </svg>
  )
}
