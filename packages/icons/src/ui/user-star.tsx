import type { Icon } from './types'

export const IconUserStar: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-user-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.4 7.92a5.33 5.33 0 1 1-10.65 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.47 21.84H1.77a8.4 8.4 0 0 1 8.3-8.46c2.9 0 5.44 1.5 6.93 3.8-3-.4-1 1.52-.53 4.66'
        fill='currentColor'
      />
      <path
        d='M15.4 7.92a5.3 5.3 0 0 1-5.33 5.33 5.33 5.33 0 1 1 5.34-5.33'
        stroke='currentColor'
      />
      <path
        d='M17.74 15.63c.39-.76.58-1.14.89-1.14.3 0 .5.38.89 1.14l.27.55c.12.22.17.33.27.4s.22.1.47.13l.6.1c.85.13 1.27.2 1.36.49s-.2.6-.81 1.2l-.43.43c-.18.18-.26.27-.3.38s-.02.24.02.48l.1.6c.13.85.2 1.28-.05 1.45-.25.18-.63 0-1.4-.4l-.54-.27c-.22-.12-.33-.17-.45-.17s-.23.05-.46.17l-.54.27c-.76.4-1.15.58-1.4.4-.24-.17-.17-.6-.04-1.45l.1-.6c.03-.24.05-.37.02-.48s-.13-.2-.3-.38l-.44-.43c-.6-.6-.9-.91-.81-1.2.1-.3.52-.36 1.36-.5l.6-.09c.25-.04.37-.06.47-.13s.16-.18.27-.4z'
        stroke='currentColor'
      />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 12.32-7.26' stroke='currentColor' />
    </svg>
  )
}
