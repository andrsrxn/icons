import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTEwLjM3OCAxMi4yNzYgNS44ODUtNy40MjRjLjI4Ny0uMzYyLjg2NS0uMDg0Ljc2Mi4zNjZsLTEuMTM3IDQuOTY4YS40MzMuNDMzIDAgMCAwIC40MjIuNTNoMy44ODZjLjM2MyAwIC41NjUuNDIuMzM4LjcwNGwtNi4xNjcgNy43MjljLS4yOS4zNjMtLjg3LjA3OC0uNzYtLjM3M2wxLjI4My01LjI2MWEuNDMzLjQzMyAwIDAgMC0uNDItLjUzN2gtMy43NTJhLjQzMy40MzMgMCAwIDEtLjM0LS43MDJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTAuMjg0IDdING02IDEwSDRtMy40NDgtNUg0bTEyLjI2My03LjgxOC01Ljg4NSA4LjEyYy0uMjI1LjMxLS4wMjMuNzY4LjM0Ljc2OGgzLjc1MmMuMjggMCAuNDg3LjI4OC40Mi41ODZsLTEuMjgzIDUuNzU1Yy0uMTEuNDk0LjQ3LjgwNS43Ni40MDhsNi4xNjctOC40NTRjLjIyNy0uMzEuMDI1LS43Ny0uMzM4LS43N0gxNi4zMWMtLjI3OCAwLS40ODQtLjI4Mi0uNDIyLS41NzlsMS4xMzctNS40MzRjLjEwMy0uNDkyLS40NzUtLjc5Ni0uNzYyLS40WiIvPjwvc3ZnPg==)
 */
export const IconLightningFast: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-lightning-fast'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m10.378 12.276 5.885-7.424c.287-.362.865-.084.762.366l-1.137 4.968a.433.433 0 0 0 .422.53h3.886c.363 0 .565.42.338.704l-6.167 7.729c-.29.363-.87.078-.76-.373l1.283-5.261a.433.433 0 0 0-.42-.537h-3.752a.433.433 0 0 1-.34-.702Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.284 7H4m6 10H4m3.448-5H4m12.263-7.818-5.885 8.12c-.225.31-.023.768.34.768h3.752c.28 0 .487.288.42.586l-1.283 5.755c-.11.494.47.805.76.408l6.167-8.454c.227-.31.025-.77-.338-.77H16.31c-.278 0-.484-.282-.422-.579l1.137-5.434c.103-.492-.475-.796-.762-.4Z'
      />
    </svg>
  )
}
