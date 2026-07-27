import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE0Ljg0OCAxMS43MjJIMTMuOGMuODM1IDAgMS42MzUtLjMyNiAyLjIyNi0uOTA2YTMuMDcgMy4wNyAwIDAgMCAuOTIxLTIuMTg5IDMuMDcgMy4wNyAwIDAgMC0uOTIyLTIuMTg4IDMuMTc0IDMuMTc0IDAgMCAwLTIuMjI1LS45MDdIOC41NTR2MTMuMDY5aDYuMjk0Yy45MjggMCAxLjgxNy0uMzYzIDIuNDczLTEuMDA4YTMuNDEgMy40MSAwIDAgMCAxLjAyNC0yLjQzMiAzLjQxIDMuNDEgMCAwIDAtMS4wMjQtMi40MzEgMy41MjcgMy41MjcgMCAwIDAtMi40NzMtMS4wMDhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy4xNTUgNS41MzJoMS4zOTltMCAxMy4wNjlWNS41MzJtMCAwaDUuMjQ1YTMuMTcgMy4xNyAwIDAgMSAyLjIyNS45MDdjLjU5LjU4LjkyMiAxLjM2Ny45MjIgMi4xODggMCAuODIxLS4zMzEgMS42MDgtLjkyMiAyLjE4OS0uNTkuNTgtMS4zOS45MDYtMi4yMjUuOTA2bTAgMGgxLjA1Yy45MjYgMCAxLjgxNi4zNjMgMi40NzIgMS4wMDhhMy40MSAzLjQxIDAgMCAxIDEuMDI0IDIuNDMxIDMuNDEgMy40MSAwIDAgMS0xLjAyNCAyLjQzMiAzLjUyNyAzLjUyNyAwIDAgMS0yLjQ3MyAxLjAwOEg3LjE1NW0zLjQ5Ny0xMy4wNjlWMy40N20yLjc5NyAyLjA2M1YzLjQ3bS0yLjc5NyAxNy4xOTVWMTguNm0yLjc5NyAyLjA2NFYxOC42bS00Ljg5NS02Ljg3OGg1LjI0NSIvPjwvc3ZnPg==)
 */
export const IconCurrencyBtc: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-currency-btc'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.848 11.722H13.8c.835 0 1.635-.326 2.226-.906a3.07 3.07 0 0 0 .921-2.189 3.07 3.07 0 0 0-.922-2.188 3.174 3.174 0 0 0-2.225-.907H8.554v13.069h6.294c.928 0 1.817-.363 2.473-1.008a3.41 3.41 0 0 0 1.024-2.432 3.41 3.41 0 0 0-1.024-2.431 3.527 3.527 0 0 0-2.473-1.008Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.155 5.532h1.399m0 13.069V5.532m0 0h5.245a3.17 3.17 0 0 1 2.225.907c.59.58.922 1.367.922 2.188 0 .821-.331 1.608-.922 2.189-.59.58-1.39.906-2.225.906m0 0h1.05c.926 0 1.816.363 2.472 1.008a3.41 3.41 0 0 1 1.024 2.431 3.41 3.41 0 0 1-1.024 2.432 3.527 3.527 0 0 1-2.473 1.008H7.155m3.497-13.069V3.47m2.797 2.063V3.47m-2.797 17.195V18.6m2.797 2.064V18.6m-4.895-6.878h5.245'
      />
    </svg>
  )
}
