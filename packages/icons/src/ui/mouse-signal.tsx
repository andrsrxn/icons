import type { Icon } from './types'

export const IconMouseSignal: Icon = ({
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
      data-slot='icon-ui-mouse-signal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M5.8 19.55h12.4v3.2H5.8z' fill='currentColor' />
      <path d='M5.8 22.55v-8.02a6.2 6.2 0 0 1 12.4 0v8.02' stroke='currentColor' />
      <path d='M18.2 19.72H5.8' stroke='currentColor' />
      <path
        d='M11.94 17.04c-.95 0-1.73-.78-1.73-1.73V13.5c0-.95.78-1.72 1.73-1.72v0c.95 0 1.73.77 1.73 1.72v1.82c0 .95-.78 1.73-1.73 1.73'
        stroke='currentColor'
      />
      <path d='M11.97 19.7v-2.66' stroke='currentColor' />
      <path d='M11.97 11.72v-2.7' stroke='currentColor' />
      <path d='M14.12 5.6a3.5 3.5 0 0 0-4.35 0' stroke='currentColor' />
      <path d='M16.08 3.16c-2.17-1.95-6.23-1.85-8.16 0' stroke='currentColor' />
    </svg>
  )
}
