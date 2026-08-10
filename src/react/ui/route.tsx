import type { Icon } from './types'

export const IconRoute: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='route'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9 6.26a2.74 2.74 0 1 1-5.49 0 2.74 2.74 0 0 1 5.49 0m11.49 11.48a2.74 2.74 0 1 1-5.49 0 2.74 2.74 0 0 1 5.49 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='m19 8.75-.75-.04zM5.01 15.33l-.75-.07zM9 6.26h-.75a2 2 0 0 1-2 1.99v1.5a3.5 3.5 0 0 0 3.5-3.5zM6.26 9v-.75a2 2 0 0 1-2-2h-1.5a3.5 3.5 0 0 0 3.5 3.5zM3.5 6.26h.75c0-1.1.9-2 2-2v-1.5a3.5 3.5 0 0 0-3.5 3.5zM6.26 3.5v.75a2 2 0 0 1 1.99 2h1.5a3.5 3.5 0 0 0-3.5-3.5zm14.23 14.23h-.75a2 2 0 0 1-2 2v1.5a3.5 3.5 0 0 0 3.5-3.5zm-2.75 2.75v-.75a2 2 0 0 1-1.99-2h-1.5a3.5 3.5 0 0 0 3.5 3.5zM15 17.74h.75a2 2 0 0 1 2-1.99v-1.5a3.5 3.5 0 0 0-3.5 3.5zM17.74 15v.75a2 2 0 0 1 2 2h1.5a3.5 3.5 0 0 0-3.5-3.5zM9 6.26l.2.72c1.44-.4 3.9-.78 5.93-.58 1.02.1 1.85.34 2.38.72.5.35.78.83.74 1.59l.74.04.75.04a3.2 3.2 0 0 0-1.36-2.89 6.5 6.5 0 0 0-3.1-1c-2.27-.22-4.92.2-6.48.63zm10 2.49-.75-.04q-.06.81-.47 1.2-.4.45-1.25.71c-1.16.38-2.73.45-4.46.54-1.66.08-3.48.18-4.91.67a5 5 0 0 0-1.94 1.2 3.7 3.7 0 0 0-.95 2.23l.75.07.74.07q.1-.89.56-1.36.46-.5 1.33-.79c1.2-.41 2.78-.5 4.5-.6 1.65-.08 3.45-.15 4.84-.6a4.3 4.3 0 0 0 1.89-1.11q.79-.84.86-2.15zM5.01 15.33l-.75-.07a3.1 3.1 0 0 0 1.1 2.78 5.7 5.7 0 0 0 2.86 1.11c2.16.3 4.86-.05 6.98-.69l-.21-.72-.21-.71c-2 .59-4.47.9-6.35.64a4 4 0 0 1-2.11-.78c-.4-.33-.63-.79-.57-1.49z'
        fill='currentColor'
      />
    </svg>
  )
}
