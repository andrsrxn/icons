import type { Icon } from './types'

export const IconTable: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='table'
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
