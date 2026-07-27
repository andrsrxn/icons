import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMTg1IDYuMzd2Mi44cy0yLjAzMy4wMTYtMi44MTUuMDE2QTIuODE1IDIuODE1IDAgMSAxIDkuMTg1IDYuMzdabTAgMTEuMjZ2LTIuOHMtMi4wMzMtLjAxNi0yLjgxNS0uMDE2YTIuODE1IDIuODE1IDAgMSAwIDIuODE1IDIuODE1Wm01LjYzLTExLjI2djIuOHMyLjAzMy4wMTYgMi44MTUuMDE2YTIuODE1IDIuODE1IDAgMSAwLTIuODE1LTIuODE1Wm0wIDExLjI2di0yLjhzMi4wMzMtLjAxNiAyLjgxNS0uMDE2YTIuODE1IDIuODE1IDAgMSAxLTIuODE1IDIuODE1WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjE4NSA2LjM3djIuOHMtMi4wMzMuMDE2LTIuODE1LjAxNkEyLjgxNSAyLjgxNSAwIDEgMSA5LjE4NSA2LjM3Wm0wIDExLjI2di0yLjhzLTIuMDMzLS4wMTYtMi44MTUtLjAxNmEyLjgxNSAyLjgxNSAwIDEgMCAyLjgxNSAyLjgxNVptNS42My0xMS4yNnYyLjhzMi4wMzQuMDE2IDIuODE1LjAxNmEyLjgxNSAyLjgxNSAwIDEgMC0yLjgxNS0yLjgxNVptMCAxMS4yNnYtMi44czIuMDM0LS4wMTYgMi44MTUtLjAxNmEyLjgxNSAyLjgxNSAwIDEgMS0yLjgxNSAyLjgxNVptLTUuNjMtOC40NDVoNS42M3Y1LjYzaC01LjYzdi01LjYzWiIvPjwvc3ZnPg==)
 */
export const IconKeyCommand: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-key-command'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.185 6.37v2.8s-2.033.016-2.815.016A2.815 2.815 0 1 1 9.185 6.37Zm0 11.26v-2.8s-2.033-.016-2.815-.016a2.815 2.815 0 1 0 2.815 2.815Zm5.63-11.26v2.8s2.033.016 2.815.016a2.815 2.815 0 1 0-2.815-2.815Zm0 11.26v-2.8s2.033-.016 2.815-.016a2.815 2.815 0 1 1-2.815 2.815Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.185 6.37v2.8s-2.033.016-2.815.016A2.815 2.815 0 1 1 9.185 6.37Zm0 11.26v-2.8s-2.033-.016-2.815-.016a2.815 2.815 0 1 0 2.815 2.815Zm5.63-11.26v2.8s2.034.016 2.815.016a2.815 2.815 0 1 0-2.815-2.815Zm0 11.26v-2.8s2.034-.016 2.815-.016a2.815 2.815 0 1 1-2.815 2.815Zm-5.63-8.445h5.63v5.63h-5.63v-5.63Z'
      />
    </svg>
  )
}
