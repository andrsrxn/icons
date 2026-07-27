import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2LjAxOSAxMi40MDcgMTEuNTczIDcuOTZhMiAyIDAgMCAxLS4wMDktMi44MmwuNjIxLS42MjhhMiAyIDAgMCAxIDIuODM4LS4wMWw0LjQ1IDQuNDVhMiAyIDAgMCAxIDAgMi44MjlsLS42MjYuNjI1YTIgMiAwIDAgMS0yLjgyOCAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTEwLjg4NSA1LjYwNi0uMDk0LjA5NW0wIDAtLjczNC43MzRtMCAwTDUuNTggMTAuOTFjLTEuMzE0IDEuMzE1LTEuOTcgMS45NzMtMS45NyAyLjc5cy42NTYgMS40NzUgMS45NjkgMi43OWwxLjgzMiAxLjgzN2MxLjMxNSAxLjMxOCAxLjk3MyAxLjk3NyAyLjc5IDEuOTc4LjgxOSAwIDEuNDc4LS42NTggMi43OTUtMS45NzRsNC40OC00LjQ3OC43MzQtLjczNGMxLjMxNi0xLjMxNiAxLjk3NC0xLjk3NCAxLjk3NC0yLjc5MiAwLS44MTgtLjY1OC0xLjQ3Ni0xLjk3NC0yLjc5MmwtMS44MzUtMS44MzRjLTEuMzE2LTEuMzE2LTEuOTc0LTEuOTc0LTIuNzkxLTEuOTc0LS44MTggMC0xLjQ3Ni42NTgtMi43OTIgMS45NzRtLS43MzQuNzM0IDcuNDE4IDcuNDE4Ii8+PC9zdmc+)
 */
export const IconEraser: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-eraser'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M16.019 12.407 11.573 7.96a2 2 0 0 1-.009-2.82l.621-.628a2 2 0 0 1 2.838-.01l4.45 4.45a2 2 0 0 1 0 2.829l-.626.625a2 2 0 0 1-2.828 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m10.885 5.606-.094.095m0 0-.734.734m0 0L5.58 10.91c-1.314 1.315-1.97 1.973-1.97 2.79s.656 1.475 1.969 2.79l1.832 1.837c1.315 1.318 1.973 1.977 2.79 1.978.819 0 1.478-.658 2.795-1.974l4.48-4.478.734-.734c1.316-1.316 1.974-1.974 1.974-2.792 0-.818-.658-1.476-1.974-2.792l-1.835-1.834c-1.316-1.316-1.974-1.974-2.791-1.974-.818 0-1.476.658-2.792 1.974m-.734.734 7.418 7.418'
      />
    </svg>
  )
}
