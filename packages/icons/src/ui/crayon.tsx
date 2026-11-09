import type { Icon } from './types'

export const IconCrayon: Icon = ({
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
      data-slot='icon-ui-crayon'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M9.37 16c.67.67 1 1 1.42 1s.75-.33 1.41-1l9.38-9.38c.67-.66 1-1 1-1.41s-.33-.75-1-1.41l-1.45-1.45c-.67-.67-1-1-1.42-1s-.74.33-1.41 1l-9.38 9.37c-.66.67-1 1-1 1.42s.34.74 1 1.41z'
        fill='currentColor'
      />
      <path opacity='.2' d='m1.55 21.86 6.56-1.26-4.76-4.82z' fill='currentColor' />
      <path
        d='m2.23 19.16.37-1.2c.21-.7.32-1.06.51-1.37.2-.32.45-.58.98-1.1l12.8-12.8c.74-.75 1.11-1.12 1.54-1.27a2 2 0 0 1 1.34 0c.42.15.8.52 1.54 1.27.75.74 1.12 1.12 1.27 1.54a2 2 0 0 1 0 1.34c-.15.43-.52.8-1.27 1.54L8.62 19.81c-.58.57-.87.86-1.22 1.06s-.74.3-1.54.5l-1.22.32c-1.53.38-2.3.58-2.7.16-.4-.43-.17-1.18.29-2.69'
        stroke='currentColor'
      />
      <path d='m8.03 20.28-4.34-4.35' stroke='currentColor' />
      <path d='M10.8 17.44 6.46 13.1' stroke='currentColor' />
    </svg>
  )
}
