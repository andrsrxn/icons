import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC42NTYgNmgxMS42MDlNOC42NTYgMTJoMTEuNjA5TTguNjU2IDE4aDExLjYwOU01LjQ0IDZhLjc3OS43NzkgMCAxIDEtMS41NTggMEEuNzc5Ljc3OSAwIDAgMSA1LjQ0IDZabTAgNi4wMDRhLjc3OS43NzkgMCAxIDEtMS41NTggMCAuNzc5Ljc3OSAwIDAgMSAxLjU1OCAwWm0wIDYuMDAzYS43NzkuNzc5IDAgMSAxLTEuNTU4IDAgLjc3OS43NzkgMCAwIDEgMS41NTggMFoiLz48L3N2Zz4=)
 */
export const IconListUnordered: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-list-unordered'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.656 6h11.609M8.656 12h11.609M8.656 18h11.609M5.44 6a.779.779 0 1 1-1.558 0A.779.779 0 0 1 5.44 6Zm0 6.004a.779.779 0 1 1-1.558 0 .779.779 0 0 1 1.558 0Zm0 6.003a.779.779 0 1 1-1.558 0 .779.779 0 0 1 1.558 0Z'
      />
    </svg>
  )
}
