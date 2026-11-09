import type { Icon } from './types'

export const IconSofa: Icon = ({
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
      data-slot='icon-ui-sofa'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m4.8 9.21.02-.28A4 4 0 0 1 8.67 5.4h6.85a4 4 0 0 1 3.77 3.4l.05.41-1.59 1.9-.1 3.56H6.5l-.17-3.36z'
        fill='currentColor'
      />
      <path
        d='M19.4 9.44v-.77a4 4 0 0 0-3.65-3.65C15.58 5 15.38 5 14.98 5H9.03c-.4 0-.6 0-.77.02a4 4 0 0 0-3.65 3.65l-.01.77'
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
      <path d='M3.91 14.16a2.36 2.36 0 1 1 2.37-2.36' stroke='currentColor' />
      <path d='M20.09 14.21a2.36 2.36 0 1 0-2.37-2.36' stroke='currentColor' />
    </svg>
  )
}
