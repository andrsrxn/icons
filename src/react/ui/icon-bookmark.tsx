import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuNjUgMTcuMjAxVjguMDE4YzAtMS44ODYgMC0yLjgyOS41ODUtMy40MTUuNTg2LS41ODUgMS41MjktLjU4NSAzLjQxNC0uNTg1aDQuNzAyYzEuODg1IDAgMi44MjggMCAzLjQxNC41ODUuNTg2LjU4Ni41ODYgMS41MjkuNTg2IDMuNDE1VjE3LjJjMCAxLjg1MiAwIDIuNzc3LS41NzcgMy4wNDdzLTEuMjg3LS4zMjUtMi43MDctMS41MTNsLTEuNzg0LTEuNDkyYy0uNjEzLS41MTMtLjkyLS43Ny0xLjI4My0uNzctLjM2MyAwLS42Ny4yNTctMS4yODMuNzdsLTEuNzg0IDEuNDkyYy0xLjQyIDEuMTg4LTIuMTMgMS43ODItMi43MDcgMS41MTMtLjU3Ny0uMjctLjU3Ny0xLjE5NS0uNTc3LTMuMDQ3WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUuNjUgMTcuMjE3di05LjJjMC0xLjg4NSAwLTIuODI4LjU4NS0zLjQxNC41ODYtLjU4NSAxLjUyOS0uNTg1IDMuNDE0LS41ODVoNC43MDJjMS44ODUgMCAyLjgyOCAwIDMuNDE0LjU4NS41ODYuNTg2LjU4NiAxLjUyOS41ODYgMy40MTV2OS4xOTljMCAxLjg0NSAwIDIuNzY4LS41NzYgMy4wMzgtLjU3NS4yNy0xLjI4NS0uMzItMi43MDMtMS41MDFsLTEuNzkzLTEuNDkxYy0uNjExLS41MS0uOTE3LS43NjQtMS4yNzktLjc2NC0uMzYyIDAtLjY2Ny4yNTUtMS4yOC43NjRsLTEuNzkyIDEuNDkxYy0xLjQxOCAxLjE4LTIuMTI4IDEuNzctMi43MDMgMS41LS41NzYtLjI2OS0uNTc2LTEuMTkyLS41NzYtMy4wMzdaIi8+PC9zdmc+)
 */
export const IconBookmark: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-bookmark'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.65 17.201V8.018c0-1.886 0-2.829.585-3.415.586-.585 1.529-.585 3.414-.585h4.702c1.885 0 2.828 0 3.414.585.586.586.586 1.529.586 3.415V17.2c0 1.852 0 2.777-.577 3.047s-1.287-.325-2.707-1.513l-1.784-1.492c-.613-.513-.92-.77-1.283-.77-.363 0-.67.257-1.283.77l-1.784 1.492c-1.42 1.188-2.13 1.782-2.707 1.513-.577-.27-.577-1.195-.577-3.047Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.65 17.217v-9.2c0-1.885 0-2.828.585-3.414.586-.585 1.529-.585 3.414-.585h4.702c1.885 0 2.828 0 3.414.585.586.586.586 1.529.586 3.415v9.199c0 1.845 0 2.768-.576 3.038-.575.27-1.285-.32-2.703-1.501l-1.793-1.491c-.611-.51-.917-.764-1.279-.764-.362 0-.667.255-1.28.764l-1.792 1.491c-1.418 1.18-2.128 1.77-2.703 1.5-.576-.269-.576-1.192-.576-3.037Z'
      />
    </svg>
  )
}
