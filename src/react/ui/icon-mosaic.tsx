import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTMgMTYuNDg0VjhjMC0xLjg4NiAwLTIuODI4LS41ODYtMy40MTRDMTguOTYgNCAxOC4wMTYgNCAxNi4xMyA0SDcuNjQ2Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQuNTg2TDIwLjEzIDE2LjQ4NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTQuNDU4IDUgOC4yMDkgNi4xMzNtMCAwTDIwIDE2LjEyMm0tNy4zMzMtNC45ODlMOCAyMG0tLjM1NC40ODRoOC40ODRjMS44ODYgMCAyLjgyOSAwIDMuNDE0LS41ODYuNTg2LS41ODUuNTg2LTEuNTI4LjU4Ni0zLjQxNFY4YzAtMS44ODYgMC0yLjgyOC0uNTg2LTMuNDE0QzE4Ljk2IDQgMTguMDE2IDQgMTYuMTMgNEg3LjY0NmMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LjU4Ni0uNTg2LjU4Ni0uNTg2IDEuNTI4LS41ODYgMy40MTR2OC40ODRjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNC41ODYuNTg2IDEuNTI4LjU4NiAzLjQxNC41ODZaIi8+PC9zdmc+)
 */
export const IconMosaic: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-mosaic'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.13 16.484V8c0-1.886 0-2.828-.586-3.414C18.96 4 18.016 4 16.13 4H7.646c-1.886 0-2.828 0-3.414.586L20.13 16.484Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m4.458 5 8.209 6.133m0 0L20 16.122m-7.333-4.989L8 20m-.354.484h8.484c1.886 0 2.829 0 3.414-.586.586-.585.586-1.528.586-3.414V8c0-1.886 0-2.828-.586-3.414C18.96 4 18.016 4 16.13 4H7.646c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v8.484c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586Z'
      />
    </svg>
  )
}
