import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDIwLjMzYTguMzMgOC4zMyAwIDEgMCAwLTE2LjY2IDguMzMgOC4zMyAwIDAgMCAwIDE2LjY2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTkuOTE4IDE1LjI5N2E0LjQyNSA0LjQyNSAwIDAgMSA0LjE2NCAwbS02Ljk0LTQuODU5YTEwLjMyNSAxMC4zMjUgMCAwIDEgOS43MTcgMG0tOC4zMyAyLjQzYTcuMzc1IDcuMzc1IDAgMCAxIDYuOTQyIDBNMjAuMzMgMTJhOC4zMyA4LjMzIDAgMSAxLTE2LjY2IDAgOC4zMyA4LjMzIDAgMCAxIDE2LjY2IDBaIi8+PC9zdmc+)
 */
export const IconLogoSpotify: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-spotify'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 20.33a8.33 8.33 0 1 0 0-16.66 8.33 8.33 0 0 0 0 16.66Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.918 15.297a4.425 4.425 0 0 1 4.164 0m-6.94-4.859a10.325 10.325 0 0 1 9.717 0m-8.33 2.43a7.375 7.375 0 0 1 6.942 0M20.33 12a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z'
      />
    </svg>
  )
}
