import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjAyNCAxMS45MWMtMS44MTUgMi4xMTYtMy42MDUgNC4yNy02LjE0NiAzLjU5LTEuNDc2LS4zOTYtMi4yNzMtMS45NzMtMi4yNzMtMy41MDEgMC0xLjUyOS43OTctMy4xMDUgMi4yNzMtMy41IDIuNjA2LS43IDQuMzkzIDEuMzM4IDYuMTQ2IDMuNDExWm0wIDBjMS43NzItMi4wNjQgMy41NjgtNC4wOTIgNi4xMDctMy40MTIgMS40NzcuMzk2IDIuMzQgMS45NzIgMi4zNCAzLjUwMSAwIDEuNTI4LS44NjMgMy4xMDUtMi4zNCAzLjUtMi41NTkuNjg3LTQuMzE1LTEuNDctNi4xMDctMy41ODlaIi8+PC9zdmc+)
 */
export const IconInfinite: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-infinite'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.024 11.91c-1.815 2.116-3.605 4.27-6.146 3.59-1.476-.396-2.273-1.973-2.273-3.501 0-1.529.797-3.105 2.273-3.5 2.606-.7 4.393 1.338 6.146 3.411Zm0 0c1.772-2.064 3.568-4.092 6.107-3.412 1.477.396 2.34 1.972 2.34 3.501 0 1.528-.863 3.105-2.34 3.5-2.559.687-4.315-1.47-6.107-3.589Z'
      />
    </svg>
  )
}
