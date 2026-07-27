import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjMzOSA4LjgyNEgzLjY2VjguNTljMC0xLjg4NiAwLTIuODI5LjU4Ni0zLjQxNC41ODYtLjU4NiAxLjUyOS0uNTg2IDMuNDE0LS41ODZoOC42NzhjMS44ODUgMCAyLjgyOCAwIDMuNDE0LjU4Ni41ODYuNTg1LjU4NiAxLjUyOC41ODYgMy40MTR2LjIzNFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMy42NjEgOC44MjR2Ni41ODZjMCAxLjg4NiAwIDIuODI5LjU4NiAzLjQxNC41ODYuNTg2IDEuNTI5LjU4NiAzLjQxNC41ODZoOC42NzhjMS44ODUgMCAyLjgyOCAwIDMuNDE0LS41ODYuNTg2LS41ODUuNTg2LTEuNTI4LjU4Ni0zLjQxNFY4LjgyNG0tMTYuNjc4IDBWOC41OWMwLTEuODg2IDAtMi44MjkuNTg2LTMuNDE0LjU4Ni0uNTg2IDEuNTI5LS41ODYgMy40MTQtLjU4Nmg4LjY3OGMxLjg4NSAwIDIuODI4IDAgMy40MTQuNTg2LjU4Ni41ODUuNTg2IDEuNTI4LjU4NiAzLjQxNHYuMjM0bS0xNi42NzggMEgyMC4zNCIvPjwvc3ZnPg==)
 */
export const IconBrowser: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-browser'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.339 8.824H3.66V8.59c0-1.886 0-2.829.586-3.414.586-.586 1.529-.586 3.414-.586h8.678c1.885 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v.234Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3.661 8.824v6.586c0 1.886 0 2.829.586 3.414.586.586 1.529.586 3.414.586h8.678c1.885 0 2.828 0 3.414-.586.586-.585.586-1.528.586-3.414V8.824m-16.678 0V8.59c0-1.886 0-2.829.586-3.414.586-.586 1.529-.586 3.414-.586h8.678c1.885 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v.234m-16.678 0H20.34'
      />
    </svg>
  )
}
