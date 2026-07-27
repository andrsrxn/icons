import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuNjI3IDUuOTg0djcuOTM4YTMuODA2IDMuODA2IDAgMSAwIDQuNzQ1IDBWNS45ODRjMC0uMzE5IDAtLjQ3OC0uMDE3LS42MTJBMi4wMyAyLjAzIDAgMCAwIDEyLjYxIDMuNjNjLS4xMzMtLjAxOC0uMjkzLS4wMTgtLjYxMS0uMDE4LS4zMTkgMC0uNDc4IDAtLjYxMS4wMThhMi4wMyAyLjAzIDAgMCAwLTEuNzQ0IDEuNzQzYy0uMDE4LjEzNC0uMDE4LjI5My0uMDE4LjYxMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuNjk0IDE2Ljg5OGEuNjk1LjY5NSAwIDEgMS0xLjM4OSAwIC42OTUuNjk1IDAgMCAxIDEuMzkgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxNy41OTNhLjY5NS42OTUgMCAxIDAgMC0xLjM5LjY5NS42OTUgMCAwIDAgMCAxLjM5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIuNjk0IDE2Ljg5OGEuNjk1LjY5NSAwIDEgMS0xLjM4OSAwIC42OTUuNjk1IDAgMCAxIDEuMzkgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjYyNyA1Ljk4NHY3LjkzOGEzLjgwNiAzLjgwNiAwIDEgMCA0Ljc0NSAwVjUuOTg0YzAtLjMxOSAwLS40NzgtLjAxNy0uNjEyQTIuMDMgMi4wMyAwIDAgMCAxMi42MSAzLjYzYy0uMTMzLS4wMTgtLjI5My0uMDE4LS42MTEtLjAxOC0uMzE5IDAtLjQ3OCAwLS42MTEuMDE4YTIuMDMgMi4wMyAwIDAgMC0xLjc0NCAxLjc0M2MtLjAxOC4xMzQtLjAxOC4yOTMtLjAxOC42MTJabTMuMDY3IDEwLjkxNGEuNjk1LjY5NSAwIDEgMS0xLjM4OSAwIC42OTUuNjk1IDAgMCAxIDEuMzkgMFoiLz48L3N2Zz4=)
 */
export const IconTermometer: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-termometer'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.627 5.984v7.938a3.806 3.806 0 1 0 4.745 0V5.984c0-.319 0-.478-.017-.612A2.03 2.03 0 0 0 12.61 3.63c-.133-.018-.293-.018-.611-.018-.319 0-.478 0-.611.018a2.03 2.03 0 0 0-1.744 1.743c-.018.134-.018.293-.018.612Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.694 16.898a.695.695 0 1 1-1.389 0 .695.695 0 0 1 1.39 0Z' />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 17.593a.695.695 0 1 0 0-1.39.695.695 0 0 0 0 1.39Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.694 16.898a.695.695 0 1 1-1.389 0 .695.695 0 0 1 1.39 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.627 5.984v7.938a3.806 3.806 0 1 0 4.745 0V5.984c0-.319 0-.478-.017-.612A2.03 2.03 0 0 0 12.61 3.63c-.133-.018-.293-.018-.611-.018-.319 0-.478 0-.611.018a2.03 2.03 0 0 0-1.744 1.743c-.018.134-.018.293-.018.612Zm3.067 10.914a.695.695 0 1 1-1.389 0 .695.695 0 0 1 1.39 0Z'
      />
    </svg>
  )
}
