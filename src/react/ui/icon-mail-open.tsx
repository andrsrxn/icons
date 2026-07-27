import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi43NiAxMS4xNDdjLTEuMzc1LS45NDMtMi4wNjItMS40MTUtMi41OTYtMS4xMzMtLjUzNC4yOC0uNTM0IDEuMTE1LS41MzQgMi43ODN2NC40N2MwIC45NDMgMCAxLjQxNC4yOTMgMS43MDcuMjkzLjI5My43NjQuMjkzIDEuNzA3LjI5M2gxMi43NGMuOTQzIDAgMS40MTQgMCAxLjcwNy0uMjkzLjI5My0uMjkzLjI5My0uNzY0LjI5My0xLjcwN3YtNC41MDJjMC0xLjY1NSAwLTIuNDgzLS41My0yLjc2NS0uNTMyLS4yODItMS4yMTguMTgxLTIuNTkgMS4xMDhsLTIuNjkzIDEuODJjLS4yNTIuMTctLjM3OC4yNTYtLjUyLjMtLjE0NC4wNDMtLjI5Ni4wNDMtLjYuMDQzSDEwLjQ4Yy0uMzA4IDAtLjQ2MiAwLS42MDYtLjA0NC0uMTQ1LS4wNDUtLjI3Mi0uMTMyLS41MjUtLjMwNkw2Ljc2IDExLjE0N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im00LjM0NCA5Ljc4NSA1LjIwNy00LjAzNmMxLjE5Ni0uOTIgMS43OTQtMS4zOCAyLjQ5OC0xLjM4LjcwMyAwIDEuMzAxLjQ2IDIuNDk3IDEuMzhsNS4xMjMgMy45NjFjLjQ2NS40MzcuNTggMS4xMjguNTggMi44OTJ2My4zMjZjMCAxLjc0NSAwIDIuNjE4LS41NzggMy4xNi0uNTc3LjU0My0xLjUwNi41NDMtMy4zNjQuNTQzSDcuNjkyYy0xLjg1OCAwLTIuNzg3IDAtMy4zNjQtLjU0My0uNTc3LS41NDItLjU3Ny0xLjQxNS0uNTc3LTMuMTZWMTIuNzZjMC0xLjgyMy4wODYtMi41LjU5Mi0yLjk3NlpNMTkuNjcgOS43MWMtLjUwMi0uMzU1LTEuMjg1LjMzNy0yLjY5NCAxLjUwMmwtMS4yMTIgMS4wMDJjLS41NTMuNDU3LS44MjkuNjg1LTEuMTY1LjgwNS0uMzM2LjExOS0uNzA0LjExOS0xLjQ0LjExOWgtMi41NjJjLS43NjcgMC0xLjE1IDAtMS40OTgtLjEyOS0uMzQ4LS4xMjktLjYyOS0uMzc0LTEuMTktLjg2NWwtLjg0Mi0uNzM3Yy0xLjQyLTEuMjQzLTIuMTMtMS44NjQtMi43MjItMS42MjIiLz48L3N2Zz4=)
 */
export const IconMailOpen: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-mail-open'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M6.76 11.147c-1.375-.943-2.062-1.415-2.596-1.133-.534.28-.534 1.115-.534 2.783v4.47c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h12.74c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-4.502c0-1.655 0-2.483-.53-2.765-.532-.282-1.218.181-2.59 1.108l-2.693 1.82c-.252.17-.378.256-.52.3-.144.043-.296.043-.6.043H10.48c-.308 0-.462 0-.606-.044-.145-.045-.272-.132-.525-.306L6.76 11.147Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m4.344 9.785 5.207-4.036c1.196-.92 1.794-1.38 2.498-1.38.703 0 1.301.46 2.497 1.38l5.123 3.961c.465.437.58 1.128.58 2.892v3.326c0 1.745 0 2.618-.578 3.16-.577.543-1.506.543-3.364.543H7.692c-1.858 0-2.787 0-3.364-.543-.577-.542-.577-1.415-.577-3.16V12.76c0-1.823.086-2.5.592-2.976ZM19.67 9.71c-.502-.355-1.285.337-2.694 1.502l-1.212 1.002c-.553.457-.829.685-1.165.805-.336.119-.704.119-1.44.119h-2.562c-.767 0-1.15 0-1.498-.129-.348-.129-.629-.374-1.19-.865l-.842-.737c-1.42-1.243-2.13-1.864-2.722-1.622'
      />
    </svg>
  )
}
