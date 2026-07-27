import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuNTI4IDE3LjIxNWMuMDgtLjE4OC4wOC0uNDI4LjA4LS45MDggMC0uODc0IDAtMS4zMS0uMTU3LTEuNTU2YTEgMSAwIDAgMC0uOTEtLjQ2Yy0uMjkxLjAyLS42NDMuMjc4LTEuMzQ2Ljc5Ni0xLjAyLjc1Mi0xLjUzIDEuMTI4LTEuNjI2IDEuNDQ4YTEgMSAwIDAgMCAuMzU3IDEuMDg2Yy4yNjcuMi45LjIgMi4xNjcuMi40OCAwIC43MiAwIC45MDktLjA4YTEgMSAwIDAgMCAuNTI2LS41MjZaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtNy42OSAxMi44OS0xLjQgMS4wMzFjLTEuNzA2IDEuMjU4LTIuNTYgMS44ODYtMi42OCAyLjQzNmExLjUgMS41IDAgMCAwIC40NzcgMS40NTNjLjQyNC4zNyAxLjQ4NC4zNyAzLjYwMy4zN20wLTUuMjl2NS4yOW0wLTUuMjkgNC4xMDMtMy4wMjRNNy42OSAxOC4xODFoNC4xMDNtMCAwVjkuODY2bTAgOC4zMTVoNC4xMDRtMCAwSDE3YzEuNDE0IDAgMi4xMjEgMCAyLjU2LS40NC40NC0uNDM5LjQ0LTEuMTQ2LjQ0LTIuNTZWOC45MTZjMC0xLjgzNiAwLTIuNzU0LS40NDUtMy4xOTVhMS41IDEuNSAwIDAgMC0uODIyLS40MTVjLS42MTktLjA5Ny0xLjM1OC40NDctMi44MzYgMS41MzdsLTQuMTA0IDMuMDIzbTQuMTA0IDguMzE1VjYuODQzIi8+PC9zdmc+)
 */
export const IconSignalLow: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-signal-low'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.528 17.215c.08-.188.08-.428.08-.908 0-.874 0-1.31-.157-1.556a1 1 0 0 0-.91-.46c-.291.02-.643.278-1.346.796-1.02.752-1.53 1.128-1.626 1.448a1 1 0 0 0 .357 1.086c.267.2.9.2 2.167.2.48 0 .72 0 .909-.08a1 1 0 0 0 .526-.526Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.69 12.89-1.4 1.031c-1.706 1.258-2.56 1.886-2.68 2.436a1.5 1.5 0 0 0 .477 1.453c.424.37 1.484.37 3.603.37m0-5.29v5.29m0-5.29 4.103-3.024M7.69 18.181h4.103m0 0V9.866m0 8.315h4.104m0 0H17c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V8.916c0-1.836 0-2.754-.445-3.195a1.5 1.5 0 0 0-.822-.415c-.619-.097-1.358.447-2.836 1.537l-4.104 3.023m4.104 8.315V6.843'
      />
    </svg>
  )
}
