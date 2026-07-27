import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTYuMjIyIDEyLjI5OCA2Ljc5LTguNTY3Yy4zMzItLjQxNy45OTktLjA5Ny44OC40MjJMMTIuNTggOS44ODZhLjUuNSAwIDAgMCAuNDg3LjYxMmg0LjQ4M2EuNS41IDAgMCAxIC4zOTEuODExbC03LjExNiA4LjkyYy0uMzM0LjQxOC0xLjAwNC4wOS0uODc3LS40MzFsMS40OC02LjA3MWEuNS41IDAgMCAwLS40ODUtLjYxOUg2LjYxNGEuNS41IDAgMCAxLS4zOTItLjgxWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTYuMjIyIDEyLjI5OCA2Ljc5LTguNTY3Yy4zMzItLjQxNy45OTktLjA5Ny44OC40MjJMMTIuNTggOS44ODZhLjUuNSAwIDAgMCAuNDg3LjYxMmg0LjQ4M2EuNS41IDAgMCAxIC4zOTEuODExbC03LjExNiA4LjkyYy0uMzM0LjQxOC0xLjAwNC4wOS0uODc3LS40MzFsMS40OC02LjA3MWEuNS41IDAgMCAwLS40ODUtLjYxOUg2LjYxNGEuNS41IDAgMCAxLS4zOTItLjgxWiIvPjwvc3ZnPg==)
 */
export const IconLightning: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-lightning'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m6.222 12.298 6.79-8.567c.332-.417.999-.097.88.422L12.58 9.886a.5.5 0 0 0 .487.612h4.483a.5.5 0 0 1 .391.811l-7.116 8.92c-.334.418-1.004.09-.877-.431l1.48-6.071a.5.5 0 0 0-.485-.619H6.614a.5.5 0 0 1-.392-.81Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m6.222 12.298 6.79-8.567c.332-.417.999-.097.88.422L12.58 9.886a.5.5 0 0 0 .487.612h4.483a.5.5 0 0 1 .391.811l-7.116 8.92c-.334.418-1.004.09-.877-.431l1.48-6.071a.5.5 0 0 0-.485-.619H6.614a.5.5 0 0 1-.392-.81Z'
      />
    </svg>
  )
}
