import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjMwOSAxMy4wMmMyLjE2Ljc2OCA2LjY3NS45MTQgNi42NzUtMS4wMmE4Ljk4NCA4Ljk4NCAwIDAgMC0xNy44NjYtMS4zNmMxLjU5My0xLjQ2OCA1LjY0NC00LjEzNCA5LjE0OC0yLjM3IDAgMCAzLjI5My45OCAyLjA0MyA0Ljc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuMTM3IDIwLjkzNmMtMy4yNzcgMC0zLjcxNC01LjcwNC0zLjUyNy03LjY1NSAyLjU2NSA0LjkwNiA4LjAxNSA0Ljc0MyAxMC40MiA0LjA0OC0xLjMxIDEuOTktMy42MTYgMy42MDctNi44OTMgMy42MDdaIi8+PC9nPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTkuMzg1IDE3LjE0NWE5IDkgMCAxIDEgMS41OTMtNS43NzNjLjIxIDIuOTkzLTUuMDM0IDIuNDEzLTYuOTEzIDEuNDg2IDEuMzkyLTEuNi40MDItNC4wMzgtMi4yNzQtMy44NTEtMS43NDUuMTIyLTIuOTI3IDEuMTU3LTIuNzg0IDMuMjAyLjI4IDMuOTkgNC40NDQgNi4yMDUgMTAuMzYgNC43OU0zLjAyMiAxMi42MjhDMi43MzkgOC41ODUgMTEuNzM5IDUuNCAxNC4yNyA5Ljk0bS0xLjY0MiAxMS4wMzhjLTIuOTkzLjIxLTUuMTYyLTQuNzI1LTMuNTY3LTkuNzQ4Ii8+PC9zdmc+)
 */
export const IconLogoEdge: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-edge'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M14.309 13.02c2.16.768 6.675.914 6.675-1.02a8.984 8.984 0 0 0-17.866-1.36c1.593-1.468 5.644-4.134 9.148-2.37 0 0 3.293.98 2.043 4.75Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          d='M12.137 20.936c-3.277 0-3.714-5.704-3.527-7.655 2.565 4.906 8.015 4.743 10.42 4.048-1.31 1.99-3.616 3.607-6.893 3.607Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19.385 17.145a9 9 0 1 1 1.593-5.773c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.851-1.745.122-2.927 1.157-2.784 3.202.28 3.99 4.444 6.205 10.36 4.79M3.022 12.628C2.739 8.585 11.739 5.4 14.27 9.94m-1.642 11.038c-2.993.21-5.162-4.725-3.567-9.748'
      />
    </svg>
  )
}
