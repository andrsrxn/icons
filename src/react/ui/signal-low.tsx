import type { Icon } from './types'

export const IconSignalLow: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='signal-low'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.528 17.215c.08-.188.08-.428.08-.908 0-.874 0-1.31-.157-1.556a1 1 0 0 0-.91-.46c-.291.02-.643.278-1.346.796-1.02.752-1.53 1.128-1.626 1.448a1 1 0 0 0 .357 1.086c.267.2.9.2 2.167.2.48 0 .72 0 .909-.08a1 1 0 0 0 .526-.526Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.69 12.89-1.4 1.031c-1.706 1.258-2.56 1.886-2.68 2.436a1.5 1.5 0 0 0 .477 1.453c.424.37 1.484.37 3.603.37m0-5.29v5.29m0-5.29 4.103-3.024M7.69 18.181h4.103m0 0V9.866m0 8.315h4.104m0 0H17c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V8.916c0-1.836 0-2.754-.445-3.195a1.5 1.5 0 0 0-.822-.415c-.619-.097-1.358.447-2.836 1.537l-4.104 3.023m4.104 8.315V6.843'
      />
    </svg>
  )
}
