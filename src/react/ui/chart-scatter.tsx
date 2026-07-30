import type { Icon } from './types'

export const IconChartScatter: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='chart-scatter'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.822 8.006a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Zm4.017 4.252a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0ZM9.377 16.73a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Zm8.362-1.285a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Zm-1.11-7a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4 4v14.611a1.5 1.5 0 0 0 1.5 1.5H20M8.822 8.006a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Zm4.017 4.252a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0ZM9.377 16.73a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Zm8.362-1.284a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Zm-1.11-7a.555.555 0 1 1-1.11 0 .555.555 0 0 1 1.11 0Z'
      />
    </svg>
  )
}
