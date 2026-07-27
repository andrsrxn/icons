import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDE4YTEuMjUyIDEuMjUyIDAgMSAxIDAgMi41MDRBMS4yNTIgMS4yNTIgMCAwIDEgMTIgMThabTAtNy4yNTJhMS4yNTIgMS4yNTIgMCAxIDEgMCAyLjUwNCAxLjI1MiAxLjI1MiAwIDAgMSAwLTIuNTA0Wm0wLTcuMjUyQTEuMjUyIDEuMjUyIDAgMSAxIDEyIDZhMS4yNTIgMS4yNTIgMCAwIDEgMC0yLjUwNFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDE4YTEuMjUyIDEuMjUyIDAgMSAxIDAgMi41MDRBMS4yNTIgMS4yNTIgMCAwIDEgMTIgMThabTAtNy4yNTJhMS4yNTIgMS4yNTIgMCAxIDEgMCAyLjUwNCAxLjI1MiAxLjI1MiAwIDAgMSAwLTIuNTA0Wm0wLTcuMjUyQTEuMjUyIDEuMjUyIDAgMSAxIDEyIDZhMS4yNTIgMS4yNTIgMCAwIDEgMC0yLjUwNFoiLz48L3N2Zz4=)
 */
export const IconDotsVertical: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-dots-vertical'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 18a1.252 1.252 0 1 1 0 2.504A1.252 1.252 0 0 1 12 18Zm0-7.252a1.252 1.252 0 1 1 0 2.504 1.252 1.252 0 0 1 0-2.504Zm0-7.252A1.252 1.252 0 1 1 12 6a1.252 1.252 0 0 1 0-2.504Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18a1.252 1.252 0 1 1 0 2.504A1.252 1.252 0 0 1 12 18Zm0-7.252a1.252 1.252 0 1 1 0 2.504 1.252 1.252 0 0 1 0-2.504Zm0-7.252A1.252 1.252 0 1 1 12 6a1.252 1.252 0 0 1 0-2.504Z'
      />
    </svg>
  )
}
