import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjM0MiA2LjM1NGMuNzU2LTEuMzEgMS4xMzQtMS45NjQgMS43LTEuOTY0LjU2OCAwIC45NDYuNjU0IDEuNzAxIDEuOTY0bDUuOTUzIDEwLjMxYy43NTYgMS4zMSAxLjEzNCAxLjk2NC44NSAyLjQ1NS0uMjgzLjQ5MS0xLjAzOS40OTEtMi41NS40OTFINi4wOWMtMS41MTIgMC0yLjI2OCAwLTIuNTUyLS40OS0uMjgzLS40OTIuMDk1LTEuMTQ2Ljg1LTIuNDU2bDUuOTU0LTEwLjMxWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMC4zNDIgNi4zNTRjLjc1Ni0xLjMxIDEuMTM0LTEuOTY0IDEuNy0xLjk2NC41NjggMCAuOTQ2LjY1NCAxLjcwMSAxLjk2NGw1Ljk1MyAxMC4zMWMuNzU2IDEuMzEgMS4xMzQgMS45NjQuODUgMi40NTUtLjI4My40OTEtMS4wMzkuNDkxLTIuNTUuNDkxSDYuMDljLTEuNTEyIDAtMi4yNjggMC0yLjU1Mi0uNDktLjI4My0uNDkyLjA5NS0xLjE0Ni44NS0yLjQ1Nmw1Ljk1NC0xMC4zMVoiLz48L3N2Zz4=)
 */
export const IconTriangle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-triangle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.342 6.354c.756-1.31 1.134-1.964 1.7-1.964.568 0 .946.654 1.701 1.964l5.953 10.31c.756 1.31 1.134 1.964.85 2.455-.283.491-1.039.491-2.55.491H6.09c-1.512 0-2.268 0-2.552-.49-.283-.492.095-1.146.85-2.456l5.954-10.31Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.342 6.354c.756-1.31 1.134-1.964 1.7-1.964.568 0 .946.654 1.701 1.964l5.953 10.31c.756 1.31 1.134 1.964.85 2.455-.283.491-1.039.491-2.55.491H6.09c-1.512 0-2.268 0-2.552-.49-.283-.492.095-1.146.85-2.456l5.954-10.31Z'
      />
    </svg>
  )
}
