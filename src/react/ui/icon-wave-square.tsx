import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuMjgzIDE1djFjMCAxLjg4NiAwIDIuODI4LS41ODYgMy40MTQtLjU4Ni41ODYtMS41MjguNTg2LTMuNDE0LjU4NmgtLjI0NGMtMS44ODYgMC0yLjgyOSAwLTMuNDE0LS41ODYtLjU4Ni0uNTg2LS41ODYtMS41MjgtLjU4Ni0zLjQxNFY4YzAtMS44ODYgMC0yLjgyOC0uNTg2LTMuNDE0QzEwLjg2NyA0IDkuOTI0IDQgOC4wNCA0aC0uMzA0Yy0xLjg4NiAwLTIuODI5IDAtMy40MTQuNTg2LS41ODYuNTg2LS41ODYgMS41MjgtLjU4NiAzLjQxNCIvPjwvc3ZnPg==)
 */
export const IconWaveSquare: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-wave-square'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.283 15v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-.244c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V8c0-1.886 0-2.828-.586-3.414C10.867 4 9.924 4 8.04 4h-.304c-1.886 0-2.829 0-3.414.586-.586.586-.586 1.528-.586 3.414'
      />
    </svg>
  )
}
