import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNTE2IDguNDk4YzAtMS4yODUgMC0xLjkyNy41ODYtMi4zMjYuNTg1LS4zOTkgMS41MjgtLjM5OSAzLjQxNC0uMzk5SDE2YzEuODg2IDAgMi44MjggMCAzLjQxNC40QzIwIDYuNTcgMjAgNy4yMTIgMjAgOC40OTd2NS43NzhjMCAxLjI4NCAwIDEuOTI2LS41ODYgMi4zMjUtLjU4Ni40LTEuNTI4LjQtMy40MTQuNEg3LjUxNmMtMS44ODYgMC0yLjgyOSAwLTMuNDE0LS4zOTktLjU4Ni0uMzk5LS41ODYtMS4wNDEtLjU4Ni0yLjMyNVY4LjQ5OFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiA1LjY4N1YzLjQxNW0wIDE3LjE3VjE3bS02LjM3OCAzLjU4NUwxMSAxN203LjM3OCAzLjU4NUwxMyAxN20tNS40ODQgMEgxNmMxLjg4NiAwIDIuODI4IDAgMy40MTQtLjU4NkMyMCAxNS44MjggMjAgMTQuODg2IDIwIDEzVjkuNzczYzAtMS44ODUgMC0yLjgyOC0uNTg2LTMuNDE0LS41ODYtLjU4Ni0xLjUyOC0uNTg2LTMuNDE0LS41ODZINy41MTZjLTEuODg2IDAtMi44MjkgMC0zLjQxNC41ODYtLjU4Ni41ODYtLjU4NiAxLjUyOS0uNTg2IDMuNDE0VjEzYzAgMS44ODYgMCAyLjgyOC41ODYgMy40MTRDNC42ODcgMTcgNS42MyAxNyA3LjUxNiAxN1oiLz48L3N2Zz4=)
 */
export const IconStand: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-stand'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.516 8.498c0-1.285 0-1.927.586-2.326.585-.399 1.528-.399 3.414-.399H16c1.886 0 2.828 0 3.414.4C20 6.57 20 7.212 20 8.497v5.778c0 1.284 0 1.926-.586 2.325-.586.4-1.528.4-3.414.4H7.516c-1.886 0-2.829 0-3.414-.399-.586-.399-.586-1.041-.586-2.325V8.498Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 5.687V3.415m0 17.17V17m-6.378 3.585L11 17m7.378 3.585L13 17m-5.484 0H16c1.886 0 2.828 0 3.414-.586C20 15.828 20 14.886 20 13V9.773c0-1.885 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586H7.516c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.529-.586 3.414V13c0 1.886 0 2.828.586 3.414C4.687 17 5.63 17 7.516 17Z'
      />
    </svg>
  )
}
