import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtOC41MTUgMTcuODc3LjY1My42NTRjMS4zMzMgMS4zMzYgMiAyLjAwNCAyLjgyOSAyLjAwNC44MjkgMCAxLjQ5Ni0uNjY3IDIuODMtMi4wMDFsLjY1OC0uNjU3TTEyIDIwLjUzNXYtNS44NjNtMCAwIDMuMDA4LTIuODQ5Yy42MTctLjU4My45MjUtLjg3NSAxLjA4OC0xLjI1My4xNjItLjM3OS4xNjItLjgwMy4xNjItMS42NTFWMy42Mk0xMiAxNC42N2wtMy4wMTQtMi44NjRjLS42MTMtLjU4My0uOTItLjg3NC0xLjA4Mi0xLjI1Mi0uMTYyLS4zNzgtLjE2Mi0uOC0uMTYyLTEuNjQ3VjMuNjIiLz48L3N2Zz4=)
 */
export const IconMerge: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-merge'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m8.515 17.877.653.654c1.333 1.336 2 2.004 2.829 2.004.829 0 1.496-.667 2.83-2.001l.658-.657M12 20.535v-5.863m0 0 3.008-2.849c.617-.583.925-.875 1.088-1.253.162-.379.162-.803.162-1.651V3.62M12 14.67l-3.014-2.864c-.613-.583-.92-.874-1.082-1.252-.162-.378-.162-.8-.162-1.647V3.62'
      />
    </svg>
  )
}
