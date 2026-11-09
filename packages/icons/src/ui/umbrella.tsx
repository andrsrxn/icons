import type { Icon } from './types'

export const IconUmbrella: Icon = ({
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
      data-slot='icon-ui-umbrella'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='m4.29 5.23 5.27-2.82-.9 9.16-2.8-1.23-4.28 1.23z' fill='currentColor' />
      <path opacity='.2' d='m19.6 5.23-5.26-2.82.9 9.16 2.8-1.23 4.28 1.23z' fill='currentColor' />
      <path
        d='M22.32 12.29c0-5.58-4.6-10.1-10.29-10.1A10.2 10.2 0 0 0 1.74 12.3'
        stroke='currentColor'
      />
      <path
        d='M15.54 12.29c0-5.58-1.57-10.1-3.5-10.1-1.95 0-3.52 4.52-3.52 10.1'
        stroke='currentColor'
      />
      <path
        d='M15.54 12.29c-.49-1.03-2.01-1.87-3.5-1.87s-3.23.92-3.52 1.87'
        stroke='currentColor'
      />
      <path
        d='M8.52 12.29c-.47-1.03-1.94-1.87-3.39-1.87-1.44 0-3.1.92-3.39 1.87'
        stroke='currentColor'
      />
      <path
        d='M22.2 12.29c-.46-1.03-1.91-1.87-3.33-1.87s-3.05.92-3.33 1.87'
        stroke='currentColor'
      />
      <path
        d='M12.03 11.05v8.18a3 3 0 0 1-2.93 2.93h-.46a2.8 2.8 0 0 1-2.78-2.78'
        stroke='currentColor'
      />
    </svg>
  )
}
