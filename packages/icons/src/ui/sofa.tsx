import type { Icon } from './types'

export const IconSofa: Icon = ({
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
      data-slot='icon-ui-sofa'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.12 5.4h13.83l.39 3.81-1.59 1.9-.1 3.56H6.5l-.17-3.36L4.8 9.2z'
        fill='currentColor'
      />
      <path
        d='M19.4 9.44c0-1.34 0-2-.2-2.53a3 3 0 0 0-1.7-1.7c-.52-.2-1.19-.2-2.52-.2H9.03c-1.33 0-2 0-2.53.2a3 3 0 0 0-1.7 1.7c-.2.53-.2 1.2-.2 2.53'
        stroke='currentColor'
      />
      <path
        d='M20.71 14.16c0 1.71 0 2.57-.34 3.22a3 3 0 0 1-1.27 1.28c-.65.34-1.51.34-3.22.34H8.13c-1.71 0-2.57 0-3.22-.34a3 3 0 0 1-1.27-1.28c-.34-.65-.34-1.5-.34-3.22'
        stroke='currentColor'
      />
      <path
        d='M17.73 11.8v1c0 .94 0 1.42-.3 1.7-.28.3-.75.3-1.7.3H8.28c-.95 0-1.42 0-1.71-.3-.3-.28-.3-.76-.3-1.7v-1'
        stroke='currentColor'
      />
      <path d='M6.28 11.8a2.36 2.36 0 1 0-2.37 2.36' stroke='currentColor' />
      <path d='M20.09 14.21a2.36 2.36 0 1 0-2.37-2.36' stroke='currentColor' />
    </svg>
  )
}
