import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjQzNCAxMmE4LjQzNCA4LjQzNCAwIDEgMS0xNi44NjggMCA4LjQzNCA4LjQzNCAwIDAgMSAxNi44NjggMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS43NSAxMS4xNzl2NC42MzdjMCAuODI0LjU3OSAxLjM4NCAxLjQ4MiAxLjM4NE0xMiAyMC40MzRhOC40MzQgOC40MzQgMCAxIDAgMC0xNi44NjggOC40MzQgOC40MzQgMCAwIDAgMCAxNi44NjhaTTExLjc1IDguNDRhLjc1NS43NTUgMCAxIDEgMC0xLjUxMS43NTUuNzU1IDAgMCAxIDAgMS41MVoiLz48L3N2Zz4=)
 */
export const IconInfo: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-info'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.434 12a8.434 8.434 0 1 1-16.868 0 8.434 8.434 0 0 1 16.868 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.75 11.179v4.637c0 .824.579 1.384 1.482 1.384M12 20.434a8.434 8.434 0 1 0 0-16.868 8.434 8.434 0 0 0 0 16.868ZM11.75 8.44a.755.755 0 1 1 0-1.511.755.755 0 0 1 0 1.51Z'
      />
    </svg>
  )
}
