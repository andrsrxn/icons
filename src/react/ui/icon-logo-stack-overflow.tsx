import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5LjIzOCAxNC40Nkg0Ljc2MnY1Ljc5aDE0LjQ3NnYtNS43OVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik00Ljc2MiAxNC40NnY1Ljc5aDE0LjQ3NnYtNS43OU04LjM4IDE2LjYzaDcuMjM4bS02LjYxLTQuNzc3IDYuOTkzIDEuODc0bS01LjE0OC02LjMyNSA2LjI2OCAzLjYxOU0xMy43ODcgMy41OGw1LjExOCA1LjExOCIvPjwvc3ZnPg==)
 */
export const IconLogoStackOverflow: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-stack-overflow'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path fill='currentColor' d='M19.238 14.46H4.762v5.79h14.476v-5.79Z' opacity='.2' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.762 14.46v5.79h14.476v-5.79M8.38 16.63h7.238m-6.61-4.777 6.993 1.874m-5.148-6.325 6.268 3.619M13.787 3.58l5.118 5.118'
      />
    </svg>
  )
}
