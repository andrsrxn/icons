import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjAuMzYzYTguMzY1IDguMzY1IDAgMCAwIDguMjgyLTcuMTk1LjMxMi4zMTIgMCAwIDAtLjIwNC0uMzI5IDMuNCAzLjQgMCAwIDEtMi4wMi00LjIxLjM2Mi4zNjIgMCAwIDAtLjI4Ny0uNDY0Yy0yLjEyMy0uMjg1LTMuOTctMi4wNDUtNC40OC00LjIyOGEuMzA0LjMwNCAwIDAgMC0uMjU0LS4yMzdBOC4zNjMgOC4zNjMgMCAxIDAgMTIgMjAuMzYzWm0tMy42MzktOC40NTZjLjgwNy41NzUgMi4wNzcuMTc1IDIuODM4LS44OTMuNzYtMS4wNjguNzIzLTIuNC0uMDg0LTIuOTc0LS44MDYtLjU3NC0yLjA3Ni0uMTc0LTIuODM3Ljg5NC0uNzYgMS4wNjgtLjcyMyAyLjM5OS4wODMgMi45NzNaTTE1IDE1LjY2MWExLjM0IDEuMzQgMCAxIDEtMi42NzkgMCAxLjM0IDEuMzQgMCAwIDEgMi42NzkgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik04Ljg2NyAxNS40MDVhLjQwNS40MDUgMCAxIDEtLjgxIDAgLjQwNS40MDUgMCAwIDEgLjgxIDBabTYuMzI2LTRhLjQwNS40MDUgMCAxIDEtLjgwOSAwIC40MDUuNDA1IDAgMCAxIC44MSAwWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTEuMTk5IDExLjAxNGMtLjc2MSAxLjA2OC0yLjAzMSAxLjQ2OC0yLjgzOC44OTMtLjgwNi0uNTc0LS44NDQtMS45MDUtLjA4My0yLjk3My43Ni0xLjA2OCAyLjAzLTEuNDY4IDIuODM3LS44OTQuODA3LjU3NC44NDQgMS45MDYuMDg0IDIuOTc0Wk0xNSAxNS42NmExLjM0IDEuMzQgMCAxIDEtMi42NzkgMCAxLjM0IDEuMzQgMCAwIDEgMi42NzkgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDIwLjM2M2E4LjM2NSA4LjM2NSAwIDAgMCA4LjI4Mi03LjE5NS4zMTIuMzEyIDAgMCAwLS4yMDQtLjMyOSAzLjQgMy40IDAgMCAxLTIuMDItNC4yMS4zNjIuMzYyIDAgMCAwLS4yODctLjQ2NGMtMi4xMjMtLjI4NS0zLjk3LTIuMDQ1LTQuNDgtNC4yMjhhLjMwNC4zMDQgMCAwIDAtLjI1NC0uMjM3QTguMzYzIDguMzYzIDAgMSAwIDEyIDIwLjM2M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC44NjcgMTUuNDA1YS40MDUuNDA1IDAgMSAxLS44MSAwIC40MDUuNDA1IDAgMCAxIC44MSAwWm02LjMyNi00YS40MDUuNDA1IDAgMSAxLS44MDkgMCAuNDA1LjQwNSAwIDAgMSAuODEgMFoiLz48L3N2Zz4=)
 */
export const IconCookie: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-cookie'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.363a8.365 8.365 0 0 0 8.282-7.195.312.312 0 0 0-.204-.329 3.4 3.4 0 0 1-2.02-4.21.362.362 0 0 0-.287-.464c-2.123-.285-3.97-2.045-4.48-4.228a.304.304 0 0 0-.254-.237A8.363 8.363 0 1 0 12 20.363Zm-3.639-8.456c.807.575 2.077.175 2.838-.893.76-1.068.723-2.4-.084-2.974-.806-.574-2.076-.174-2.837.894-.76 1.068-.723 2.399.083 2.973ZM15 15.661a1.34 1.34 0 1 1-2.679 0 1.34 1.34 0 0 1 2.679 0Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M8.867 15.405a.405.405 0 1 1-.81 0 .405.405 0 0 1 .81 0Zm6.326-4a.405.405 0 1 1-.809 0 .405.405 0 0 1 .81 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.199 11.014c-.761 1.068-2.031 1.468-2.838.893-.806-.574-.844-1.905-.083-2.973.76-1.068 2.03-1.468 2.837-.894.807.574.844 1.906.084 2.974ZM15 15.66a1.34 1.34 0 1 1-2.679 0 1.34 1.34 0 0 1 2.679 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.363a8.365 8.365 0 0 0 8.282-7.195.312.312 0 0 0-.204-.329 3.4 3.4 0 0 1-2.02-4.21.362.362 0 0 0-.287-.464c-2.123-.285-3.97-2.045-4.48-4.228a.304.304 0 0 0-.254-.237A8.363 8.363 0 1 0 12 20.363Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.867 15.405a.405.405 0 1 1-.81 0 .405.405 0 0 1 .81 0Zm6.326-4a.405.405 0 1 1-.809 0 .405.405 0 0 1 .81 0Z'
      />
    </svg>
  )
}
