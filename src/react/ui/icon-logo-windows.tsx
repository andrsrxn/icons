import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTIwLjEzNiAyMC4xMzYtNy4zOTYtMS4zNDR2LTUuMzEzaDcuMzk2djYuNjU3Wk05Ljc4MSAxOC4yNTRsLTUuOTE3LTEuMDc2di0zLjY5OUg5Ljc4djQuNzc1Wm0xMC4zNTUtMTQuMzlMMTIuNzQgNS4yMDl2NS4zMTJoNy4zOTZWMy44NjRaTTkuNzgxIDUuNzQ2IDMuODY0IDYuODIydjMuNjk5SDkuNzhWNS43NDZaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMjAuMTM2IDIwLjEzNi03LjM5Ni0xLjM0NHYtNS4zMTNoNy4zOTZ2Ni42NTdaTTkuNzgxIDE4LjI1NGwtNS45MTctMS4wNzZ2LTMuNjk5SDkuNzh2NC43NzVabTEwLjM1NS0xNC4zOUwxMi43NCA1LjIwOXY1LjMxMmg3LjM5NlYzLjg2NFpNOS43ODEgNS43NDYgMy44NjQgNi44MjJ2My42OTlIOS43OFY1Ljc0NloiLz48L3N2Zz4=)
 */
export const IconLogoWindows: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-windows'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m20.136 20.136-7.396-1.344v-5.313h7.396v6.657ZM9.781 18.254l-5.917-1.076v-3.699H9.78v4.775Zm10.355-14.39L12.74 5.209v5.312h7.396V3.864ZM9.781 5.746 3.864 6.822v3.699H9.78V5.746Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m20.136 20.136-7.396-1.344v-5.313h7.396v6.657ZM9.781 18.254l-5.917-1.076v-3.699H9.78v4.775Zm10.355-14.39L12.74 5.209v5.312h7.396V3.864ZM9.781 5.746 3.864 6.822v3.699H9.78V5.746Z'
      />
    </svg>
  )
}
