import type { Icon } from '../types'

export const IconLogoSandbox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-sandbox'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.067 18.46v-4.494l-3.932-2.152v4.104a.655.655 0 0 0 .34.573l3.592 1.968Zm11.457-1.967a.656.656 0 0 0 .341-.573v-4.105l-3.932 2.151v4.493l3.591-1.966ZM15.675 5.4l-3.36-1.838a.656.656 0 0 0-.63 0l-3.359 1.84L12 7.412 15.675 5.4Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 12v8.52M12 12 4.228 7.745M12 12l7.772-4.255m-15.635 4.07 3.93 2.151v4.493m11.798-6.646-3.932 2.153v4.493M8.325 5.4 12 7.412 15.675 5.4m-3.36-1.838 7.21 3.947a.655.655 0 0 1 .34.573v7.836a.655.655 0 0 1-.34.573l-7.21 3.948a.655.655 0 0 1-.63 0l-7.21-3.948a.655.655 0 0 1-.34-.573V8.082a.655.655 0 0 1 .34-.573l7.21-3.947a.655.655 0 0 1 .63 0Z'
      />
    </svg>
  )
}
