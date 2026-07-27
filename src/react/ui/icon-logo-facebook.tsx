import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi44IDEwLjcxOGMtLjgzMyAwLTEuMDA2LjE2My0xLjAwNi45NDV2MS40MThjMCAuNzgzLjE3My45NDYgMS4wMDUuOTQ2aDIuMDEydjUuNjcyYzAgLjc4Mi4xNzMuOTQ2IDEuMDA1Ljk0NmgyLjAxMWMuODMyIDAgMS4wMDYtLjE2NCAxLjAwNi0uOTQ2di01LjY3MmgyLjI1OGMuNjMxIDAgLjc5NC0uMTE1Ljk2Ny0uNjg2bC40MzEtMS40MThjLjI5Ny0uOTc3LjExNC0xLjIwNS0uOTY3LTEuMjA1aC0yLjY5VjguMzU0YzAtLjUyMi40NTEtLjk0NSAxLjAwNi0uOTQ1aDIuODYzYy44MzEgMCAxLjAwNS0uMTYzIDEuMDA1LS45NDZ2LTEuODljMC0uNzgzLS4xNzQtLjk0Ni0xLjAwNS0uOTQ2aC0yLjg2M2MtMi43NzYgMC01LjAyNyAyLjExNy01LjAyNyA0LjcyN3YyLjM2NEg2Ljc5OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjggMTAuNzE4Yy0uODMzIDAtMS4wMDYuMTYzLTEuMDA2Ljk0NXYxLjQxOGMwIC43ODMuMTczLjk0NiAxLjAwNS45NDZoMi4wMTJ2NS42NzJjMCAuNzgyLjE3My45NDYgMS4wMDUuOTQ2aDIuMDExYy44MzIgMCAxLjAwNi0uMTY0IDEuMDA2LS45NDZ2LTUuNjcyaDIuMjU4Yy42MzEgMCAuNzk0LS4xMTUuOTY3LS42ODZsLjQzMS0xLjQxOGMuMjk3LS45NzcuMTE0LTEuMjA1LS45NjctMS4yMDVoLTIuNjlWOC4zNTRjMC0uNTIyLjQ1MS0uOTQ1IDEuMDA2LS45NDVoMi44NjNjLjgzMSAwIDEuMDA1LS4xNjMgMS4wMDUtLjk0NnYtMS44OWMwLS43ODMtLjE3NC0uOTQ2LTEuMDA1LS45NDZoLTIuODYzYy0yLjc3NiAwLTUuMDI3IDIuMTE3LTUuMDI3IDQuNzI3djIuMzY0SDYuNzk5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
 */
export const IconLogoFacebook: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-facebook'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M6.8 10.718c-.833 0-1.006.163-1.006.945v1.418c0 .783.173.946 1.005.946h2.012v5.672c0 .782.173.946 1.005.946h2.011c.832 0 1.006-.164 1.006-.946v-5.672h2.258c.631 0 .794-.115.967-.686l.431-1.418c.297-.977.114-1.205-.967-1.205h-2.69V8.354c0-.522.451-.945 1.006-.945h2.863c.831 0 1.005-.163 1.005-.946v-1.89c0-.783-.174-.946-1.005-.946h-2.863c-2.776 0-5.027 2.117-5.027 4.727v2.364H6.799Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.8 10.718c-.833 0-1.006.163-1.006.945v1.418c0 .783.173.946 1.005.946h2.012v5.672c0 .782.173.946 1.005.946h2.011c.832 0 1.006-.164 1.006-.946v-5.672h2.258c.631 0 .794-.115.967-.686l.431-1.418c.297-.977.114-1.205-.967-1.205h-2.69V8.354c0-.522.451-.945 1.006-.945h2.863c.831 0 1.005-.163 1.005-.946v-1.89c0-.783-.174-.946-1.005-.946h-2.863c-2.776 0-5.027 2.117-5.027 4.727v2.364H6.799Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
