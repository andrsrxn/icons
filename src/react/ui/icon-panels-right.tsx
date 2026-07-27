import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwIDhjMC0xLjg4NiAwLTIuODI4LS41ODYtMy40MTRDMTguODI4IDQgMTcuODg2IDQgMTYgNGgtNHYxNmg0YzEuODg2IDAgMi44MjggMCAzLjQxNC0uNTg2QzIwIDE4LjgyOCAyMCAxNy44ODYgMjAgMTZWOFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMjBoNGMxLjg4NiAwIDIuODI4IDAgMy40MTQtLjU4NkMyMCAxOC44MjggMjAgMTcuODg2IDIwIDE2VjhjMC0xLjg4NiAwLTIuODI4LS41ODYtMy40MTRDMTguODI4IDQgMTcuODg2IDQgMTYgNEg4Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQuNTg2QzQgNS4xNzIgNCA2LjExNCA0IDh2OGMwIDEuODg2IDAgMi44MjguNTg2IDMuNDE0QzUuMTcyIDIwIDYuMTE0IDIwIDggMjBoNFptMC0xNnYxNiIvPjwvc3ZnPg==)
 */
export const IconPanelsRight: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-panels-right'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20 8c0-1.886 0-2.828-.586-3.414C18.828 4 17.886 4 16 4h-4v16h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16V8Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16V8c0-1.886 0-2.828-.586-3.414C18.828 4 17.886 4 16 4H8c-1.886 0-2.828 0-3.414.586C4 5.172 4 6.114 4 8v8c0 1.886 0 2.828.586 3.414C5.172 20 6.114 20 8 20h4Zm0-16v16'
      />
    </svg>
  )
}
