import type { Icon } from './types'

export const IconDevicePcShield: Icon = ({
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
      data-slot='icon-ui-device-pc-shield'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.26 10.21c0-3.18 0-4.77-.95-5.78l-.14-.14c-1.02-.96-2.6-.96-5.78-.96H8.6c-3.18 0-4.76 0-5.78.96l-.14.14c-.95 1.01-.95 2.6-.95 5.78s0 4.77.95 5.78l.14.14c1.02.95 2.6.95 5.78.95h6.78c3.18 0 4.76 0 5.78-.95l.14-.14c.95-1.01.95-2.6.95-5.78m-10.8 3.97c.3.23.74.23 1.04 0 .8-.6 1.88-1.47 2.24-2.18.18-.35.36-.88.52-1.45a3.2 3.2 0 0 0-1.76-3.71 3.5 3.5 0 0 0-3.1.03l-.08.04.05-.03a3.9 3.9 0 0 0-1.75 3.78c0 .04-.13-.54-.08-.3.19.78.44 1.52.8 1.93.57.66 1.48 1.38 2.13 1.89'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.61 17.08h6.78c3.18 0 4.76 0 5.78-.95l.14-.14c.95-1.01.95-2.6.95-5.78v0c0-3.18 0-4.77-.95-5.78l-.14-.14c-1.02-.96-2.6-.96-5.78-.96H8.6c-3.18 0-4.76 0-5.78.96l-.14.14c-.95 1.01-.95 2.6-.95 5.78v0c0 3.18 0 4.77.95 5.78l.14.14c1.02.95 2.6.95 5.78.95'
        stroke='currentColor'
      />
      <path d='M7.64 21.2h8.7' stroke='currentColor' />
      <path d='M12 21.2v-3.99' stroke='currentColor' />
      <path d='M12 6c-.56.5-2.1 1.6-3.72 2' stroke='currentColor' />
      <path d='M12 6c.56.5 2.1 1.6 3.72 2' stroke='currentColor' />
      <path d='M15.72 8c0 2.34-.88 5-3.72 6.41' stroke='currentColor' />
      <path d='M8.28 8c0 2.34.88 5 3.72 6.41' stroke='currentColor' />
    </svg>
  )
}
