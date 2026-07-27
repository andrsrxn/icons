import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQuMTMzIDUuMTE2YzAtLjQ2MyAwLS42OTUuNTYtLjgzOS41NTktLjE0NCAxLjQ1OC0uMTQ0IDMuMjU4LS4xNDRoOC4wOThjMS44IDAgMi43IDAgMy4yNTkuMTQ0LjU1OS4xNDQuNTU5LjM3Ni41NTkuODM5VjcuMmMwIC40NjMgMCAuNjk0LS41Ni44MzgtLjU1OC4xNDQtMS40NTguMTQ0LTMuMjU4LjE0NEg3Ljk1Yy0xLjggMC0yLjcgMC0zLjI1OS0uMTQ0LS41NTktLjE0NC0uNTU5LS4zNzUtLjU1OS0uODM4VjUuMTE2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTQuMTMzIDguMTgyaDE1LjczNE00LjEzMyAxMmgxNS43MzRtLTEwLjczIDcuNzcyVjguMTgybTUuNzI2IDExLjY4NVY4LjI3N20tMTAuNzMgNy41NGgxNS43MzRNNy45NSAxOS44NjhoOC4wOThjMS44IDAgMi43IDAgMy4yNTktLjU2LjU1OS0uNTU4LjU1OS0xLjQ1OC41NTktMy4yNTh2LTguMWMwLTEuOCAwLTIuNy0uNTYtMy4yNTktLjU1OC0uNTU5LTEuNDU4LS41NTktMy4yNTgtLjU1OUg3Ljk1Yy0xLjggMC0yLjcgMC0zLjI1OS41Ni0uNTU5LjU1OS0uNTU5IDEuNDU4LS41NTkgMy4yNTh2OC4wOThjMCAxLjggMCAyLjcuNTYgMy4yNTkuNTU5LjU1OSAxLjQ1OC41NTkgMy4yNTguNTU5WiIvPjwvc3ZnPg==)
 */
export const IconTable: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-table'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.133 5.116c0-.463 0-.695.56-.839.559-.144 1.458-.144 3.258-.144h8.098c1.8 0 2.7 0 3.259.144.559.144.559.376.559.839V7.2c0 .463 0 .694-.56.838-.558.144-1.458.144-3.258.144H7.95c-1.8 0-2.7 0-3.259-.144-.559-.144-.559-.375-.559-.838V5.116Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.133 8.182h15.734M4.133 12h15.734m-10.73 7.772V8.182m5.726 11.685V8.277m-10.73 7.54h15.734M7.95 19.868h8.098c1.8 0 2.7 0 3.259-.56.559-.558.559-1.458.559-3.258v-8.1c0-1.8 0-2.7-.56-3.259-.558-.559-1.458-.559-3.258-.559H7.95c-1.8 0-2.7 0-3.259.56-.559.559-.559 1.458-.559 3.258v8.098c0 1.8 0 2.7.56 3.259.559.559 1.458.559 3.258.559Z'
      />
    </svg>
  )
}
