import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNjU4IDkuMjg2YzAtMS4yMDYgMC0xLjgxLjU5My0yLjE4NC41OTMtLjM3NSAxLjU0Ny0uMzc1IDMuNDU2LS4zNzVoOC41ODZjMS45MDkgMCAyLjg2MyAwIDMuNDU2LjM3NS41OTMuMzc0LjU5My45NzguNTkzIDIuMTg0djUuNDI4YzAgMS4yMDcgMCAxLjgxLS41OTMgMi4xODQtLjU5My4zNzUtMS41NDcuMzc1LTMuNDU2LjM3NUg3LjcwN2MtMS45MDkgMC0yLjg2MyAwLTMuNDU2LS4zNzUtLjU5My0uMzc0LS41OTMtLjk3Ny0uNTkzLTIuMTg0VjkuMjg2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguMDI1IDE0LjEwN2g3Ljk1bS05LjA3LTMuMjI1YS40MTIuNDEyIDAgMSAwIDAtLjgyNC40MTIuNDEyIDAgMCAwIDAgLjgyNFptMy4zOTcgMGEuNDEyLjQxMiAwIDEgMCAwLS44MjQuNDEyLjQxMiAwIDAgMCAwIC44MjRabTMuMzk2IDBhLjQxMi40MTIgMCAxIDAgMC0uODI0LjQxMi40MTIgMCAwIDAgMCAuODI0Wm0zLjM5NiAwYS40MTIuNDEyIDAgMSAwIDAtLjgyNC40MTIuNDEyIDAgMCAwIDAgLjgyNFptLS43NTItNC4xNTVINy42NThjLTEuODg2IDAtMi44MjggMC0zLjQxNC41ODYtLjU4Ni41ODUtLjU4NiAxLjUyOC0uNTg2IDMuNDE0djIuNTQ2YzAgMS44ODYgMCAyLjgyOS41ODYgMy40MTQuNTg2LjU4NiAxLjUyOC41ODYgMy40MTQuNTg2aDguNjg0YzEuODg2IDAgMi44MjggMCAzLjQxNC0uNTg2LjU4Ni0uNTg1LjU4Ni0xLjUyOC41ODYtMy40MTR2LTIuNTQ2YzAtMS44ODYgMC0yLjgyOS0uNTg2LTMuNDE0LS41ODYtLjU4Ni0xLjUyOS0uNTg2LTMuNDE0LS41ODZaIi8+PC9zdmc+)
 */
export const IconKeyboard: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-keyboard'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.658 9.286c0-1.206 0-1.81.593-2.184.593-.375 1.547-.375 3.456-.375h8.586c1.909 0 2.863 0 3.456.375.593.374.593.978.593 2.184v5.428c0 1.207 0 1.81-.593 2.184-.593.375-1.547.375-3.456.375H7.707c-1.909 0-2.863 0-3.456-.375-.593-.374-.593-.977-.593-2.184V9.286Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.025 14.107h7.95m-9.07-3.225a.412.412 0 1 0 0-.824.412.412 0 0 0 0 .824Zm3.397 0a.412.412 0 1 0 0-.824.412.412 0 0 0 0 .824Zm3.396 0a.412.412 0 1 0 0-.824.412.412 0 0 0 0 .824Zm3.396 0a.412.412 0 1 0 0-.824.412.412 0 0 0 0 .824Zm-.752-4.155H7.658c-1.886 0-2.828 0-3.414.586-.586.585-.586 1.528-.586 3.414v2.546c0 1.886 0 2.829.586 3.414.586.586 1.528.586 3.414.586h8.684c1.886 0 2.828 0 3.414-.586.586-.585.586-1.528.586-3.414v-2.546c0-1.886 0-2.829-.586-3.414-.586-.586-1.529-.586-3.414-.586Z'
      />
    </svg>
  )
}
