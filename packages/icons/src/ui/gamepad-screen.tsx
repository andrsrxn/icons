import type { Icon } from './types'

export const IconGamepadScreen: Icon = ({
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
      data-slot='icon-ui-gamepad-screen'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M6.73 16.51h3.94' stroke='currentColor' />
      <path d='M8.7 18.49v-3.94' stroke='currentColor' />
      <path
        d='M14.93 18.07a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.21 15.16a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M3.3 16.52a4.8 4.8 0 0 1 4.77-4.78h7.94a4.8 4.8 0 0 1 4.78 4.78v0A4.8 4.8 0 0 1 16 21.29H8.07a4.8 4.8 0 0 1-4.77-4.77'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.87 8.22c0-1.4 0-2.1.18-2.68A4 4 0 0 1 4.7 2.88c.57-.17 1.27-.17 2.67-.17h7.8c2.75 0 4.12 0 5.1.64a4 4 0 0 1 1.2 1.19c.63.99.63 2.36.63 5.1v1.82a1.84 1.84 0 0 1-2.94 1.47l-.71-.53a3 3 0 0 0-1.67-.56H8.42c-.54 0-.8 0-1.07.04a4 4 0 0 0-1.19.35 8 8 0 0 0-.92.55l-1.08.7a1.48 1.48 0 0 1-2.29-1.24z'
        fill='currentColor'
      />
      <path
        d='M4.19 13.72a2.46 2.46 0 0 1-2.46-2.45V8.22c0-1.4 0-2.1.17-2.68a4 4 0 0 1 2.66-2.66c.57-.17 1.27-.17 2.68-.17h9.52c1.4 0 2.1 0 2.68.17a4 4 0 0 1 2.66 2.66c.17.57.17 1.27.17 2.68v3.17a2.33 2.33 0 0 1-2.33 2.33'
        stroke='currentColor'
      />
    </svg>
  )
}
