import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC45MDYgMy43NDlIOC43OGMtMS44ODUgMC0yLjgyOCAwLTMuNDE0LjU4Ni0uNTg2LjU4Ni0uNTg2IDEuNTI4LS41ODYgMy40MTR2OC41MDJjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNC41ODYuNTg2IDEuNTI5LjU4NiAzLjQxNC41ODZoLjEyNm02LjE4OC0xNi41MDJoLjEyNmMxLjg4NSAwIDIuODI4IDAgMy40MTQuNTg2LjU4Ni41ODYuNTg2IDEuNTI4LjU4NiAzLjQxNHY4LjUwMmMwIDEuODg2IDAgMi44MjgtLjU4NiAzLjQxNC0uNTg2LjU4Ni0xLjUyOS41ODYtMy40MTQuNTg2aC0uMTI2Ii8+PC9zdmc+)
 */
export const IconSquareBrackets: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-square-brackets'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.906 3.749H8.78c-1.885 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v8.502c0 1.886 0 2.828.586 3.414.586.586 1.529.586 3.414.586h.126m6.188-16.502h.126c1.885 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v8.502c0 1.886 0 2.828-.586 3.414-.586.586-1.529.586-3.414.586h-.126'
      />
    </svg>
  )
}
