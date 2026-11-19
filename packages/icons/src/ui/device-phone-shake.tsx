import type { Icon } from './types'

export const IconDevicePhoneShake: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-device-phone-shake'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.77 19.96c-2.2-1.27-3.3-1.9-3.67-2.95l-.12-.45c-.2-1.09.43-2.19 1.7-4.39l3.5-6.05c1.26-2.2 1.9-3.3 2.94-3.66l.45-.13c1.1-.2 2.2.44 4.4 1.7 2.2 1.28 3.3 1.91 3.66 2.96q.08.22.12.45c.2 1.09-.43 2.19-1.7 4.39l-3.5 6.05c-1.26 2.2-1.9 3.3-2.94 3.66l-.46.13c-1.08.2-2.18-.44-4.38-1.7'
        fill='currentColor'
      />
      <path
        d='m15.56 17.88 3.49-6.05c1.27-2.2 1.9-3.3 1.7-4.4L20.63 7c-.37-1.05-1.47-1.68-3.67-2.95v0c-2.2-1.27-3.3-1.9-4.39-1.7l-.45.12c-1.04.36-1.68 1.46-2.95 3.66l-3.49 6.05c-1.27 2.2-1.9 3.3-1.7 4.4l.12.44c.37 1.05 1.47 1.68 3.67 2.95v0c2.2 1.27 3.3 1.9 4.38 1.7l.46-.12c1.04-.36 1.68-1.46 2.95-3.66'
        stroke='currentColor'
      />
      <path d='m16.67 8.1-3.32-1.9' stroke='currentColor' />
      <path d='M2.12 11.27s.2-2.43 1.43-4.41a8.4 8.4 0 0 1 3.03-2.99' stroke='currentColor' />
      <path d='M17.29 20.78s2.13-1.1 3.27-3.1c1.15-1.98 1.19-4.3 1.19-4.3' stroke='currentColor' />
    </svg>
  )
}
