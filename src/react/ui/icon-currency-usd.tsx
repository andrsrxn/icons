import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDEyaDIuMDAyYTMuMzM3IDMuMzM3IDAgMSAxIDAgNi42NzRIMTJWMTJabTAtNi42NzRoLTEuMzM1YTMuMzM3IDMuMzM3IDAgMSAwIDAgNi42NzRIMTJWNS4zMjZaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMy4zMjR2MTcuMzUybTQuNjcyLTEyLjAxM2EzLjMzNyAzLjMzNyAwIDAgMC0zLjMzNy0zLjMzN2gtMi42N2EzLjMzNyAzLjMzNyAwIDAgMCAwIDYuNjc0aDMuMzM3YTMuMzM3IDMuMzM3IDAgMCAxIDAgNi42NzRIOS45OThhMy4zMzcgMy4zMzcgMCAwIDEtMy4zMzctMy4zMzciLz48L3N2Zz4=)
 */
export const IconCurrencyUsd: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-usd'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 12h2.002a3.337 3.337 0 1 1 0 6.674H12V12Zm0-6.674h-1.335a3.337 3.337 0 1 0 0 6.674H12V5.326Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.324v17.352m4.672-12.013a3.337 3.337 0 0 0-3.337-3.337h-2.67a3.337 3.337 0 0 0 0 6.674h3.337a3.337 3.337 0 0 1 0 6.674H9.998a3.337 3.337 0 0 1-3.337-3.337'
      />
    </svg>
  )
}
