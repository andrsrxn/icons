import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTkgNi4xMzNjMC0uMTIzIDAtLjE4NS0uMDAzLS4yMzhhMiAyIDAgMCAwLTEuODkyLTEuODkyQzE3LjA1MiA0IDE2Ljk5IDQgMTYuODY3IDRINy4yMzVjLS4xMjQgMC0uMTg2IDAtLjIzOC4wMDNhMiAyIDAgMCAwLTEuODkzIDEuODkyYy0uMDAyLjA1My0uMDAyLjExNS0uMDAyLjIzOE0xMi4wNSA0djE2bTAgMEg5Ljg0Nm0yLjIwNSAwaDIuMjA1Ii8+PC9zdmc+)
 */
export const IconText: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-text'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19 6.133c0-.123 0-.185-.003-.238a2 2 0 0 0-1.892-1.892C17.052 4 16.99 4 16.867 4H7.235c-.124 0-.186 0-.238.003a2 2 0 0 0-1.893 1.892c-.002.053-.002.115-.002.238M12.05 4v16m0 0H9.846m2.205 0h2.205'
      />
    </svg>
  )
}
