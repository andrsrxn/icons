import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjk0MiAxOC41OWMuODk3IDAgMS4zNDUgMCAxLjY4My0uMTg2YTEuNSAxLjUgMCAwIDAgLjU5MS0uNTkyYy4xODYtLjMzOC4xODYtLjc4Ni4xODYtMS42ODNWNy45ODdjMC0uODk3IDAtMS4zNDUtLjE4Ni0xLjY4M2ExLjUgMS41IDAgMCAwLS41OTEtLjU5MWMtLjMzOC0uMTg2LS43ODYtLjE4Ni0xLjY4My0uMTg2cy0xLjM0NiAwLTEuNjgzLjE4NmExLjUgMS41IDAgMCAwLS41OTIuNTkxYy0uMTg1LjMzOC0uMTg1Ljc4Ni0uMTg1IDEuNjgzdjguMTQyYzAgLjg5NyAwIDEuMzQ1LjE4NSAxLjY4M2ExLjUgMS41IDAgMCAwIC41OTIuNTkyYy4zMzcuMTg1Ljc4Ni4xODUgMS42ODMuMTg1WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTQuOTk4IDMuNzl2MTYuNTM3TTE5LjAwMiAzLjc5djE2LjUzOE05LjU0IDE2LjEzVjcuOTg3YzAtLjg5NyAwLTEuMzQ1LjE4NS0xLjY4M2ExLjUgMS41IDAgMCAxIC41OTItLjU5MWMuMzM4LS4xODYuNzg2LS4xODYgMS42ODMtLjE4NnMxLjM0NSAwIDEuNjgzLjE4NmExLjUgMS41IDAgMCAxIC41OTIuNTkxYy4xODUuMzM4LjE4NS43ODYuMTg1IDEuNjgzdjguMTQyYzAgLjg5NyAwIDEuMzQ1LS4xODUgMS42ODNhMS41IDEuNSAwIDAgMS0uNTkyLjU5MmMtLjMzOC4xODUtLjc4Ni4xODUtMS42ODMuMTg1cy0xLjM0NSAwLTEuNjgzLS4xODVhMS41IDEuNSAwIDAgMS0uNTkyLS41OTJjLS4xODUtLjMzOC0uMTg1LS43ODYtLjE4NS0xLjY4M1oiLz48L3N2Zz4=)
 */
export const IconAlignHorizontally: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-align-horizontally'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.942 18.59c.897 0 1.345 0 1.683-.186a1.5 1.5 0 0 0 .591-.592c.186-.338.186-.786.186-1.683V7.987c0-.897 0-1.345-.186-1.683a1.5 1.5 0 0 0-.591-.591c-.338-.186-.786-.186-1.683-.186s-1.346 0-1.683.186a1.5 1.5 0 0 0-.592.591c-.185.338-.185.786-.185 1.683v8.142c0 .897 0 1.345.185 1.683a1.5 1.5 0 0 0 .592.592c.337.185.786.185 1.683.185Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.998 3.79v16.537M19.002 3.79v16.538M9.54 16.13V7.987c0-.897 0-1.345.185-1.683a1.5 1.5 0 0 1 .592-.591c.338-.186.786-.186 1.683-.186s1.345 0 1.683.186a1.5 1.5 0 0 1 .592.591c.185.338.185.786.185 1.683v8.142c0 .897 0 1.345-.185 1.683a1.5 1.5 0 0 1-.592.592c-.338.185-.786.185-1.683.185s-1.345 0-1.683-.185a1.5 1.5 0 0 1-.592-.592c-.185-.338-.185-.786-.185-1.683Z'
      />
    </svg>
  )
}
