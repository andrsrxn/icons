import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNjk4IDguMjE3YTMuNDM2IDMuNDM2IDAgMSAxIDYuODcxIDAgMy40MzYgMy40MzYgMCAwIDEtNi44NzEgMFptOS43MzMgMGEzLjQzNiAzLjQzNiAwIDEgMSA2Ljg3MSAwIDMuNDM2IDMuNDM2IDAgMCAxLTYuODcgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC41NjkgOC4zMjNzLS4xNSA0LjM4My0xLjA3NCA2LjcyM2MtMS43NjkgNC40ODMtNC40MyA0LjQ4My00LjQzIDQuNDgzTTIwLjMwMiA4LjMyM3MtLjE1IDQuMzgzLTEuMDczIDYuNzIzYy0xLjc3IDQuNDgzLTQuNDMgNC40ODMtNC40MyA0LjQ4M00zLjY5NyA4LjIxN2EzLjQzNiAzLjQzNiAwIDEgMSA2Ljg3MSAwIDMuNDM2IDMuNDM2IDAgMCAxLTYuODcxIDBabTkuNzMzIDBhMy40MzYgMy40MzYgMCAxIDEgNi44NzEgMCAzLjQzNiAzLjQzNiAwIDAgMS02Ljg3IDBaIi8+PC9zdmc+)
 */
export const IconQuotesUp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-quotes-up'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.698 8.217a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.871 0Zm9.733 0a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.87 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.569 8.323s-.15 4.383-1.074 6.723c-1.769 4.483-4.43 4.483-4.43 4.483M20.302 8.323s-.15 4.383-1.073 6.723c-1.77 4.483-4.43 4.483-4.43 4.483M3.697 8.217a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.871 0Zm9.733 0a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.87 0Z'
      />
    </svg>
  )
}
