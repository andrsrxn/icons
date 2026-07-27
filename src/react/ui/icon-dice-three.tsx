import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNzU4IDcuNjM3YzAtMS44MjkgMC0yLjc0My41NjgtMy4zMTEuNTY4LS41NjggMS40ODItLjU2OCAzLjMxLS41NjhoOC43MjdjMS44MjkgMCAyLjc0MyAwIDMuMzExLjU2OC41NjguNTY4LjU2OCAxLjQ4Mi41NjggMy4zMXY4LjcyN2MwIDEuODI5IDAgMi43NDMtLjU2OCAzLjMxMS0uNTY4LjU2OC0xLjQ4Mi41NjgtMy4zMS41NjhINy42MzZjLTEuODI5IDAtMi43NDMgMC0zLjMxMS0uNTY4LS41NjgtLjU2OC0uNTY4LTEuNDgyLS41NjgtMy4zMVY3LjYzNloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuNjUgMTEuOTVhLjY1LjY1IDAgMSAxLTEuMyAwIC42NS42NSAwIDAgMSAxLjMgMFptLTQuMDQ4IDQuMTU4YS42NS42NSAwIDEgMS0xLjMgMCAuNjUuNjUgMCAwIDEgMS4zIDBabTguMDYyLTguNDU4YS42NS42NSAwIDEgMS0xLjMgMCAuNjUuNjUgMCAwIDEgMS4zIDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0zLjc1OCA3Ljc1OGMwLTEuODg2IDAtMi44MjguNTg2LTMuNDE0LjU4Ni0uNTg2IDEuNTI4LS41ODYgMy40MTQtLjU4Nmg4LjQ4NGMxLjg4NiAwIDIuODI4IDAgMy40MTQuNTg2LjU4Ni41ODYuNTg2IDEuNTI4LjU4NiAzLjQxNHY4LjQ4NGMwIDEuODg2IDAgMi44MjgtLjU4NiAzLjQxNC0uNTg1LjU4Ni0xLjUyOC41ODYtMy40MTQuNTg2SDcuNzU4Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQtLjU4Ni0uNTg2LS41ODYtLjU4Ni0xLjUyOC0uNTg2LTMuNDE0VjcuNzU4WiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIuNjUgMTEuOTVhLjY1LjY1IDAgMSAxLTEuMyAwIC42NS42NSAwIDAgMSAxLjMgMFptLTQuMDQ4IDQuMTU4YS42NS42NSAwIDEgMS0xLjMgMCAuNjUuNjUgMCAwIDEgMS4zIDBabTguMDYyLTguNDU4YS42NS42NSAwIDEgMS0xLjMgMCAuNjUuNjUgMCAwIDEgMS4zIDBaIi8+PC9zdmc+)
 */
export const IconDiceThree: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-dice-three'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.758 7.637c0-1.829 0-2.743.568-3.311.568-.568 1.482-.568 3.31-.568h8.727c1.829 0 2.743 0 3.311.568.568.568.568 1.482.568 3.31v8.727c0 1.829 0 2.743-.568 3.311-.568.568-1.482.568-3.31.568H7.636c-1.829 0-2.743 0-3.311-.568-.568-.568-.568-1.482-.568-3.31V7.636Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M12.65 11.95a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm-4.048 4.158a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm8.062-8.458a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.758 7.758c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h8.484c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v8.484c0 1.886 0 2.828-.586 3.414-.585.586-1.528.586-3.414.586H7.758c-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V7.758Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.65 11.95a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm-4.048 4.158a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Zm8.062-8.458a.65.65 0 1 1-1.3 0 .65.65 0 0 1 1.3 0Z'
      />
    </svg>
  )
}
