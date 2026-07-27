import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMy4zMjR2Mi4wMDJtMCAxMy4zNDh2Mi4wMDJtNC42NzItMTIuMDEzYTMuMzM3IDMuMzM3IDAgMCAwLTMuMzM3LTMuMzM3aC0yLjY3YTMuMzM3IDMuMzM3IDAgMCAwIDAgNi42NzRoMy4zMzdhMy4zMzcgMy4zMzcgMCAwIDEgMCA2LjY3NEg5Ljk5OGEzLjMzNyAzLjMzNyAwIDAgMS0zLjMzNy0zLjMzNyIvPjwvc3ZnPg==)
 */
export const IconCurrencyMxn: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-mxn'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.324v2.002m0 13.348v2.002m4.672-12.013a3.337 3.337 0 0 0-3.337-3.337h-2.67a3.337 3.337 0 0 0 0 6.674h3.337a3.337 3.337 0 0 1 0 6.674H9.998a3.337 3.337 0 0 1-3.337-3.337'
      />
    </svg>
  )
}
