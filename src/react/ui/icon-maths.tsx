import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMy43MTMgNy4yOTQgNi41MDYtLjAwM200LjA3IDYuOTMzIDUuNTIyIDUuNTE4TTYuOTY1IDQuMDM5bC4wMDIgNi41MDZtMTIuODQxIDMuNjc3LTUuNTE3IDUuNTIybTUuOTk2LTEyLjQ1aC02LjIxNU0xMC4yMTkgMTguNDdIMy43MTRtNi41MDUtMi45MzZIMy43MTQiLz48L3N2Zz4=)
 */
export const IconMaths: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-maths'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.713 7.294 6.506-.003m4.07 6.933 5.522 5.518M6.965 4.039l.002 6.506m12.841 3.677-5.517 5.522m5.996-12.45h-6.215M10.219 18.47H3.714m6.505-2.936H3.714'
      />
    </svg>
  )
}
