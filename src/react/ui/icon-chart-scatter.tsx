import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguODIyIDguMDA2YS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBabTQuMDE3IDQuMjUyYS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBaTTkuMzc3IDE2LjczYS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBabTguMzYyLTEuMjg1YS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBabS0xLjExLTdhLjU1NS41NTUgMCAxIDEtMS4xMSAwIC41NTUuNTU1IDAgMCAxIDEuMTEgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTQgNHYxNC42MTFhMS41IDEuNSAwIDAgMCAxLjUgMS41SDIwTTguODIyIDguMDA2YS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBabTQuMDE3IDQuMjUyYS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBaTTkuMzc3IDE2LjczYS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBabTguMzYyLTEuMjg0YS41NTUuNTU1IDAgMSAxLTEuMTEgMCAuNTU1LjU1NSAwIDAgMSAxLjExIDBabS0xLjExLTdhLjU1NS41NTUgMCAxIDEtMS4xMSAwIC41NTUuNTU1IDAgMCAxIDEuMTEgMFoiLz48L3N2Zz4=)
 */
export const IconChartScatter: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chart-scatter'
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
