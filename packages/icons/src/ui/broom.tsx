import type { Icon } from './types'

export const IconBroom: Icon = ({
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
      data-slot='icon-ui-broom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m22.18 1.81-9.45 9.45' stroke='currentColor' />
      <path
        opacity='.2'
        d='M11.71 16.2c.42.41.62.62.84.7a1 1 0 0 0 .94-.16c.18-.13.31-.4.58-.91.3-.59.44-.88.5-1.17a2 2 0 0 0-.21-1.3 5 5 0 0 0-.84-.95l-1.82-1.82c-.46-.47-.7-.7-.96-.84a2 2 0 0 0-1.16-.22c-.3.03-.6.17-1.21.43-.6.27-.9.4-1.05.6a1 1 0 0 0-.17.9c.07.24.3.48.76.94z'
        fill='currentColor'
      />
      <path
        d='M7.18 21.16c.74.74 1.11 1.11 1.56 1.09s.78-.44 1.43-1.27l2.93-3.73a4 4 0 0 0 .21-5.39 6 6 0 0 0-.56-.58c-.3-.3-.44-.45-.59-.57a4 4 0 0 0-4.71-.29c-.16.1-.32.23-.66.49l-3.75 2.93c-.84.65-1.25.97-1.28 1.42s.35.82 1.1 1.57z'
        stroke='currentColor'
      />
      <path d='m6.68 11.17 6.2 6.26' stroke='currentColor' />
      <path d='m3.82 17.8 2.32-2.32' stroke='currentColor' />
    </svg>
  )
}
