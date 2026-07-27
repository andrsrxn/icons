import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuNDY5IDEyYzAgLjg5NyAwIDEuMzQ1LjE4NiAxLjY4M2ExLjUgMS41IDAgMCAwIC41OTEuNTkyYy4zMzguMTg1Ljc4Ni4xODUgMS42ODMuMTg1aDguMTQyYy44OTcgMCAxLjM0NSAwIDEuNjgzLS4xODVhMS41IDEuNSAwIDAgMCAuNTkxLS41OTJjLjE4Ni0uMzM4LjE4Ni0uNzg2LjE4Ni0xLjY4M3MwLTEuMzQ1LS4xODUtMS42ODNhMS41IDEuNSAwIDAgMC0uNTkyLS41OTJjLS4zMzgtLjE4NS0uNzg2LS4xODUtMS42ODMtLjE4NUg3LjkyOWMtLjg5NyAwLTEuMzQ1IDAtMS42ODMuMTg1YTEuNSAxLjUgMCAwIDAtLjU5MS41OTJjLS4xODYuMzM4LS4xODYuNzg2LS4xODYgMS42ODNaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuMjcgNS4wNTZIMy43M00yMC4yNyAxOS4wNkgzLjczbTQuMi05LjQ2M2g4LjE0Yy44OTggMCAxLjM0NiAwIDEuNjg0LjE4NmExLjUgMS41IDAgMCAxIC41OTEuNTkxYy4xODYuMzM4LjE4Ni43ODYuMTg2IDEuNjgzczAgMS4zNDYtLjE4NSAxLjY4M2ExLjUgMS41IDAgMCAxLS41OTIuNTkyYy0uMzM4LjE4NS0uNzg2LjE4NS0xLjY4My4xODVINy45MjljLS44OTcgMC0xLjM0NSAwLTEuNjgzLS4xODVhMS41IDEuNSAwIDAgMS0uNTkxLS41OTJjLS4xODYtLjMzNy0uMTg2LS43ODYtLjE4Ni0xLjY4M3MwLTEuMzQ1LjE4Ni0xLjY4M2ExLjUgMS41IDAgMCAxIC41OTEtLjU5MWMuMzM4LS4xODYuNzg2LS4xODYgMS42ODMtLjE4NloiLz48L3N2Zz4=)
 */
export const IconAlignVertically: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-align-vertically'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.469 12c0 .897 0 1.345.186 1.683a1.5 1.5 0 0 0 .591.592c.338.185.786.185 1.683.185h8.142c.897 0 1.345 0 1.683-.185a1.5 1.5 0 0 0 .591-.592c.186-.338.186-.786.186-1.683s0-1.345-.185-1.683a1.5 1.5 0 0 0-.592-.592c-.338-.185-.786-.185-1.683-.185H7.929c-.897 0-1.345 0-1.683.185a1.5 1.5 0 0 0-.591.592c-.186.338-.186.786-.186 1.683Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.27 5.056H3.73M20.27 19.06H3.73m4.2-9.463h8.14c.898 0 1.346 0 1.684.186a1.5 1.5 0 0 1 .591.591c.186.338.186.786.186 1.683s0 1.346-.185 1.683a1.5 1.5 0 0 1-.592.592c-.338.185-.786.185-1.683.185H7.929c-.897 0-1.345 0-1.683-.185a1.5 1.5 0 0 1-.591-.592c-.186-.337-.186-.786-.186-1.683s0-1.345.186-1.683a1.5 1.5 0 0 1 .591-.591c.338-.186.786-.186 1.683-.186Z'
      />
    </svg>
  )
}
