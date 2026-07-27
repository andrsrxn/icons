import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjMwMiAxNS45MzhhMy40MzYgMy40MzYgMCAxIDEtNi44NzEgMCAzLjQzNiAzLjQzNiAwIDAgMSA2Ljg3MSAwWm0tOS43MzMgMGEzLjQzNiAzLjQzNiAwIDEgMS02Ljg3MSAwIDMuNDM2IDMuNDM2IDAgMCAxIDYuODcgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMy40MzEgMTUuODMycy4xNS00LjM4MyAxLjA3NC02LjcyMmMxLjc2OS00LjQ4NCA0LjQzLTQuNDg0IDQuNDMtNC40ODRNMy42OTggMTUuODMycy4xNS00LjM4MyAxLjA3My02LjcyMmMxLjc3LTQuNDg0IDQuNDMtNC40ODQgNC40My00LjQ4NG0xMS4xMDEgMTEuMzEyYTMuNDM2IDMuNDM2IDAgMSAxLTYuODcgMCAzLjQzNiAzLjQzNiAwIDAgMSA2Ljg3IDBabS05LjczMyAwYTMuNDM1IDMuNDM1IDAgMSAxLTYuODcxIDAgMy40MzUgMy40MzUgMCAwIDEgNi44NyAwWiIvPjwvc3ZnPg==)
 */
export const IconQuotesDown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-quotes-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.302 15.938a3.436 3.436 0 1 1-6.871 0 3.436 3.436 0 0 1 6.871 0Zm-9.733 0a3.436 3.436 0 1 1-6.871 0 3.436 3.436 0 0 1 6.87 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13.431 15.832s.15-4.383 1.074-6.722c1.769-4.484 4.43-4.484 4.43-4.484M3.698 15.832s.15-4.383 1.073-6.722c1.77-4.484 4.43-4.484 4.43-4.484m11.101 11.312a3.436 3.436 0 1 1-6.87 0 3.436 3.436 0 0 1 6.87 0Zm-9.733 0a3.435 3.435 0 1 1-6.871 0 3.435 3.435 0 0 1 6.87 0Z'
      />
    </svg>
  )
}
