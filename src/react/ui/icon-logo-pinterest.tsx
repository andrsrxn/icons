import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5LjY4OSAxMC4yMjZjMCAzLjU4LTIuNDA2IDYuNDg0LTYuOTU4IDYuNDg0LTEuOTUtMS44ODgtMS43NDMuMTM0LTIuNDY3LS4xMDQtMi42OS0xLjIxLTQuNDktMy41NTUtNC40OS02LjM4IDAtMy41OCAzLjExNC02LjQ4MyA2Ljk1Ny02LjQ4MyAzLjg0MiAwIDYuOTU4IDIuOTAzIDYuOTU4IDYuNDgzWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjA1NiA4LjUzIDkuMjgxIDIwLjMyN002Ljc0IDE0LjA4MmE2LjkzOCA2LjkzOCAwIDEgMSAxMi45NDktMy40N2MwIDMuODMyLTIuNzc2IDYuMjQ1LTUuNTUxIDYuMjQ1LTIuNzc2IDAtMy42MS0xLjgyNy0zLjYxLTEuODI3Ii8+PC9zdmc+)
 */
export const IconLogoPinterest: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-pinterest'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.689 10.226c0 3.58-2.406 6.484-6.958 6.484-1.95-1.888-1.743.134-2.467-.104-2.69-1.21-4.49-3.555-4.49-6.38 0-3.58 3.114-6.483 6.957-6.483 3.842 0 6.958 2.903 6.958 6.483Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.056 8.53 9.281 20.327M6.74 14.082a6.938 6.938 0 1 1 12.949-3.47c0 3.832-2.776 6.245-5.551 6.245-2.776 0-3.61-1.827-3.61-1.827'
      />
    </svg>
  )
}
